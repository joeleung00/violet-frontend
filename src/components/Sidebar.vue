<template>
    <div class="container">
        <PageButton 
            iconName="userPageIcon.svg" 
            :routeObj="{name: 'User'}">
            User 
        </PageButton>

        <PageButton 
            iconName="articlePageIcon.svg" 
            :routeObj="{name: 'Articles'}">
            Articles
        </PageButton>

        <PageButton 
            iconName="catPageIcon.svg" 
            :routeObj="{name: 'Category'}">
            Category 
        </PageButton>

        <PageButton 
            iconName="vocabPageIcon.svg" 
            :routeObj="{name: 'Vocab'}">
            Vocab 
        </PageButton>

    </div>
</template>

<script>
import PageButton from "@/components/PageButton.vue"

export default {
    components: {PageButton}
}
</script>


<style scoped>

.container {
    margin-top: 1rem;
}


</style>