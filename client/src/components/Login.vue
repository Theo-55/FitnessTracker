<template>
        <div class="login" style="cssProps">
        <h1>Login</h1>
        <form method="post" action="" name="login">
            <input type="text" name="username" pattern="[a-zA-Z0-9]+" placeholder="login" id="username" required />
            <input type="password" name="password" placeholder="password" required>
            <input type="submit" name="login" value="Login">
        </form>
    </div>

</template>

<style scoped>

.login {
    width: 500px;
    background-color: #777b7ec2;
    margin: 100px auto;
}
.login h1 {
    text-align: center;
    color: #ffffff;
    font-size: 30px;
    padding: 20px 0 20px 0;
    border-bottom: 1px solid #dee0e4;
}
.login form {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-top: 20px;
}

.login form input[type="password"], .login form input[type="text"] {
    width: 310px;
    height: 50px;
    border: 1px solid #dee0e4;
    margin-bottom: 20px;
    padding: 0 15px;
}
.login form input[type="submit"] {
    width: 100%;
    padding: 15px;
   margin-top: 20px;
    background-color: #29282b;
    border: 2px;
    border-color: black;
    border-width: 2px;
    cursor: pointer;
    font-weight: bold;
    color: #ffffff;
    transition: background-color 0.2s;
}
.login form input[type="submit"]:hover {
  background-color: #283d5c;
    transition: background-color 0.2s;
}
</style>
        


<script>
    export default {
        name: "login",
            data() {
      return {
        cssProps: {
          backgroundImage: `url(${require('../assets/dark-barbell.jpg')})`
        }
      }
    }
    }
</script>
