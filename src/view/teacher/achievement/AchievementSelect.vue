<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="20"><div class="grid-content bg-purple"><h1>成绩列表</h1></div></el-col>
      <el-col :span="3">
        <div class="grid-content bg-purple">
          <el-input placeholder="请输入学生姓名" prefix-icon="el-icon-search" v-model="input2"/>
        </div>
      </el-col>
      <el-button icon="el-icon-search" circle @:click="onSubmit('query')"></el-button>
    </el-row>

    <el-table :data="tableData" style="width: 100%"  :default-sort = "{prop: 'date', order: 'descending'}">
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column prop="student_number" label="学号" sortable width="180"></el-table-column>
      <el-table-column prop="student_name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="achievement.chinese" label="语文" sortable width="180"></el-table-column>
      <el-table-column prop="achievement.math" label="数学" sortable width="180"></el-table-column>
      <el-table-column prop="achievement.english" label="英语" sortable width="180"></el-table-column>
      <el-table-column prop="achievement.physics" label="物理" sortable width="180"></el-table-column>
      <el-table-column prop="achievement.chemistry" label="化学" sortable width="180"></el-table-column>
      <el-table-column prop="achievement.biology" label="生物" sortable width="180"></el-table-column>
      <el-table-column prop="achievement.politics" label="政治" sortable width="180"></el-table-column>
      <el-table-column prop="achievement.history" label="历史" sortable width="180"></el-table-column>
      <el-table-column prop="achievement.geography" label="地理" sortable width="180"></el-table-column>
      <el-table-column prop="address" label="平均分" sortable width="180"></el-table-column>
      <el-table-column prop="chiness" label="总分" sortable width="180"></el-table-column>
      <el-table-column prop="chiness" label="总分" sortable width="180"></el-table-column>
      <el-table-column fixed="right" label="操作" width="120">
        <el-button @click.native.prevent="deleteRow(scope.$index, tableData)" type="text" size="small">
          修改
        </el-button>
      </el-table-column>
    </el-table>
    <div style="margin-top: 20px">
      <el-button @click="toggleSelection()">移除</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    name:'AchievementSelect',
    beforeRouteEnter:((to, from, next) => {
      next(vm=>{
        vm.getachievement()
      })
    }),
    data() {
      return {
        tableData: [],
        input2:''
      }
    },
    methods: {
      formatter(row, column) {
        return row.address;
      },
      deleteRow (index, rows) {
        rows.splice(index, 1);
      },
      getachievement(){
        this.axios({
          method:'get',
          url:'http://localhost:3000/achievement/achievementList',
        }).then(result => {
          // for (let i=0;i<result.data.length;i++){
          //   console.log(result.data[i])
          // }
          this.tableData=result.data
          console.log(result)
        })
      },
      onSubmit(qurey){
        console.log(123)
      }
    },
  }
</script>

<style scoped>

</style>

