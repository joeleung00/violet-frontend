<template>
    <div class=container>
        <h1>Welcome, {{firstname}}</h1>
        <p>
            Press the top right add button to start your translation.
        </p>
    </div>
</template>

<script>
export default {
    data(){
        return {
            firstname: ""
        }
    },
    mounted(){
        this.firstname = this.$store.getters.getUser.firstname
    }
}
</script>

<style scoped>
.container {
    margin: 2rem 3rem;
}

p {
    margin-top: 4rem;
}

</style>