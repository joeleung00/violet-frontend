<template>
    <div v-if="isInput" class="input-container">
        <div class="heading">
            <label>Title:</label>
            <input type="text" v-model="title">
        </div>        
        <div class="category">
            <label>Category:</label>
            <select name="category" v-model="category">
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
                <option value="Default">Default</option>
            </select>
        </div>
        <div class="body">
            <p>Body:</p>
            <textarea v-model="body" />
        </div>
        <div class="btn-region">
            <button @click="toPreview">Next</button>
        </div>
    </div>

    <div v-else class="preview-container">
        <CategoryButton class="cat-btn" :isActive="true">{{ category }}</CategoryButton>
        <h2>Preview</h2>

        <div class="preview-box">
            <h3>{{ title }}</h3>
            <p v-for="(para, index) in paragraphs"
                :key="index">
                {{ para }}
            </p>
        </div>

        <div class="btn-region">
            <button @click="toInput">Back</button>
            <button @click="submit">Done</button>
        </div>
    </div>
</template>

<script>
import CategoryButton from '@/components/CategoryButton.vue';

function splitIntoParagraph(input){
    return input.split(/(?:\r?\n)+/).map((str) => str.trim());
}

export default {
    data() {
        return {
            title: "",
            category: "Default",
            body: "",
            paragraphs: [],
            isInput: true
        };
    },
    methods: {
        toPreview() {
            if (this.title.trim().length == 0 || this.body.trim().length == 0) {
                alert("please enter title and body");
            }
            else {
                this.paragraphs = splitIntoParagraph(this.body);
                this.isInput = false;
            }
        },
        toInput() {
            this.isInput = true;
        },
        submit() {
            alert("submitted");
        }
    },
    components: { CategoryButton }
}
</script>

<style scoped>

.heading {
    margin: 2rem ;
}

.heading > label {
    margin: 1rem;
    margin-left: 15%;
}

.heading > input {
    width: 50%;
    height: 2rem;
}

.heading > input[type='text'] { 
    font-size: 1.5rem; 
    padding: 0.2rem 0.5rem;
    font: normal 400 18px/32px AkkuratPro,sans-serif;
}

.category {
    margin: 2rem;
}

.category > label {
    margin: 1rem;
    margin-left: 15%;
}

.category > select {
    padding: 0.25rem 1.5rem;
    border-radius: 0.8rem;
}

.body {
    margin: 2rem;
    text-align: center;
}

.body > p {
    text-align: left;
    margin-left: 15%;
}

.body > textarea {
    vertical-align: center;
    display: inline-block;

    width: 70%;
    height: 60vh;
    padding: 1rem 1rem;
    font: normal 400 18px/32px AkkuratPro,sans-serif;
    border-radius: 1rem;

}

.btn-region {
    text-align: right;
    position: sticky;
    bottom: 0%;
    width: 90%
}

button {
    border-radius: 15px;
    width: 98px;
    height: 37px;
    border: none;
    background-color: #AA5CB2;
    color: white;
    margin: 2rem 1rem;
}

.preview-container {
    width: 100%;
    height: 100%;
}

.preview-container > h2 {
    text-align: center;
}

.preview-box > h3 {
    text-align: center;
}

.preview-box {
    margin: 2rem 12rem;
    border: 1px solid black;
    padding: 1.5rem;
    height: 75%;
    overflow: scroll;

}

.preview-box > p {
    margin: 2rem 1rem;
    line-height: 1.6;
}

.cat-btn {
    position: absolute;
    margin: 0rem;
    right: 15rem;
}

.cat-btn:hover {
    cursor: default;
}

</style>
