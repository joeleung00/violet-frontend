<template>
    <div>
        <span class="input-wrapper">
            <span class="icon">
                <img :src="`/images/${iconName}`" :alt="iconName">
            </span>
            <input class="input-box" 
                required
                :type="type" 
                :placeholder="placeholder" 
                v-on:input="$emit('update:value', $event.target.value)" >
        </span>
    </div>
</template>

<script>
export default {
    props: {
        iconName: {type: String, required: true},
        type: {type: String, required: true},
        placeholder: {type: String, required: true},
        value: {type: String, required: true}
    }
}
</script>

<style scoped>
.input-wrapper {
    display: inline-block;
    border: 1px solid black;
    margin: 0 20% 3%;
    width: 60%;
}

.icon > img {
    width: 16px;
}

.icon {
    margin: 0.5em;
    display: inline-block;
    position: relative;
    top: 0.08em;
}

.input-box {
    border-width: 0;    
    width: 80%;
    display: inline-block;
    position: relative;
    top: -0.1em;
    height: 1.5em;
}

.input-box:focus {
    outline: 0;
}

::placeholder { 
  color: #BCB2B2;
  opacity: 1; 
}

</style>