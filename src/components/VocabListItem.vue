<template>
    <li class="item-container" >
        <div class="heading" @click="expand">
            <span>Boorish</span>
            <img :class="{'rotate-icon': isExpanded}" src="/images/expandIcon.svg" alt="expandIcon">
        </div>
        <div class="body" v-if="isExpanded">
            <ul class="explain">
                <li v-for="(explain, index) in word.explainations"
                    :key="index">
                    {{ explain }}
                </li>
            </ul>
            <p>{{ word.sentence.english }}</p>
            <p>{{ word.sentence.chinese }}</p>
        </div>
    </li>
</template>

<script>
export default {
    props: {
        word: {type: Object, required: true}
    },
    data(){
        return {
            isExpanded: false
        }
    },
    methods: {
        expand() {
            this.isExpanded = !this.isExpanded
        }
    } 
}

</script>

<style scoped>
.item-container {
    padding: 0.4rem 2rem;
    border: 2px solid #AE9AB1;
    border-radius: 1.5rem;;

}

.heading {
    display: flex;
    justify-content: space-between;
}

.heading:hover {
    cursor: pointer;
}

ul.explain {
    list-style-type: "-  ";
    padding-left: 1.5rem;
}


.body > p {
    margin: 0.5rem auto;
}

img {
    vertical-align: center;
    position: relative;
    top: -0.25rem;
    width: 2rem;
    transition-duration: 0.2s;
    transition-property: transform;
}

span {
    display: inline-block;
    position: relative;
    font-size: 1.5rem;
}

.rotate-icon {
    transform: rotate(-90deg);
}

</style>