<template>
    <div class="container">
        <h1>Your Vocabulary</h1>
        <ul>
            <VocabListItem v-for="vocab in vocabs" 
            :key="vocab.id"
            :vocab="vocab" />
        </ul>
    </div>
    <PaginationBar v-model:current="page.current" :total="page.total"/>
</template>

<script>
import VocabListItem from "@/components/VocabListItem.vue";
import PaginationBar from "@/components/PaginationBar.vue";
import Utils from '@/utils/utils';


export default {
    components: {
        VocabListItem, PaginationBar
    },
    data(){
        return {
            vocabs: [],
            page: {
                current: 1,
                total: 1
            }
        }
    },
    watch: {
        'page.current'(){
            this.fetchVocabs()
        }
    },
    methods: {
        async fetchVocabs(){
            let param = {
                pageNumber: this.page.current - 1,
                pageSize: 10
            }
            let paramStr = Utils.convertObject2ParamString(param)
            let res = await this.$myAxios.get(`/vocab?${paramStr}`)
            this.page.total = res.data.totalPages
            this.vocabs = res.data.content
            this.vocabs.forEach(v => {
                v.explainations = v.explainationDto.explainations
            })
        }
    },
    mounted() {
        this.fetchVocabs()
    }
}

</script>



<style scoped>

.container {
    color: #AA5CB2;
    margin: 2rem 3rem;
    color: black;
    overflow: scroll;
    height: 75vh;
}

ul {
    list-style-type: none;
    padding: 0;
    margin: auto 2rem;
}

ul > * {
    margin: 1rem auto;
}

</style>