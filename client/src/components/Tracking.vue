<template>
  <div class="card">
  <div class="card-image">
    <figure class="image is-4by3">
      <img :src="post.src" :alt="post.alt">
        <button class="delete" @click="$emit('remove')"></button>
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-left">
        <figure class="image is-48x48">
          <img :src="post.user.pic" alt="Placeholder image">
        </figure>
      </div>
      <div class="media-content">
        <p class="title is-4"> {{post.user.firstName}} {{post.user.lastName}} </p>
        <p class="subtitle is-6">
            {{post.user.handle}}
                  <time :datetime="post.time">{{prettyDate}}</time>
        </p>
      </div>
    </div>

    <div class="content">
      {{post.caption}}
    </div>
    <div class="content">
  <section>
    <p class="content"><b>Selected:</b> {{ selected }}</p>
    <o-field label="Find a friend you worked out with">
      <o-autocomplete rounded expanded v-model="name" :data="filteredDataArray" placeholder="e.g. jQuery" icon="search" clearable @select="option => selected = option">
        <template slot="empty">No results found</template>
      </o-autocomplete>
    </o-field>
  </section>
    </div>
  </div>
    <footer class="card-footer">
        <a href="#" class="card-footer-item">Save</a>
        <a href="#" class="card-footer-item">Edit</a>
        <a href="#" class="card-footer-item">Delete</a>
  </footer>
</div>
</template>

<script>
export default {
    props: {
        post: Object
    },
    computed: {
        prettyDate(){
            if(this.post.time && this.post.time.toDateString){
                return this.post.time.toDateString()
            }else{
                return 'Never'
            }
            
        }
    }, 

        data() {
      return {
        data: ['Angular', 'Angular 2', 'Aurelia', 'Backbone', 'Ember', 'jQuery', 'Meteor', 'Node.js', 'Polymer', 'React', 'RxJS', 'Vue.js'],
        name: '',
        selected: null
      }
    },
    computed2: {
      filteredDataArray() {
        return this.data.filter(option => {
          return (
            option
              .toString()
              .toLowerCase()
              .indexOf(this.name.toLowerCase()) >= 0
          )
        })
      }
    }
  }





</script>

<style>
    button.delete {
        position: absolute;
        top: 5px;
        right: 5px;
    }
</style>