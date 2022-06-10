<template>
    <div class="container">
        <h1>Your Vocabularies</h1>
        <ul>
            <VocabListItem v-for="word in words" 
            :key="word.id"
            :word="word" />
        </ul>
    </div>
</template>

<script>
import VocabListItem from "@/components/VocabListItem.vue";


export default {
    components: {
        VocabListItem
    },
    data(){
        return {
            words: [
                {
                    id: 1,
                    name: 'Boorish',
                    explainations: ['粗野', '粗野'],
                    sentence: {
                        english: 'a boorish plutocrat, recounts what he learned from a book called “The Rise of the Coloured Empires”, by a man called “Goddard”.',
                        chinese: '一个粗野的财阀，讲述了他从一本叫做《有色帝国的崛起》的书中所学到的东西，这本书的作者叫 “戈达德”。'
                    }
                },
                {
                    id: 2,
                    name: 'Boorish',
                    explainations: ['粗野', '粗野'],
                    sentence: {
                        english: 'a boorish plutocrat, recounts what he learned from a book called “The Rise of the Coloured Empires”, by a man called “Goddard”.',
                        chinese: '一个粗野的财阀，讲述了他从一本叫做《有色帝国的崛起》的书中所学到的东西，这本书的作者叫 “戈达德”。'
                    }
                },
                {
                    id: 3,
                    name: 'Boorish',
                    explainations: ['粗野', '粗野'],
                    sentence: {
                        english: 'a boorish plutocrat, recounts what he learned from a book called “The Rise of the Coloured Empires”, by a man called “Goddard”.',
                        chinese: '一个粗野的财阀，讲述了他从一本叫做《有色帝国的崛起》的书中所学到的东西，这本书的作者叫 “戈达德”。'
                    }
                },

            ]
        }
    }
}

</script>



<style scoped>

.container {
    color: #AA5CB2;
    margin: 2rem 3rem;
    color: black;
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