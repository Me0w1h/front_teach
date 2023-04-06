<template>
  <div id='stu-building'>
    <!-- <el-row>
  <el-col :span="9"><div class="grid-content bg-purple-dark"></div></el-col>
  <el-col :span="4"><div class="grid-content bg-purple-dark">我是学生以登录页面</div></el-col>
  <el-col :span="10"><div class="grid-content bg-purple-dark"></div></el-col>
  <el-col :span="1"><div class="grid-content bg-purple-dark"><el-button round size="mini" @click="mima">修改密码</el-button></div></el-col>
</el-row> -->
    <el-row :gutter="100">
      <el-col :span="10">

        <!-- <el-divider><i class="el-icon-alarm-clock">日历</i></el-divider> -->
        <el-calendar v-model="valueDate" style="margin-top: 3%;margin-left: 16%;">
        </el-calendar>
        <el-divider direction="vertical"></el-divider>

      </el-col>

      <el-col :span="12">
        <el-divider><i class="el-icon-user-solid">个人信息</i></el-divider>
        <el-card shadow="hover">
          <div class="user">
            <img style="width: 10%;" />
            <div class="userInfo">
              <p class="name" style="font-family:Impact;font-size:20px;">姓名：{{ this.user.name }}</p>
              <br>
              <p class="access" style="font-family:Impact;font-size:20px;">学号：{{ this.user.username }}</p>
              <br>
              <p class="name" style="font-family:Impact;font-size:20px;">班级：{{ this.user.className }}</p>
              <br>
              <p class="name" style="font-family:Impact;font-size:20px;">学校：{{ this.user.school }}</p>

            </div>
          </div>
          <el-divider></el-divider>
          <div class="login-info">
            <p style="font-family:Impact;font-size:20px;">上次登录时间：<span>2022-6-15</span></p>
            <br>
            <p style="font-family:Impact;font-size:20px;">上次登录地点：<span>中国-北京</span></p>
          </div>

        </el-card>
        <el-divider><i class="el-icon-edit-outline"> 已参加考试</i></el-divider>
        <el-card class="box-card">
          <div>
            <el-table :data="exams" style="width: 100%">
              <el-table-column prop="examName" label="考试名称" width="180">
              </el-table-column>
              <el-table-column prop="date" label="时间" width="180">
              </el-table-column>
              <el-table-column prop="description" label="描述">
              </el-table-column>
              <el-table-column label="操作">
                <template slot-scope="scope">
                  <el-link icon="el-icon-edit" @click="submit(scope.row)">提交该考试成绩</el-link>
                </template>

              </el-table-column>
            </el-table>

          </div>
        </el-card>
      </el-col>

    </el-row>

    <el-drawer title="成绩提交" :visible.sync="drawer" :direction="direction" :before-close="handleClose"
      :modal-append-to-body='false'>

      <Br></Br>
      <el-card>
        <el-divider><i class="el-icon-document">考试详情</i></el-divider>

        <p>考试名称：{{ this.dividerData.examName }}</p><Br></Br>
        <p>截止日期：{{ this.dividerData.date }}</p><Br></Br>
        <p>描述：{{ this.dividerData.description }}</p><Br></Br>


      </el-card>
      <Br></Br>
      <el-card>
        <el-divider><i class="el-icon-document">提交成绩</i></el-divider>
        <div class="demo-input-suffix">
          成绩：<br></br>
          <el-input placeholder="请填写成绩" prefix-icon="el-icon-edit" v-model="input1">
          </el-input>
          <br></br>
          再次确认：
          <br></br>
          <el-input placeholder="请填写成绩" prefix-icon="el-icon-edit" v-model="input2">
          </el-input>
          <br></br>
          <br></br>
          <br></br>
          <br></br>

          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#12288;&#12288;&#12288;&#12288;&#12288;

          <el-button size="medium " type="primary" plain @click="submitScore">提交成绩</el-button>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#12288;&#12288;&#12288;&#12288;&#12288;
          <el-button size="small " @click="reset">重置</el-button>

        </div>
      </el-card>
      <el-divider></el-divider>


    </el-drawer>



  </div>
</template>

<script>
const ip ="124.222.86.127";
const port_back =":54321";
import axios from 'axios'
axios.defaults.withCredentials = true;
var BigInteger = require('jsbn').BigInteger;
var SecureRandom = require('jsbn').SecureRandom;
export default {
  name: 'stu',
  data() {
    return {

      commitData: [],
      input1: "",
      input2: "",
      pk: '',
      pkScore: "",
      n: '',
      n_square: "",
      m: "",
      bits: 32,
      g: "",
      r: "",
      dividerData: {
        examName: "",
        description: '',
        date: "",
        id: '',
        score: "",


      },

      drawer: false,
      direction: 'rtl',
      valueDate: new Date(),
      userImg: require('../../src/assets/images/userImg.jpg'),
      user: {
        id: '',
        username: '',
        password: '',
        name: '',
        className: '',
        classId: '',
        school: '',
        exam: '',


      },
      exams: {
        id: '',
        examName: '',
        date: '',
        status: '',
        description: '',

      },


    }
  },
  mounted() {
    this.testlogin();

  },


  methods: {
    encrypt() {
      this.n = new BigInteger(this.pk);
      this.n_square = this.n.square();
      this.m = new BigInteger(this.dividerData.score);

      this.g = new BigInteger('2');
      this.r = new BigInteger(this.bits, new SecureRandom());
      this.pkScore = this.g.modPow(this.m, this.n_square).multiply(this.r.modPow(this.n, this.n_square)).mod(this.n_square).toString();
    },
    reset() {
      this.input1 = '';
      this.input2 = '';
    },
    submitScore() {
      if (this.input1 === this.input2) {
        this.dividerData.score = this.input1;

        this.encrypt();

        this.commitData[0] = this.user.id;
        this.commitData[1] = this.dividerData.id;
        this.commitData[2] = this.pkScore;
        this.commitData[3] = this.pk;



        axios.post("http://" + ip +port_back+ "/commit", this.commitData).then(res => {
          if (res.data.code == 20010) {

            this.$message.error(res.data.msg)
            if (res.data.msg == "您已经提交过了") {

            }
          } else if (res.data.code == 20011) {
            this.$message.success(res.data.msg)

          }
        })
        this.reset();



      } else {
        this.$message.error("请确保两次填写相同！！！")
      }
    },
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {

          done();

        })
        .catch(_ => { });
    },
    mima() {
      window.alert("修改密码")
    },
    submit(val) {

      this.drawer = true;
      this.dividerData.examName = val.examName;
      this.dividerData.date = val.date;
      this.dividerData.description = val.description;
      this.dividerData.id = val.id;
    },

    sleep(n) {
      var start = new Date().getTime();
      while (true) {
        if (new Date().getTime() - start > n) {
          break;
        }
      }

    },

    //登录请求
    testlogin() {
      axios.get("http://" + ip+port_back + "/login").then(res => {

        if (res.data.code == 20001) {

          this.user = res.data.data[0];

          this.exams = res.data.data[1];
          this.pk = res.data.data[2];



        } else if (res.data.code == 20000) {

          this.$message.error("请先登录!!!");

          this.sleep(1000);


          location.href = "http://"+ip+"/#/login"
        }

      })
    }



  }
}
</script>


<style>
.el-row {
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }
}

.el-col {
  border-radius: 4px;
}

.bg-purple-dark {
  background: #bdc4cd;
}

.bg-purple {
  background: #d3dce6;
}

.bg-purple-light {
  background: #cbd0dd;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>