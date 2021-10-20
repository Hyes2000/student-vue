<template>
<div>

  <el-form ref="register" :model="form" :rules="rules" status-icon  label-width="80px" class="login-box">
    <h3 class="login-title">欢迎注册</h3>
    <el-form-item label="账号" prop="userid">
      <el-input type="text" placeholder="请输入账号" v-model="form.userid"/>
    </el-form-item>
    <el-form-item label="真实姓名" prop="name">
      <el-input type="text" placeholder="请输入真实姓名" v-model="form.name"/>
    </el-form-item>
    <el-form-item label="密码" prop="pass">
      <el-input type="password" placeholder="请输入密码" v-model="form.pass" autocomplete="off" show-password></el-input></el-input>
    </el-form-item>
    <el-form-item label="确认密码" prop="checkPass">
      <el-input type="password" placeholder="请确认密码" v-model="form.checkPass" autocomplete="off" show-password></el-input></el-input>
    </el-form-item>
    <el-form-item>
      <el-radio-group v-model="radio">
        <el-radio-button :label="0">注册老师</el-radio-button>
        <el-radio-button :label="1">注册学生</el-radio-button>
      </el-radio-group>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" v-on:click="onSubmit('register')">注册</el-button>
         已有账号？
      <router-link to="Login">去登录</router-link>
    </el-form-item>
  </el-form>
  <el-dialog
    title="温馨提示" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
    <span>请输入把表格完成</span>
    <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
  </el-dialog>
</div>
</template>

<script>
  export default {
    name: 'Register',
    data() {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.form.checkPass !== '') {
            this.$refs.register.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.form.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        radio:'',
        form: {
          userid:'',
          username: '',
          pass: '',
          checkPass:''
        },

        // 表单验证，需要在 el-form-item 元素中增加 prop 属性
        rules: {
          userid: [
            {required: true, message: '账号不可为空', trigger: 'blur'}
          ],
          name: [
            {required: true, message: '真实姓名不可为空', trigger: 'blur'}
          ],
          pass: [
            { required: true,validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            {required: true, validator: validatePass2, trigger: 'blur' }
          ]
        },

        // 对话框显示和隐藏
        dialogVisible: false
      }
    },
    methods: {
      onSubmit(register) {
        // 为表单绑定验证功能
        this.$refs[register].validate((valid) => {
          if (valid) {
            let user={id:this.form.userid,name:this.form.name,pass:this.form.pass,Identity: this.radio}
           console.log(user)
            this.axios({
              methed: 'post',
              url:`http://localhost:3000/register`,
              params:user
            }).then(result => {
              if (result.data=='haveid'){
                alert("账号已存在！")
              }
              if(result.data=='ok'){
                alert("注册成功")
                this.$router.push({name:'Login'})
              }
            })
          } else {
            this.dialogVisible = true;
            return false;
          }
        });
      },
      resetForm(register) {
        this.$refs[register].resetFields();
      }
    }
  }
</script>

<style scoped>
  .login-box {
    border: 1px solid #DCDFE6;
    width: 350px;
    margin: 180px auto;
    padding: 35px 35px 15px 35px;
    border-radius: 5px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    box-shadow: 0 0 25px #909399;
  }

  .login-title {
    text-align: center;
    margin: 0 auto 40px auto;
    color: #303133;
  }
</style>
