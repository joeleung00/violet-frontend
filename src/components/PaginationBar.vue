<template>
    <div class="pagination-container">
        <button :class="{ disable: isFirst }" @click="decrement">Previous</button>
        <select name="current" :value="current" @input="$emit('update:current', parseInt($event.target.value))">
            <option v-for="idx in total" 
                :value="idx"
                :key="idx">
                {{ idx }}
            </option>
        </select> 
        <span>/{{ total }}</span>
        <button :class="{ disable: isLast }" @click="increment">Next</button>
    </div>

</template>

<script>
export default {
    props: {
        total: {type: Number, required: true},
        current: {type: Number, required: true}
    },
    methods: {
        increment() {
            if (this.isLast) return 
            const newCurrent = Math.min(this.current + 1, this.total)
            this.$emit('update:current', newCurrent)
        },
        decrement() {
            if (this.isFirst) return
            const newCurrent = Math.max(this.current - 1, 1)
            this.$emit('update:current', newCurrent)
        }

    },
    computed: {
        isFirst(){
            return this.current === 1 || this.total === 0;
        },
        isLast(){
            return this.current === this.total || this.total === 0;
        }
    }
}

</script>


<style scoped>
button {
    border-radius: 15px;
    width: 98px;
    height: 37px;
    border: none;
    background-color: #AA5CB2;

color: white;
    margin: 2rem 1rem;
}

button:hover {
    cursor: pointer;
}

select {
    font-size: 1.1rem;
    padding: 2px 5px;
}

span {
    margin-left: 1em;
    font-size: large;
}

.pagination-container {
    text-align: center;
}

.disable {
    background-color: grey;
    border: 1px solid grey;
}

</style>