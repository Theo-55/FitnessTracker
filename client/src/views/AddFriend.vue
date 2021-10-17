<template>
    <div class="add">
        <h1>Add Friends</h1>
        <form method="post" action="" name="addFriend">
            <input type="text" name="username" pattern="[a-zA-Z0-9]+" placeholder="Add A Friend" id="addNewFriend" required />
            <input type="text" name="password" placeholder="Send A Nice Message" required>
            <input type="submit" name="add user" value="Add User">
        </form>
    </div>
</template>


<style src="../css/addFriend.css">

</style>