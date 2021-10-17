<template>
    <div class="container">
            <Nav />
            <router-view />
    </div>
</template>

<script>
import Nav from '../src/components/Nav.vue'

export default{
    name:'App',
    components: {
        Nav
    }
}
</script>

<style>

</style>
