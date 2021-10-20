<template>
  <div>
    <el-row type="flex" class="row-bg">
      <el-col :span="18"><div class="grid-content bg-purple">
        <el-descriptions title="详细信息" direction="vertical" :column="3" border>
          <el-descriptions-item label="用户名">{{$route.params.id}}</el-descriptions-item>
          <el-descriptions-item label="真是姓名">{{name}}</el-descriptions-item>
          <el-descriptions-item label="手机号">{{phone}}</el-descriptions-item>
          <el-descriptions-item label="邮箱">{{e_mail}}</el-descriptions-item>
          <el-descriptions-item label="居住地" :span="2">{{city}}</el-descriptions-item>
          <el-descriptions-item label="联系地址">{{address}}</el-descriptions-item>
          <el-descriptions-item label="学号">xxxxxxxxx</el-descriptions-item>
          <el-descriptions-item label="职位">{{position}}老师</el-descriptions-item>
          <el-descriptions-item label="所在班级">xxxx</el-descriptions-item>
        </el-descriptions>
      </div></el-col>
      <el-col :span="1"></el-col>
      <el-col :span="3"><div class="grid-content bg-purple">
        <div style="background-color: white">
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="true"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </div>
        <div class="el-alert__content">点击上传头像</div>
      </div></el-col>
    </el-row>

  </div>
</template>

<script>
  export default {

    name: 'Profile',
    beforeRouteEnter:(to, from, next)=>{
      next(vm=>{

        vm.getData();
      });
    },
    beforeRouteLeave:(to, from, next) => {
      console.log("离开了")
      next();
    },
    data() {
      return {
        name:'',
        phone:'',
        e_mail:'',
        city:'',
        address:'',
        position:'',
        imageUrl: ''
      };
    },
    methods:{
      getData:function () {
        let user={user_id:this.$route.params.id}
        this.axios({
          method:'get',
          url:'http://localhost:3000/user/profile',
          params:user
        }).then(res => {
          console.log(res)
          this.name=res.data.user_name
          this.phone=res.data.phone
          this.e_mail=res.data.e_mail
          this.city=res.data.city
          this.address=res.data.address
          this.position=res.data.position
        })
      },
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      }
    }
  }
</script>

<style scoped>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
  .el-upload{
    background-color: #ffffff;
  }

</style>
