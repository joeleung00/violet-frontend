<template>
    <div  ref="selectBox" class="box" :style="{'top': y, 'left': x}" >
        <img v-if="isActive"
            class="active"
            @click="$emit('highlight')" 
            src="/images/penIcon.svg" alt="penIcon">

        <img v-else 
            src="/images/penGreyIcon.svg" alt="penGreyIcon">

    </div>
</template>

<script>
export default {
    props: {
        mousex: {type: Number, required: true},
        mousey: {type: Number, required: true},
        isActive: {type: Boolean, required: true}
    },
    data(){
        return {
            height: 0,
            width: 0
        }
    },
    mounted(){
        this.height = this.$refs.selectBox.clientHeight
        this.width = this.$refs.selectBox.clientWidth
    },
    computed: {
        x(){
            return (this.mousex + 0.5 * this.width)+ 'px'
        },
        y(){
            return (this.mousey - 1.25 * this.height) + 'px'
        }
    }
}


</script>

<style scoped>
.box {
    display: inline-block;
    margin: 0rem;
    padding: 0.2rem 0.5rem 0.1rem 0.5rem;
    background-color: white;
    position: absolute;
    box-shadow: 2px 2px 1px 1px rgba(0, 0, 0, 0.25);
}

img {
    width: 1.5rem;
}

.active {
    cursor: pointer;
}



</style>