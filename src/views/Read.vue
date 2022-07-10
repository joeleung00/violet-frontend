<template>
    <div class="container">
        <div class="upper-container" @mouseup="getSelectedText($event)">
            <div class="content-container">
                <div class="english-box box" v-html="renderTitles.english">
                </div>
                <div class="chinese-box box" v-html="renderTitles.chinese">
                </div>
            </div>

            <div class="content-container" v-for="(para, index) in renderParagraphs"
                :key="index">
                <div class="english-box box" v-html="para.english">
                </div>
                <div class="chinese-box box" v-html="para.chinese">
                </div>
            </div>


        </div>
        <div class="lower-container">
            <div class="dictionary-box">
                <Dictionary v-if="vocab" 
                    :vocab="vocab"
                    @isTranslated="selectBox.isActive = true" />
            </div>
        </div>
        <SelectBox v-if="selectBox.isShow"
            @highlight="highlightVocab"
            :isActive="selectBox.isActive"
            :mousex="selectBox.mousex"
            :mousey="selectBox.mousey" />
    </div>
</template>

<script>
import Dictionary from "@/components/Dictionary.vue";
import SelectBox from "@/components/SelectBox.vue";

function isEnglishWord(string){
    const regex = /^[a-zA-Z'’\-]+$/
    return string.match(regex)
}

function highlightWords(texts, words){
    const SMARK = '<mark>'
    const EMARK = '</mark>'
    let offset = 0

    function addMark(texts, match){   
        const word = match[0]
        const start = match.index + offset
        const end = start + word.length
        texts = texts.slice(0, start) + SMARK + match[0] + EMARK + texts.slice(end)
        offset += SMARK.length + EMARK.length
        return texts
    }  
    const regx = new RegExp(words.join('|'), 'gi')    
    const matches = [...texts.matchAll(regx)]
    matches.forEach((match) => {
        texts = addMark(texts, match)
    }) 
    return texts
}

export default {
    components: {
        Dictionary, SelectBox
    },
    data(){
        return {
            vocab: '',
            selectBox: {
                isShow: false,
                isActive: false,
                mousex: 0,
                mousey: 0
            },
            titleEng: '',
            titleChin: '',
            bodyEng: [],
            bodyChin: [], 
            vocabs: []
        }
    },
    computed: {
        hightedVocabs(){
            return this.vocabs.map(v => v.vocab)

        },        
        renderTitles(){
            const highlighted = highlightWords(this.titleEng, 
                                                this.hightedVocabs)
            return {
                english: `<h3>${highlighted}</h3>`,
                chinese: `<h3>${this.titleChin}</h3>`
            }
        },
        renderParagraphs(){
            const chinParas = this.bodyChin
            const engParas = this.bodyEng.map(
                p => highlightWords(p, this.hightedVocabs))
            return engParas.map((engPara, index) => {
                return {
                    english: `<p>${engPara}</p>`,
                    chinese: `<p>${chinParas[index]}</p>`
                }
            })
        }
    },
    methods: {
        getSelectedText($event){
            this.selectBox.isShow = true
            this.selectBox.isActive = false
            this.selectBox.mousex = $event.clientX
            this.selectBox.mousey = $event.clientY
            const selectedText = window.getSelection().toString().trim()

            if (isEnglishWord(selectedText)){
                this.vocab = selectedText 
            }
            else {
                this.selectBox.isShow = false
                this.vocab = ''
            }
        },
        async highlightVocab(){
            if (this.hightedVocabs.includes(this.vocab)){
                let idx = this.hightedVocabs.findIndex(item => item === this.vocab)
                let id = this.vocabs[idx].id 
                let res = await this.$myAxios.delete(`/vocab/${id}`)
                this.fetchVocabs()
            }
            else {
                await this.addVocab(this.vocab)      
                await this.fetchVocabs()
            }
        },
        async fetchArticle() {
            let id = this.$route.params.id
            let res = await this.$myAxios.get(`/article/${id}`)
            this.titleEng = res.data.titleEng
            this.titleChin = res.data.titleChin
            this.bodyEng = res.data.bodyEng
            this.bodyChin = res.data.bodyChin
        },
        async fetchVocabs() {
            let id = this.$route.params.id
            let res = await this.$myAxios.get(`/vocab?articleId=${id}`)
            this.vocabs = res.data.content
        },
        async addVocab(vocab) {
            let body = {
                vocab,
                articleId: this.$route.params.id 
            }
            let res = await this.$myAxios.post('/vocab', body)
        }
    },
    mounted(){
        this.fetchArticle()
        this.fetchVocabs()
    }
}

</script>

<style>
.box > h3 {
    text-align: center;
}

.box > p {
    margin: 2rem 1rem;
    line-height: 1.6;
}
</style>

<style scoped>


.container {
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.upper-container {
    height: 70vh;
    margin: 2rem 2rem 0rem 2rem;
    border: 1px solid black;
    overflow: scroll;
}

.lower-container {
    height: 20%;
}

.content-container {
    display: flex;
    justify-content: space-around;
}

.english-box, .chinese-box {
    width: 45%;
}



.dictionary-box {
    border: 1px solid #707070;
    margin: 1rem 2.5rem;
    height: 80%;
}

</style>