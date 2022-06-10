<template>
    <div class="btn-wrapper">
        <button @click="$emit('deleteCat')"><img src="/images/crossIcon.svg" alt="cross icon"></button>
        <span><slot></slot></span>
    </div>
</template>


<style scoped>
.btn-wrapper {
    display: inline-block;
    height: 2rem;
    padding: 0.2rem 1rem;
    border-radius: 2rem;
    background-color: #F0DEF7;
}
button {
    background: none;
    display: inline-block;
    height: 100%;
    border: none;
    position: relative;
    left: -0.5rem;
}

button:hover {
    cursor: pointer;
}

button > img {
    width: 80%;
}

span {
    display: inline-block;
    position: relative;
    left: -0.25rem;
}


</style>