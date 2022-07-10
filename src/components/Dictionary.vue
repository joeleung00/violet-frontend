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
            explainations: []
        }
    },
    watch: {
        vocab(){
            this.translate()
        }
    },
    methods: {
        async translate(){
            if (this.vocab.trim().length == 0){
                return [] 
            }

            let res = await this.$myAxios.get(`/translate/${this.vocab}`)
            this.explainations = res.data.explainations
            if (this.explainations.length > 0){
                this.$emit('isTranslated')
            }
        }
    },
    async mounted(){
        this.translate()
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