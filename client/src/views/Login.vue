<template>
        <div class="login">
        <h1>Login</h1>
        <form method="post" action="" name="login">
            <input type="text" name="username" pattern="[a-zA-Z0-9]+" placeholder="login" id="username" required />
            <input type="password" name="password" placeholder="password" required>
            <input type="submit" name="login" value="Login">
        </form>
    </div>

</template>

<style>
    
</style>

<script>
    export default {
        data: ()=>({
        username: null,
        password: null,
        Session
    })
}
</script>
