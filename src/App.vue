<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/profile">Profile</router-link>
  </nav> -->
  <Navbar />
  {{ $store.state }}
  <router-view class="container"/>
</template>

<script>
import Navbar from './components/Navbar.vue';
export default {
  name : 'App',
  components:{
    Navbar,
  },
  watch:{
    $route(){
      this.$store.commit('onload');
    }
  },
  mounted(){
    this.$store.commit('onload');
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
