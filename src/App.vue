<template>
  <div id="App">
    <div class="wrapper">

    <Navbar />
    <Sidebar/>

   <div class="content-wrapper">
    <router-view></router-view>
   </div>
 
   <Footer/>


</div>
  </div>
</template>

<script>
import Sidebar from '@/components/pages/Sidebar.vue'
import Navbar from './components/pages/Navbar.vue'
import Footer from './components/pages/Footer.vue'

export default {
  name: 'App',
  components: {
     Sidebar,
     Navbar,
     Footer
   
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
  margin-top: 60px;
}
</style>
