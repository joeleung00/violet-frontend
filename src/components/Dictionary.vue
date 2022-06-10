<template>
    <div>
        <h4>{{ vocab }}</h4>
        <ul>
            <li v-for="(explain, index) in explainations"
                :key="index">
                {{explain}}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        vocab: {type: String, required: true}
    },
    data(){
        return {
            explainations: ['粗野','粗野','粗野']
        }
    }
}

</script>

<style scoped>
h4 {
    margin: 1rem 2rem;
}

ul {
    margin-left: 1.5rem;
}

</style>