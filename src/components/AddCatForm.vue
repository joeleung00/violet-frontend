<template>
    <form @submit.prevent="$emit('addCat')">
        <input type="text"
            placeholder="New Category Name" 
            :value="value"
            @input="$emit('update:value', $event.target.value)" >
        <button @click="test">Add</button>
    </form>
</template>

<script>
export default {
    props: {
        value: {type: String, required: true}
    }
}
</script>

<style scoped>


form {
    display: flex;
    justify-content: space-between;
}

input {
    width: 75%;
    height: 2.2rem;
    display: inline-block;
    margin: 0.1rem 1rem;
    border: none;
    font: normal 400 18px/32px AkkuratPro,sans-serif;
}

button {
    width: 15%;
    height: 2.2rem;
    border-radius: 2rem;
    margin: auto 0.2rem;
    color: white;
    background-color: #D87CD8;
    border: none;
    font-size: 1.1rem;
}

input:focus {
    outline: 0;
}

input::placeholder {
    color: #BCB2B2;
    opacity: 0.75;
}


</style>