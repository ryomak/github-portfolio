<template>
  <div id="app">
    <layout>
      <router-view/>
    </layout>
  </div>
</template>
<script lang="ts">
import Layout from './components/layout/index.vue'
import Vue from 'vue'
export default Vue.extend({
  components:{
    Layout,
  }
})
</script>

<style lang="scss">
* {
    margin: 0px;
    padding: 0px;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  top:0;
  margin:0;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
