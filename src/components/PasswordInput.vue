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
                @input="$emit('update:value', $event.target.value)">

                <span class="eye-icon" @click="toggleEye">
                    <img :src="`/images/${eyeIconName}`" alt="Password eye icon">
                </span>
        </span>
    </div>
</template>

<script>
const EYEICON = "passwordEye.svg";
const BLOCK_EYEICON = "passwordEyeBlock.svg";

export default {
    props: {
        iconName: {type: String, required: true},
        placeholder: {type: String, required: true},
        value: {type: String, required: true}
    },
    data(){
        return {
            type: 'password',
            eyeIconName: EYEICON
        }
    },
    methods: {
        toggleEye(){
            if (this.eyeIconName === EYEICON){
                this.eyeIconName = BLOCK_EYEICON
                this.type = 'text'
            }
            else {
                this.eyeIconName = EYEICON
                this.type = 'password'
            }
        }
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
    height: 1em;
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

.eye-icon {
    margin: 0 0 0 0.5em;
    position: relative;
    top: 0.13em;
}

.eye-icon > img {
    width: 1.4em;
}

</style>