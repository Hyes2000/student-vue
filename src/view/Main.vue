<template>
  <el-container style="height: 100%; border: 1px solid #eee">
    <el-aside width="200px" >
      <el-menu :default-openeds="[1,2,3,4]">
        <el-menu-item index="0" style="background-color: #ffffff">
          <i class="el-icon-s-platform"></i>
          <span slot="title">后台管理系统</span>
        </el-menu-item>
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-tickets"></i>用户管理
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1">
              <router-link :to="{name: 'Profile',params:{id:$route.params.id}}">个人信息</router-link>
            </el-menu-item>
            <el-menu-item index="1-2">
              <router-link :to="{name:'List',params:{id:$route.params.id}}">用户列表</router-link>
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-tickets"></i>成绩管理
          </template>
          <el-menu-item-group>
            <el-menu-item index="2-1">
              <router-link :to="{name:'AchievementSelect',params:{id:$route.params.id}}">成绩列表</router-link>
            </el-menu-item>
            <el-menu-item index="2-2">
              <router-link :to="{name:'AchievementAdd',params:{id:$route.params.id}}">成绩录入</router-link>
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-user-solid"></i>学生管理
          </template>
          <el-menu-item-group>
            <el-menu-item index="3-1">
              <router-link :to="{name:'StudentsList',params:{id:$route.params.id}}">学生列表</router-link>
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title">
            <i class="el-icon-date"></i>课程管理
          </template>
          <el-menu-item-group>
            <el-menu-item index="4-1">
              <router-link :to="{name:'CurriculumsList',params:{id:$route.params.id}}">课程列表</router-link>
            </el-menu-item>
            <el-menu-item index="4-2">
              <router-link :to="{name:'Curriculum',params:{id:$route.params.id}}">课程信息</router-link>
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>

      </el-menu>
    </el-aside>

    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item @click.native="golist">个人信息</el-dropdown-item>
            <el-dropdown-item>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span>{{id}}</span>
      </el-header>

      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  export default {
    props:['id'],
    name:"Main",
    beforeRouteEnter:((to, from, next) => {
      next(vm=>{
        vm.method()
      })
    }),
    data(){
      return
    },
    methods:{
      method:function(){
        console.log("被调用了")
        console.log(this.$route.params.id)
      },
      golist(){
        this.$router.push({name:'Profile',params:{id:this.$route.params.id}});
      }
    }

  }
</script>

<style>
  .el-header {
    background-color: #4cd1bc;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
  }

  .el-submenu{
    background-color: rgba(0, 0, 0, 0.13);
  }
  .el-menu-item-group{
    background-color: rgba(144, 207, 83, 0.14);
  }
  .el-main{
    background-color: rgba(0, 0, 0, 0.02);
  }
</style>

