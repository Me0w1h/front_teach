"use strict";(self["webpackChunkvue"]=self["webpackChunkvue"]||[]).push([[774],{1774:function(t,e,i){i.r(e),i.d(e,{default:function(){return v}});var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"stu-building"}},[i("el-row",{attrs:{gutter:100}},[i("el-col",{attrs:{span:10}},[i("el-calendar",{staticStyle:{"margin-top":"3%","margin-left":"16%"},model:{value:t.valueDate,callback:function(e){t.valueDate=e},expression:"valueDate"}}),i("el-divider",{attrs:{direction:"vertical"}})],1),i("el-col",{attrs:{span:12}},[i("el-divider",[i("i",{staticClass:"el-icon-user-solid"},[t._v("个人信息")])]),i("el-card",{attrs:{shadow:"hover"}},[i("div",{staticClass:"user"},[i("img",{staticStyle:{width:"10%"}}),i("div",{staticClass:"userInfo"},[i("p",{staticClass:"name",staticStyle:{"font-family":"Impact","font-size":"20px"}},[t._v("姓名："+t._s(this.user.name))]),i("br"),i("p",{staticClass:"access",staticStyle:{"font-family":"Impact","font-size":"20px"}},[t._v("学号："+t._s(this.user.username))]),i("br"),i("p",{staticClass:"name",staticStyle:{"font-family":"Impact","font-size":"20px"}},[t._v("班级："+t._s(this.user.className))]),i("br"),i("p",{staticClass:"name",staticStyle:{"font-family":"Impact","font-size":"20px"}},[t._v("学校："+t._s(this.user.school))])])]),i("el-divider"),i("div",{staticClass:"login-info"},[i("p",{staticStyle:{"font-family":"Impact","font-size":"20px"}},[t._v("上次登录时间："),i("span",[t._v("2022-6-15")])]),i("br"),i("p",{staticStyle:{"font-family":"Impact","font-size":"20px"}},[t._v("上次登录地点："),i("span",[t._v("中国-北京")])])])],1),i("el-divider",[i("i",{staticClass:"el-icon-edit-outline"},[t._v(" 已参加考试")])]),i("el-card",{staticClass:"box-card"},[i("div",[i("el-table",{staticStyle:{width:"100%"},attrs:{data:t.exams}},[i("el-table-column",{attrs:{prop:"examName",label:"考试名称",width:"180"}}),i("el-table-column",{attrs:{prop:"date",label:"时间",width:"180"}}),i("el-table-column",{attrs:{prop:"description",label:"描述"}}),i("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-link",{attrs:{icon:"el-icon-edit"},on:{click:function(i){return t.submit(e.row)}}},[t._v("提交该考试成绩")])]}}])})],1)],1)])],1)],1),i("el-drawer",{attrs:{title:"成绩提交",visible:t.drawer,direction:t.direction,"before-close":t.handleClose,"modal-append-to-body":!1},on:{"update:visible":function(e){t.drawer=e}}},[i("Br"),i("el-card",[i("el-divider",[i("i",{staticClass:"el-icon-document"},[t._v("考试详情")])]),i("p",[t._v("考试名称："+t._s(this.dividerData.examName))]),i("Br"),i("p",[t._v("截止日期："+t._s(this.dividerData.date))]),i("Br"),i("p",[t._v("描述："+t._s(this.dividerData.description))]),i("Br")],1),i("Br"),i("el-card",[i("el-divider",[i("i",{staticClass:"el-icon-document"},[t._v("提交成绩")])]),i("div",{staticClass:"demo-input-suffix"},[t._v(" 成绩："),i("br"),i("br"),i("el-input",{attrs:{placeholder:"请填写成绩","prefix-icon":"el-icon-edit"},model:{value:t.input1,callback:function(e){t.input1=e},expression:"input1"}}),i("br"),i("br"),t._v(" 再次确认： "),i("br"),i("br"),i("el-input",{attrs:{placeholder:"请填写成绩","prefix-icon":"el-icon-edit"},model:{value:t.input2,callback:function(e){t.input2=e},expression:"input2"}}),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),t._v("      　　　　　 "),i("el-button",{attrs:{size:"medium ",type:"primary",plain:""},on:{click:t.submitScore}},[t._v("提交成绩")]),t._v("      　　　　　 "),i("el-button",{attrs:{size:"small "},on:{click:t.reset}},[t._v("重置")])],1)],1),i("el-divider")],1)],1)},s=[],r=i(5063),n=i.n(r);const l="124.222.86.127",d=":54321";n().defaults.withCredentials=!0;var o=i(3484).BigInteger,c=i(3484).SecureRandom,m={name:"stu",data(){return{commitData:[],input1:"",input2:"",pk:"",pkScore:"",n:"",n_square:"",m:"",bits:32,g:"",r:"",dividerData:{examName:"",description:"",date:"",id:"",score:""},drawer:!1,direction:"rtl",valueDate:new Date,userImg:i(1806),user:{id:"",username:"",password:"",name:"",className:"",classId:"",school:"",exam:""},exams:{id:"",examName:"",date:"",status:"",description:""}}},mounted(){this.testlogin()},methods:{encrypt(){this.n=new o(this.pk),this.n_square=this.n.square(),this.m=new o(this.dividerData.score),this.g=new o("2"),this.r=new o(this.bits,new c),this.pkScore=this.g.modPow(this.m,this.n_square).multiply(this.r.modPow(this.n,this.n_square)).mod(this.n_square).toString()},reset(){this.input1="",this.input2=""},submitScore(){this.input1===this.input2?(this.dividerData.score=this.input1,this.encrypt(),this.commitData[0]=this.user.id,this.commitData[1]=this.dividerData.id,this.commitData[2]=this.pkScore,this.commitData[3]=this.pk,n().post("http://"+l+d+"/commit",this.commitData).then((t=>{20010==t.data.code?(this.$message.error(t.data.msg),t.data.msg):20011==t.data.code&&this.$message.success(t.data.msg)})),this.reset()):this.$message.error("请确保两次填写相同！！！")},handleClose(t){this.$confirm("确认关闭？").then((e=>{t()})).catch((t=>{}))},mima(){window.alert("修改密码")},submit(t){this.drawer=!0,this.dividerData.examName=t.examName,this.dividerData.date=t.date,this.dividerData.description=t.description,this.dividerData.id=t.id},sleep(t){var e=(new Date).getTime();while(1)if((new Date).getTime()-e>t)break},testlogin(){n().get("http://"+l+d+"/login").then((t=>{20001==t.data.code?(this.user=t.data.data[0],this.exams=t.data.data[1],this.pk=t.data.data[2]):2e4==t.data.code&&(this.$message.error("请先登录!!!"),this.sleep(1e3),location.href="http://"+l+"/#/login")}))}}},u=m,p=i(1001),h=(0,p.Z)(u,a,s,!1,null,null,null),v=h.exports},1806:function(t,e,i){t.exports=i.p+"static/img/userImg.b1a04195.jpg"}}]);
//# sourceMappingURL=774.f58c6025.js.map