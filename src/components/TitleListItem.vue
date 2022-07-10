<template>
    <div class="title-container">
        <li @click="$emit('gotoClick')">
            <span class="title"><slot></slot></span>
            <span class="time">
                {{ time }} 
            </span>
        </li>
        <img @click="$emit('removeClick')" src="/images/crossIcon2.svg">
    </div>
</template>


<script>
export default {
    props: {
        time: {type: String, required: true}
    }
}
</script>

<style scoped>

.title-container {
    display: flex;
}

li {
    display: flex;
    width: 90%;
    justify-content: space-between;
    padding: 1rem;     
}

li:hover {
    background-color: rgba(200, 200, 200, 0.4);
    cursor: pointer;
}

.title {
    color: black;
}

.time {
    vertical-align: middle;
    color: #888282;
}

img {
    display: inline-block;
    width: 1.2rem;
    padding: 0.5rem;
}

img:hover {
    cursor: pointer;
}

</style>