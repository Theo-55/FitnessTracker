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
          <router-link class="navbar-item is-tab" to="/home" active-class="is-active" exact>
              Home
          </router-link>

        <router-link class="navbar-item is-tab" to="/tracking" active-class="is-active" exact>
              Tracking
          </router-link>

          <router-link class="navbar-item is-tab" to="/profile" active-class="is-active" exact>
              Profile
          </router-link>

          <router-link class="navbar-item is-tab" to="/addFriend" active-class="is-active" exact>
              Add Friend
          </router-link>

          </div>


            <div class="navbar-end">
            <div class="navbar-item">
              <div class="field is-grouped">
                <!-- <p class="control"> -->
                    <div class="navbar-item has-dropdown is-hoverable">
                        <a class="navbar-link">
                          Share
                        </a>
                
                        <div class="navbar-dropdown">
                          <a class="navbar-item">
                            Instagram
                          </a>
                          <a class="navbar-item">
                            Twitter
                          </a>
                          <a class="navbar-item">
                            Facebook
                          </a>
                          <a class="navbar-item">
                            SnapChat
                          </a>
                        </div>
                      </div>
                    </div>
                <!-- </p> -->
              </div>
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