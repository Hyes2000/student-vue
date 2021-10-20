<template>
  <div>
    <el-form ref="loginForm" :model="form" :rules="rules" label-width="80px" class="login-box">
      <h3 class="login-title">欢迎登录</h3>
      <el-form-item label="账号" prop="username">
        <el-input type="text" placeholder="请输入账号" v-model="form.username"/>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" placeholder="请输入密码" v-model="form.password" show-password></el-input/>
      </el-form-item>
      <el-form-item >
          <el-radio-group v-model="radio">
            <el-radio-button label="0">我是老师</el-radio-button>
            <el-radio-button label="1">我是学生</el-radio-button>
          </el-radio-group>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" v-on:click="onSubmit('loginForm')">登录</el-button>
        还没有账号?
        <router-link to="Register">注册</router-link>
      </el-form-item>
    </el-form>

    <el-dialog
      title="温馨提示" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
      <span>请输入账号和密码和身份</span>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
    <el-dialog
      title="温馨提示" :visible.sync="dialogVisible2" width="30%" :before-close="handleClose2">
      <span>账号或密码不正确</span>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible2 = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    name: "Login",
    data() {
      return {
        form: {
          username: '',
          password: ''
        },
        radio:'',
        // 表单验证，需要在 el-form-item 元素中增加 prop 属性
        rules: {
          username: [
            {required: true, message: '账号不可为空', trigger: 'blur'}
          ],
          password: [
            {required: true, message: '密码不可为空', trigger: 'blur'}
          ]
        },
        // 对话框显示和隐藏
        dialogVisible: false,
        dialogVisible2:false
      }
    },
    methods: {
      onSubmit(loginForm) {
        // 为表单绑定验证功能
        this.$refs[loginForm].validate((valid) => {
          if (valid&&this.radio!='') {
            let user={"user_id":this.form.username,"password":this.form.password,"identity":this.radio};
            this.axios({
              methed:'POST',
              url:`http://localhost:3000/login2`,
              params:user
            }).then(response=>{
              if (response.data!="error"){
                console.log(response.data)
                this.$router.push({name:'Main',params:{id:response.data.user_id}});
              }else {
                this.dialogVisible2=true;
                return false;
              }
            });
             // this.$router.push("/main/"+this.form.username);
          } else {
            this.dialogVisible = true;
            return false;
          }
        });
      }
    }
  }
</script>

<style lang="scss" scoped>
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
