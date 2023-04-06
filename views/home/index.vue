<template>
<div id='building'>

  <el-row> 
    <el-col :span="22">
      <h1 style="color:white ; font-size:50px;font-family:宋体;margin-top: 2%;">教学测评展示</h1>
    </el-col>
    <el-col :span="2">
      <el-button @click="tologin" style="margin-top: 20%;margin-right:5%;">登录</el-button>
    </el-col>
  </el-row>

<el-row :gutter="100">
    
    <el-col :span="12">
      <div class="grid-content leftmid">
        <el-card  style="background-color: rgba(255,255,255,0.6);">
            <h1 style="font-family:Impact;"><i class="el-icon-tickets">最近考试</i></h1>
            <br>
            <el-table
      :data="exams"
      style="width: 100%"
      :row-class-name="tableRowClassName">
      <el-table-column
        prop="examName"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="date"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="description"
        label="地址">
      </el-table-column>
      <el-table-column label="操作">
            <template slot-scope="scope">
        <el-link icon="el-icon-view"  underline @click="handleClick(scope.row)">查看详情</el-link>
      </template>
                
        </el-table-column>
      
    </el-table>
        </el-card>
    </div>
    </el-col>
   <el-col :span="12">
   <div class="grid-content rightmid">
        <el-card style="background-color: rgba(255,255,255,0.6);">
            <h1 style="font-family:Impact;">考试详情</h1>
            <br>
            <el-table
      :data="classes"

      :row-class-name="tableRowClassName">
      <el-table-column
        prop="className"
        label="班级名称"
        width="180">
      </el-table-column>
      <el-table-column
        prop="count"
        label="已填写人数"
        width="180">
      </el-table-column>
      <el-table-column
        prop="total"
        label="总人数">
      </el-table-column>
      <el-table-column
        prop="score"
        label="平均分">
      </el-table-column>
      
      
    </el-table>
        </el-card>
        </div>
    </el-col>
</el-row>


</div>

</template>



<script>
const ip ="124.222.86.127";
const port_back =":54321";
import axios from 'axios'
var BigInteger = require('jsbn').BigInteger;
var SecureRandom = require('jsbn').SecureRandom;

export default{
    name:'home',
    data(){
        return {
            url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
            
            exams: {
                id:"",
                examName:"",
                date:"",
                description:"",
                status:""
            },
            classes:{
                classId:'',
                className:'',
                count:'',
                score:'',
                total:""
            },
            n:'',
            n_square:"",
            m:"",
            bits:32,
            g:"",
            r:""

             
        }
    } ,
    mounted(){



      
           this.getexams();
          
        }, 
        methods:{
          
           
            getexams(){
                axios.get("http://"+ip+port_back+"/exams").then(res=>{
                    this.exams = res.data.data;
                })
            }
            ,


            tologin(){
                location.href="http://"+ip+"/#/login"
            },
            handleClick(row){
                axios.get("http://"+ip+port_back+"/texam/"+row.id).then(res=>{
                    if(res.data.code=='20041'){
                        this.classes= res.data.data
                        for (let index = 0; index < this.classes.length; index++) {
                            const element = this.classes[index];
                            if(element.count<element.total){
                                element.score = '未统计完成'
                            }
                            
                        }
                    }else{
                        this.$message.error("获取失败！")
                    }
                    
                })
            },
             tableRowClassName({row, rowIndex}) {
        if (rowIndex === 1) {
          return 'warning-row';
        } else if (rowIndex === 3) {
          return 'success-row';
        }
        return '';
      }
        }
}
</script>


<style>
  
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #2d082fdf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .leftmid{
    margin-top: 18%;
    margin-left:10%;
    height: 100%;
    background-color:rgba(255,255,255,0.7);
  }
  .rightmid{
    margin-top: 18%;
    margin-right:10%;
    height: 100%;
    background-color:rgba(255,255,255,0.7);
  }

</style>
<style>
  .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
</style>