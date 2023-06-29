<template>
    <div class="login">
        <h2>Login</h2>
        <button class="btn btn-info" @click="doLogin">Login</button>
    </div>
</template>

<script>
export default {
    name : 'Login',
    methods:{
        doLogin(){
            this.$store.commit('login','abc123');
        }
    }
}
</script>