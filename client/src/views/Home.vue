<template>

    <div class="container">

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


                      <div class="tile is-ancestor">
        <div class="tile is-parent is-vertical">
          <article class="tile is-child box">
            <p class="title">Goals</p>
            <p class="subtitle">To become the best version of <strong>YOURSELF</strong> in your eyes</p>
            <p class="subtitle">Reap the benefits of working your body</p>
            <p class="subtitle">Visualize the improvements made over time</p>
          </article>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child box is is-vertical">
            <p class="title">Diet</p>
            <p class="subtitle">Diet is 75% of the work to see true progress in your efforts</p>
            <p class="subtitle">Calories in : Calories out</p>
            <p class="subtitle">If you wish to lose weight, Your calorie intake must be roughly 200-400 calories less than calories burned</p>
            <p class="subtitle">To gain muscle, Calories in must be roughly 200-300 over calories burned with high amounts of protein</p>
            <p class="subtitle">Macro nutrients should be the focus, CARBS are not the enemy, they provide energy for your workouts!</p>
          </article>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child box is is-vertical">
            <p class="title">Sleep</p>
            <p class="subtitle">Without proper amounts of sleep, Workouts are basically <strong>WORTHLESS</strong></p>
            <div class="content">
              <p>Sleep is the time where your body recovers a substantial amount</p>
              <p>The amount of sleep you get directly correlates to your energy and mood while excercising</p>
              <p>Lack of sleep promotes a higher risk of injury and lack of mental and physical development</p>
            </div>
          </article>
        </div>
      </div>



        </div>


</template>


<style src="../css/index.css">
</style>

<script>
import Nav from '../components/Nav.vue'
export default {
  components: Nav
}
</script>
