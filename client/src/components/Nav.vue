<template>



    <div class="container">

        <div class="header">
             <h1>For The Love of Fitness</h1>
        </div>
        <nav class="navbar is-transparent">
        <div class="navbar-brand">
          <a class="navbar-item">
            <img src="../css/barbell.jpg" alt="Barbell logo" width="112" height="28">
          </a>
          <div class="navbar-burger" data-target="navbarExampleTransparentExample">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      
        <div class="navbar-menu " :class="{'is-active': isActive }">
          <div class="navbar-start">
          <router-link class="navbar-item is-tab" to="/" active-class="is-active" exact>
              Home
          </router-link>

          <router-link class="navbar-item is-tab" to="/login" active-class="is-active" exact>
              Login
          </router-link>

        <router-link class="navbar-item is-tab" to="/tracking" active-class="is-active" exact>
              Tracking
          </router-link>


          </div>
      
          </div>
         </nav>

    </div>

</template>


<style src="../css/index.css">
</style>

<script>
export default {

}
</script>