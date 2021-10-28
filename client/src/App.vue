<template>
    <div class="container">
            <Header />
            <router-view />
            <messages />
            
    </div>
</template>

<script>
import Header from '../src/components/Header.vue'
import Messages from './components/Messages.vue'

export default{
    name:'App',
    components: {
        Header,
        Messages
    }
}
</script>

<style>

</style>
