<template>
    <div class="container">
        <div class="login" style="cssProps">
        <h1>Login</h1>
        <form method="post" @submit.prevent="login()">
            <input type="text" name="username"  placeholder="login" id="username" v-model="handle" >
            <input type="password" name="password" placeholder="password" v-model="password">
            <input type="submit" name="login" value="Login" >
        </form>
    </div>

        <div class="register">
        <h1>Register</h1>
        <form method="post" action="" name="register">
            <input type="text" name="username" placeholder="username" required >
            <input type="password" name="password" placeholder="password" required>
            <input type="email" name="email" placeholder="Preferred email">
            <input type="submit" name="register" value="Register">
        </form>
    </div>
    </div>

</template>

<style src="../css/login.css">

</style>
        


<script>
import Session from "../services/session";
export default {
    data: ()=>({
        handle: null,
        password: null,
        Session
    }),
    methods: {
        login(){
            this.Session.Login(this.handle, this.password);
        }
    }
}
</script>
