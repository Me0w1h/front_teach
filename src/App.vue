<template>
  <div id="app">
    <router-view v-wechat-title="$route.meta.title"/>
  </div>
</template>

<script>

export default {
  name: 'App',

}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
body{
  margin:0;
  padding:0;
  border:0
}
#building{
  background:url("../src/assets/images/home_bg.jpg");
  width:100%;
  height:100%;
  position:fixed;
  background-size:100% 100%;
}
#stu-building{
  background:url("../src/assets/images/stu-bg.png");
  width:100%;
  height:100%;
   position:fixed;

  background-size:100% 100%;
}

</style>


