<template>
    <div class="container">
        <home />
        
          <router-view/>   
    </div>
</template>

<script>
// import Login from './components/Login.vue'
import Home from './components/Home.vue'


export default {
  name: 'App',
  components: {
    Home
  }
}



</script>

<style>

</style>
