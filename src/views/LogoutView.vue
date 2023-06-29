<template>
    <div class="logout">
        <h2>Logout</h2>
        <button class="btn btn-danger" @click="doLogout">Logout</button>
    </div>
</template>

<script>
export default {
    name : 'Logout',
    methods :{
        doLogout(){
            this.$store.commit('logout');
            this.$router.push('/');
        }
    }
}
</script>