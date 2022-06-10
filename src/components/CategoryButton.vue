<template>
    <button :class="['cat-btn', {'active': isActive}]"><slot></slot></button>
</template>

<script>
export default {
    props: {
        isActive: {type: Boolean, default: false}
    }
}
</script>


<style scoped>

.cat-btn {
    padding: 0.5rem 1.8rem;
    border-radius: 1rem;
    background-color: #746E6E;
    border: none;
    color: white;
    cursor: pointer;
}

.active {
    background-color: #F0DEF7;
    color: black;
}
</style>