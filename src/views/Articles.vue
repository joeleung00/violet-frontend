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
                <!-- <router-link style="text-decoration: none" v-for="title in titles"
                :key="title.id"
                :to="{name: 'ReadArticle', params: {id: title.id}}">
                    <TitleListItem 
                        :time="title.createTime"
                        :key="title.id">
                        {{ title.title }}
                    </TitleListItem>
                </router-link> -->
                <TitleListItem  v-for="title in titles"
                    @gotoClick="gotoDetail(title.id)"
                    @removeClick="remove(title.id)"
                    :time="title.createTime"
                    :key="title.id">
                    {{ title.title }}
                </TitleListItem>

            </ul>
        </div>
        <PaginationBar v-model:current="page.current" :total="page.total" />
    </div>
</template>

<script>
import CategoryButton from "@/components/CategoryButton.vue";
import TitleListItem from "@/components/TitleListItem.vue";
import PaginationBar from "@/components/PaginationBar.vue"
import Utils from '@/utils/utils.js'

export default {
    components: {CategoryButton, TitleListItem, PaginationBar},
    data() {
        return {
            curCatIdx: 0,
            catList: [],
            titles: [],
            page: {
                current: 1,
                total: 1
            }
        }
    },
    methods: {
        changeCat(index){
            this.catList[this.curCatIdx].isActive = false
            this.curCatIdx = index;
            this.catList[index].isActive = true;
            this.fetchTitles()
        },
        async fetchCatList(){
            let res = await this.$myAxios.get("/category")
            let catList = res.data.map(cat => { return {...cat, isActive: false} })
            catList.unshift( {name: 'All', id: null, isActive: true} )
            this.catList = catList
        },
        async fetchTitles(){
            if (this.catList.length == 0){
                return
            }
            let cat = this.catList[this.curCatIdx]
            let catId = cat.id
            let param = {
                pageNumber: this.page.current - 1,
                pageSize: 10,
            }
            if (catId != null) {
                param.categoryId = catId
            }
            let paramStr = Utils.convertObject2ParamString(param)
            let res = await this.$myAxios.get(`/article?${paramStr}`)

            this.page.total = res.data.totalPages
            this.titles = res.data.content
            this.titles.forEach(t => {
                t.createTime = Utils.prettyTime(t.createTime)
            }) 
        },
        gotoDetail(id) {
            this.$router.push({name: "ReadArticle", params: {id}})
        },
        remove(id) {
            this.$myConfirm(
                'Are you sure to delete this article?',
                ''
            ).then( result => {
                if (result.isConfirmed) {
                    this.$myAxios.delete(`/article/${id}`)
                    .then(() => {
                        this.fetchTitles()
                    })
                }
            })
        }
    },
    watch: {
        'page.current'(){
            this.fetchCatList()  
        }
    },
    async mounted() {
        await this.fetchCatList() 
        await this.fetchTitles()
    },
}

</script>

<style scoped>

.container {
    color: #AA5CB2;
    margin: 2rem 3rem;
}

.titles-container {
    margin: 3rem 0;
    height: 55vh;
}


.categories-container {
    display: flex;
    flex-wrap: wrap;
}


.categories-container > *{
    margin: 0.6rem;
}



</style>