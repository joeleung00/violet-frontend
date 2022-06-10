<template>
    <div class="container">
        <div class="categories-container">
            <CategoryButton v-for="(cat, index) in catList" 
            :key="cat.id" 
            :isActive="cat.isActive"
            @click="changeCat(index)"
            >
                {{ cat.name }}
            </CategoryButton>
        </div>

        <div class="titles-container">
            <ul>
                <router-link style="text-decoration: none" v-for="article in articles"
                :key="article.id"
                :to="{name: 'ReadArticle', params: {id: article.id}}">
                    <TitleListItem 
                        :time="article.time"
                        :key="article.id">
                        {{ article.title }}
                    </TitleListItem>
                </router-link>
            </ul>
        </div>
    </div>
</template>

<script>
import CategoryButton from "@/components/CategoryButton.vue";
import TitleListItem from "@/components/TitleListItem.vue";

export default {
    components: {CategoryButton, TitleListItem},
    data() {
        return {
            curCatIdx: 0,
            catList: [
                {name: 'All', id: null, isActive: true},
                {name: 'Econ', id: 1, isActive: false},
                {name: 'Health', id: 2, isActive: false},
                {name: 'Default', id: 0, isActive: false},
                {name: 'Econ', id: 1, isActive: false},
                {name: 'Health', id: 2, isActive: false},
                {name: 'Default', id: 0, isActive: false},
                {name: 'Econ', id: 1, isActive: false},
                {name: 'Health', id: 2, isActive: false},
                {name: 'Default', id: 0, isActive: false},
                {name: 'Econ', id: 1, isActive: false},
                {name: 'Health', id: 2, isActive: false},
                {name: 'Health', id: 2, isActive: false},
                {name: 'Default', id: 0, isActive: false},
                {name: 'Econ', id: 1, isActive: false},
                {name: 'Health', id: 2, isActive: false},
                {name: 'Default', id: 0, isActive: false},
                {name: 'Econ', id: 1, isActive: false},
                {name: 'Health', id: 2, isActive: false},


            ],
            articles: [
                {title: 'What is the “Great Replacement” right-wing conspiracy theory?', time: 'April 21, 2022 10:37 PM', id: 0},
                {title: 'What is the “Great Replacement” right-wing conspiracy theory?', time: 'April 21, 2022 10:37 PM', id: 1},
                {title: 'What is the “Great Replacement” right-wing conspiracy theory?', time: 'April 21, 2022 10:37 PM', id: 2},
                {title: 'What is the “Great Replacement” right-wing conspiracy theory?', time: 'April 21, 2022 10:37 PM', id: 0},
                {title: 'What is the “Great Replacement” right-wing conspiracy theory?', time: 'April 21, 2022 10:37 PM', id: 1},
                {title: 'What is the “Great Replacement” right-wing conspiracy theory?', time: 'April 21, 2022 10:37 PM', id: 2},
                {title: 'What is the “Great Replacement” right-wing conspiracy theory?', time: 'April 21, 2022 10:37 PM', id: 0},
                {title: 'What is the “Great Replacement” right-wing conspiracy theory?', time: 'April 21, 2022 10:37 PM', id: 1},
                {title: 'What is the “Great Replacement” right-wing conspiracy theory?', time: 'April 21, 2022 10:37 PM', id: 2},
                {title: 'What is the “Great Replacement” right-wing conspiracy theory?', time: 'April 21, 2022 10:37 PM', id: 0},
                {title: 'What is the “Great Replacement” right-wing conspiracy theory?', time: 'April 21, 2022 10:37 PM', id: 1},
                {title: 'What is the “Great Replacement” right-wing conspiracy theory?', time: 'April 21, 2022 10:37 PM', id: 2},
                {title: 'What is the “Great Replacement” right-wing conspiracy theory?', time: 'April 21, 2022 10:37 PM', id: 0},
                {title: 'What is the “Great Replacement” right-wing conspiracy theory?', time: 'April 21, 2022 10:37 PM', id: 1},
                {title: 'What is the “Great Replacement” right-wing conspiracy theory?', time: 'April 21, 2022 10:37 PM', id: 2},
                {title: 'What is the “Great Replacement” right-wing conspiracy theory?', time: 'April 21, 2022 10:37 PM', id: 0},
                {title: 'What is the “Great Replacement” right-wing conspiracy theory?', time: 'April 21, 2022 10:37 PM', id: 1},
                {title: 'What is the “Great Replacement” right-wing conspiracy theory?', time: 'April 21, 2022 10:37 PM', id: 2},
                {title: 'What is the “Great Replacement” right-wing conspiracy theory?', time: 'April 21, 2022 10:37 PM', id: 0},
                {title: 'What is the “Great Replacement” right-wing conspiracy theory?', time: 'April 21, 2022 10:37 PM', id: 1},
                {title: 'What is the “Great Replacement” right-wing conspiracy theory?', time: 'April 21, 2022 10:37 PM', id: 2},
                {title: 'What is the “Great Replacement” right-wing conspiracy theory?', time: 'April 21, 2022 10:37 PM', id: 0},
                {title: 'What is the “Great Replacement” right-wing conspiracy theory?', time: 'April 21, 2022 10:37 PM', id: 1},
                {title: 'What is the “Great Replacement” right-wing conspiracy theory?', time: 'April 21, 2022 10:37 PM', id: 2},
            ]
        }
    },
    methods: {
        changeCat(index){
            this.catList[this.curCatIdx].isActive = false
            this.curCatIdx = index;
            this.catList[index].isActive = true;
        }
    }
}

</script>

<style scoped>

.container {
    color: #AA5CB2;
    margin: 2rem 3rem;
}

.titles-container {
    margin: 3rem 0;
    overflow: scroll;
    height: 60vh;
}


.categories-container {
    display: flex;
    flex-wrap: wrap;
}


.categories-container > *{
    margin: 0.6rem;
}

</style>