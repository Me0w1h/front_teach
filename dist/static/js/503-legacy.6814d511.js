"use strict";(self["webpackChunkvue"]=self["webpackChunkvue"]||[]).push([[503],{2503:function(t,e,s){s.r(e),s.d(e,{default:function(){return m}});var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"site-wrapper site-page--login"},[s("div",{staticClass:"site-content__wrapper"},[s("div",{staticClass:"site-content"},[t._m(0),s("div",{staticClass:"login-main"},[s("h3",{staticClass:"login-title",staticStyle:{"font-weight":"bold"}},[t._v("学生登录")]),s("br"),s("el-form",{ref:"dataForm",attrs:{model:t.dataForm,rules:t.dataRule,"status-icon":""}},[s("el-form-item",{attrs:{prop:"userName"}},[s("el-input",{attrs:{placeholder:"帐号"},model:{value:t.loginuser.username,callback:function(e){t.$set(t.loginuser,"username",e)},expression:"loginuser.username"}})],1),s("el-form-item",{attrs:{prop:"password"}},[s("el-input",{attrs:{type:"password",placeholder:"密码"},model:{value:t.loginuser.password,callback:function(e){t.$set(t.loginuser,"password",e)},expression:"loginuser.password"}})],1),s("el-form-item",{attrs:{prop:"captcha"}},[s("el-row",{attrs:{gutter:20}},[s("el-col",{attrs:{span:14}})],1)],1),s("el-form-item",[s("el-button",{staticClass:"login-btn-submit",attrs:{type:"primary"},on:{click:t.login}},[t._v("登录")])],1)],1)],1)])])])},r=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"brand-info"},[s("h2",{staticClass:"brand-info__text"},[t._v("教学质量测评系统")]),s("p",{staticClass:"brand-info__intro"},[t._v("该系统是基于vue、element-ui构建开发实现,利用Paillier算法,提供一套更优的,更安全的解决方案。")])])}],n=s(5063),i=s.n(n),l="124.222.86.127",o=":54321";i().defaults.withCredentials=!0;var u={name:"login",data:function(){return{loginuser:{username:"",password:""}}},methods:{login:function(){var t=this;i().post("http://"+l+o+"/login",this.loginuser).then((function(e){20001==e.data.code?location.href="http://"+l+"/#/stu":2e4==e.data.code&&t.$message.error(e.data.msg)}))}}},c=u,p=s(1001),d=(0,p.Z)(c,a,r,!1,null,null,null),m=d.exports}}]);
//# sourceMappingURL=503-legacy.6814d511.js.map