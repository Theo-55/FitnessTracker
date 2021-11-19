<template>
  <div class="section">
      <h1 class="title" style="background-color: white;"> Tracking Page </h1>
      
      <div class="columns">

          <!--
          <div class="column">
              <div class="card">
                  <div class="card-content">
                      {{newPost}}
                  </div>
              </div>
          </div>
            -->
        <div class="column is-half is-offset-one-quarter ">

            <post-edit :new-post="newPost" @add="add()" />

            <div class="post" v-for=" (p, i) in posts" :key="p.src">
                <post :post="p" @remove="remove(p, i)" />
            </div>

        </div>

        <div class="column">
            <post :post="newPost" />
        </div>
      </div>


  </div>
</template>

<script>
import Post from '../components/Tracking.vue';
import session from "../services/session";

const newPost = ()=> ({ user: session.user, user_handle: session.user.handle })
export default {
    components: {
        Post,
    },
    data: ()=> ({
        posts: [],
        newPost: newPost()
    })
}
</script>

<style>
    .card {
        margin-bottom: 10px;
    }
</style>