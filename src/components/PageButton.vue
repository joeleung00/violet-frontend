<template>
    <router-link :to="routeObj">
        <div class="btn-wrapper">
                <img class="icon" :src="`/images/${iconName}`" :alt="iconName">
                <span class="text"><slot></slot></span>
        </div>
    </router-link>

</template>

<script>
export default {
    props: {
        routeObj: {type: Object, required: true},
        iconName: {type: String, required: true},
    }
}

</script>

<style scoped>

.btn-wrapper {
    height: 4rem;
}

.btn-wrapper:hover {
    background-color: rgba(200, 200, 200, 0.4);
}

.icon {
    width: 1.5rem;
    margin: 15px 20px;
    margin-left: 25px;
    display: inline-block;
    vertical-align: middle;
}

.text {
    display: inline-block;
    font-size: 1.2rem;
    position: relative;
    top: 0.1rem;
    color: #AA5CB2;
    vertical-align: middle;
}

.router-link-exact-active > .btn-wrapper{
    background-color: rgba(200, 200, 200, 0.4);
}

</style>