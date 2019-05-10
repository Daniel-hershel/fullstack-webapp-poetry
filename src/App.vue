<template>
  <div id="app">
      <router-view></router-view>

  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
  }
}
</script>

<style>

body{
  width:100vw;
 overflow-x: hidden;
   margin-left:0;
  padding-left: 0;
  margin-top:0;
  padding-top: 0;
  /* background:#29252c; */
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* background:#29252c; */
  width:100vw;
  margin: none;

  /* margin-top: 60px; */
}
</style>
