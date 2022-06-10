<template>
    <li>
        <span class="title"><slot></slot></span>
        <span class="time">{{ time }}</span>
    </li>
</template>


<script>
export default {
    props: {
        time: {type: String, required: true}
    }
}
</script>

<style scoped>


li {
    display: flex;
    justify-content: space-between;
    margin-right: 4rem;
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
    color: #888282;
}

</style>