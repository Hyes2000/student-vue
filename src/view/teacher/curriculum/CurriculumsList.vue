<template>
    <div>
      <h1>课程列表</h1>
      <el-row :gutter="24">
        <el-col :span="3"><div class="grid-content bg-purple">
          <el-menu default-active="2" >
            <el-menu-item index="0">
              <i class="el-icon-s-grid"></i>
              <span slot="title">课程表</span>
            </el-menu-item>
            <el-menu-item>
              <span slot="title">第一节</span>
            </el-menu-item>
            <el-menu-item >
              <span slot="title">第二节</span>
            </el-menu-item>
            <el-menu-item >
              <span slot="title">第三节</span>
            </el-menu-item>
            <el-menu-item >
              <span slot="title">第四节</span>
            </el-menu-item>
            <el-menu-item >
              <span slot="title">第五节</span>
            </el-menu-item>
            <el-menu-item >
              <span slot="title">第六节</span>
            </el-menu-item>
            <el-menu-item >
              <span slot="title">第七节</span>
            </el-menu-item>
            <el-menu-item >
              <span slot="title">第八节</span>
            </el-menu-item>
            <el-menu-item >
              <span slot="title">第九节</span>
            </el-menu-item>
            <el-menu-item >
              <span slot="title">第十节</span>
            </el-menu-item>
          </el-menu>
        </div></el-col>
        <el-col :span="20"><div class="grid-content bg-purple">
          <template>
            <el-table :data="tableData" border style="width: 100%">
              <el-table-column prop="address" label="星期一"></el-table-column>
              <el-table-column prop="address" label="星期二"></el-table-column>
              <el-table-column prop="address" label="星期三"></el-table-column>
              <el-table-column prop="address" label="星期四"></el-table-column>
              <el-table-column prop="address" label="星期五"></el-table-column>
              <el-table-column prop="address" label="星期六"></el-table-column>
              <el-table-column prop="address" label="星期天"></el-table-column>
            </el-table>
          </template>
        </div></el-col>
      </el-row>

    </div>
</template>

<script>
  export default {
    name: 'CurriculumsList'
  }
</script>

<style scoped>

</style>
