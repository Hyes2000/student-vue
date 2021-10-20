<template>
    <div>
      <h1>成绩录入</h1>
      <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
        <el-form-item label="考试名称" style="width: 300px">
          <el-input v-model="sizeForm.name"></el-input>
        </el-form-item>
        <el-form-item label="考试班级" style="width: 200px">
          <el-input v-model="sizeForm.name2"></el-input>
        </el-form-item>
        <el-form-item label="科目性质">
          <el-select v-model="sizeForm.region" placeholder="请选择考试性质">
            <el-option label="未分科" value="shanghai"></el-option>
            <el-option label="理科" value="beijing"></el-option>
            <el-option label="文科" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="考试时间">
          <el-col :span="11">
            <el-date-picker type="date" placeholder="选择日期" v-model="sizeForm.date1" style="width: 100%;"></el-date-picker>
          </el-col>
          <el-col class="line" :span="2">-</el-col>
          <el-col :span="11">
            <el-time-picker placeholder="选择时间" v-model="sizeForm.date2" style="width: 100%;"></el-time-picker>
          </el-col>
        </el-form-item>
        <el-form-item label="考试性质">
          <el-radio-group v-model="sizeForm.resource" size="medium">
            <el-radio border label="测试"></el-radio>
            <el-radio border label="周测"></el-radio>
            <el-radio border label="月考"></el-radio>
            <el-radio border label="模拟考试"></el-radio>
            <el-radio border label="期中考试"></el-radio>
            <el-radio border label="期末考试"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item size="large">
          <el-button type="primary" @click="onSubmit">立即创建</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </div>
</template>

<script>
  export default {
    props:['name'],
    name: 'AchievementAdd',
    data() {
      return {
        sizeForm: {
          name: '',
          name2: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      };
    },
    methods: {
      onSubmit() {
        console.log('submit!');
        this.$router.push({name:'AchievementAdd2',params:{id:this.$route.params.id}});
      }
    }
  }
</script>

<style scoped>

</style>
