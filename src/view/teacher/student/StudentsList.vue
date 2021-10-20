<<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="20"><div class="grid-content bg-purple"><h1>学生列表</h1></div></el-col>
      <el-col :span="3"><div class="grid-content bg-purple">
        <el-input placeholder="请输入学生姓名" prefix-icon="el-icon-search" v-model="input2"></el-input></div>
      </el-col>
    </el-row>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="student_number" label="学号" width="180"></el-table-column>
      <el-table-column prop="student_name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="sex" label="性别" width="80"></el-table-column>
      <el-table-column prop="student_age" label="年龄" width="80"></el-table-column>
      <el-table-column prop="address" label="班别" width="180"></el-table-column>
      <el-table-column prop="" label="职位" width="180"></el-table-column>
      <el-table-column prop="" label="备注" ></el-table-column>
      <el-table-column prop="" label="评价" ></el-table-column>
    </el-table>
  </div>

</template>

<script>
  export default {
    beforeRouteEnter:((to, from, next) => {
      next(mv=>{
        mv.getstudents()
      })
    }),
    data() {
      return {
        tableData: []
      }
    },
    methods:{
      getstudents(){
        this.axios({
          method: 'get',
          url:'http://localhost:3000/student/getstudents'
        }).then(result => {
          this.tableData=result.data
          console.log(result.data)
        })
      }
    }
  }
</script>
