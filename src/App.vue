<template>
  <div id="app" class="navbar">
    <router-link to="/home" class="text-logo" style="float: left">
      <h3 class="title">ALLINONE</h3>
    </router-link>
    <el-menu :router="true" mode="horizontal">
      <el-menu-item index="/">Home</el-menu-item>

      <el-menu-item index="/vue1">应用1</el-menu-item>
      <el-menu-item index="/vue2">应用2</el-menu-item>
    </el-menu>

    <router-view>
      <img alt="Vue logo" src="./assets/logo.png" />
      <HelloWorld msg="Welcome to Your Vue.js App" />
    </router-view>
    <div id="vue1"></div>
    <div id="vue2"></div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
