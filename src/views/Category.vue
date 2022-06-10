<template>
    <div class="container">
        <div class="add-container">
            <div class="add-wrapper">
                <AddCatForm v-model:value="newCatName" @addCat="addCategory" />
            </div>
        </div>
        <div class="show-container">
            <div class="show-wrapper">
                <CatEditButton v-for="(cat, index) in catList"
                    :key="index"
                    @deleteCat="deleteCategory(index)">
                    {{ cat.name }}     
                </CatEditButton>
            </div>
        </div>
    </div>
</template>

<script>
import AddCatForm from '@/components/AddCatForm.vue'
import CatEditButton from '@/components/CatEditButton.vue'
export default {
    components: { AddCatForm, CatEditButton },
    data(){
        return {
            newCatName: '',
            catList: [
                {id: 1, name: 'Econ'},
                {id: 2, name: 'Health'},
            ]
        }
    },
    methods: {
        deleteCategory(index){
            this.catList.splice(index, 1)
        },
        addCategory(){
            if (this.newCatName.trim().length == 0){
                return
            }
            if (this.catList.map(cat => cat.name).includes(this.newCatName)){
                return 
            }
            this.catList.push({
                id: -1,
                name: this.newCatName
            })
            this.newCatName = '';
        }
    }
}
</script>


<style scoped>
.container {
    width: 100%;
    height: 100%;
}


.add-container {
    height: 10%;
    margin-top: 3%;
}

.show-container {
    height: 90%;
    margin-top: 0;
}

.add-wrapper {
    border: 1px solid black;
    height: 2.5rem;
    width: 32rem;
    margin: 0 auto;
    border-radius: 2rem;
}

.show-wrapper {
    width: 80%;
    height: 80%;
    border: 1px solid black;
    border-radius: 2rem;
    margin: 0 auto;
    padding: 0rem 1rem;
    flex-wrap: wrap;
}

.show-wrapper > * {
    margin: 1.5rem 0 0 1rem;
}


</style>