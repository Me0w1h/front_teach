
<template>
  <div class="site-wrapper site-page--login">
    <div class="site-content__wrapper">
      <div class="site-content">
        <div class="brand-info">
          <h2 class="brand-info__text">教学质量测评系统</h2>
          <p class="brand-info__intro">该系统是基于vue、element-ui构建开发实现,利用Paillier算法,提供一套更优的,更安全的解决方案。</p>
        </div>
        <div class="login-main">
          <h3 class="login-title" style="font-weight:bold">学生登录</h3>
          <br>
          <el-form :model="dataForm" :rules="dataRule" ref="dataForm"  status-icon>
            <el-form-item prop="userName">
              <el-input v-model="loginuser.username" placeholder="帐号"></el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input v-model="loginuser.password" type="password" placeholder="密码"></el-input>
            </el-form-item>
            <el-form-item prop="captcha">
              <el-row :gutter="20">
                <el-col :span="14">
                  <!-- <el-input v-model="dataForm.captcha" placeholder="验证码">
                  </el-input> -->
                </el-col>
                <!-- <el-col :span="10" class="login-captcha">
                  <img :src="captchaPath" @click="getCaptcha()" alt="">
                </el-col> -->
              </el-row>
            </el-form-item>
            <el-form-item>
              <el-button class="login-btn-submit" type="primary" @click="login">登录</el-button>
            </el-form-item>
            <!-- <el-form-item>
                <el-button type="warning" native-type="reset">重置</el-button>
            </el-form-item> -->
            <!-- <el-link type="primary" href="#" >没有账号，注册一下  </el-link> -->
          </el-form>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
const ip ="124.222.86.127";
const port_back =":54321";
import axios from 'axios'
axios.defaults.withCredentials = true;
export default{
    name:'login',
    data(){
        return {
                //登录框信息
                loginuser:{
                    username:'',
                    password:''
                }
            }
    },
    methods:{
            //登录请求

            login(){
                


                axios.post("http://"+ip+port_back+"/login",this.loginuser).then( res =>{

                    if(res.data.code==20001){
                        
                        location.href="http://"+ip+"/#/stu"


                    }else if (res.data.code==20000){
                          this.$message.error(res.data.msg);

                    }

                })


            }


        }   
}
</script>
</script>

<style lang="scss">
  .site-wrapper.site-page--login {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(38, 50, 56, .6);
    overflow: hidden;
    background-image: url(../../src/assets/images/login_bg.jpg);
    .site-content__wrapper {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      padding: 0;
      margin: 0;
      overflow-x: hidden;
      overflow-y: auto;
      background-color: transparent;
    }
    .site-content {
      min-height: 100%;
      padding: 30px 500px 30px 30px;
    }
    .brand-info {
      margin: 220px 100px 0 90px;
      color: #fff;
    }
    .brand-info__text {
      margin:  0 0 22px 0;
      font-size: 48px;
      font-weight: 400;
      text-transform : uppercase;
    }
    .brand-info__intro {
      margin: 10px 0;
      font-size: 16px;
      line-height: 1.58;
      opacity: .6;
    }
    .login-main {
      position: absolute;
      top: 0;
      right: 0;
      padding: 150px 60px 180px;
      width: 470px;
      min-height: 100%;
      background-color: #fff;
    }
    .login-title {
      font-size: 16px;
    }
    .login-captcha {
      overflow: hidden;
      > img {
        width: 100%;
        cursor: pointer;
      }
    }
    .login-btn-submit {
      width: 100%;
      margin-top: 38px;
    }
  }
</style>