<template>
<div>
  <h1>luruchengji</h1>
  <el-row :gutter="24">
    <el-col :span="23"><div class="grid-content bg-purple">
      <template>
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column prop="date" label="日期" width="180">
          </el-table-column>
          <el-table-column prop="name" label="姓名" width="180">
          </el-table-column>
          <el-table-column prop="address" label="地址">
          </el-table-column>
        </el-table>
      </template>
    </div></el-col>
  </el-row>
  <div style="margin: 20px;"></div>
  <el-row :gutter="24">
    <el-col :span="5"><div class="grid-content bg-purple">
      <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
        <el-form-item label="名称">
          <el-input v-model="formLabelAlign.name"></el-input>
        </el-form-item>
      </el-form>
    </div></el-col>
    <el-col :span="3"><div class="grid-content bg-purple">
      <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
        <el-form-item label="语文" >
          <el-input v-model="formLabelAlign.name"></el-input>
        </el-form-item>
        <el-form-item label="数学">
          <el-input v-model="formLabelAlign.region"></el-input>
        </el-form-item>
        <el-form-item label="英语">
          <el-input v-model="formLabelAlign.type"></el-input>
        </el-form-item>
      </el-form>
    </div></el-col>
    <el-col :span="3"><div class="grid-content bg-purple">
      <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
        <el-form-item label="物理">
          <el-input v-model="formLabelAlign.name"></el-input>
        </el-form-item>
        <el-form-item label="化学">
          <el-input v-model="formLabelAlign.region"></el-input>
        </el-form-item>
        <el-form-item label="生物">
          <el-input v-model="formLabelAlign.type"></el-input>
        </el-form-item>
      </el-form>
    </div></el-col>
    <el-col :span="3"><div class="grid-content bg-purple">
      <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
        <el-form-item label="政治">
          <el-input v-model="formLabelAlign.name"></el-input>
        </el-form-item>
        <el-form-item label="历史">
          <el-input v-model="formLabelAlign.region"></el-input>
        </el-form-item>
        <el-form-item label="地理">
          <el-input v-model="formLabelAlign.type"></el-input>
        </el-form-item>
      </el-form>
    </div></el-col>
  </el-row>

</div>
</template>

<script>
  export default {
    name: 'AchievementAdd2',
    data() {
      return {
        tableData:'',
        labelPosition: 'right',
        formLabelAlign: {
          name: '',
          region: '',
          type: ''
        }
      };
    }
  }
</script>

<style scoped>

</style>
