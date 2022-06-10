<template>
    <div class="container">
        <div class="upper-container" @mouseup="getSelectedText($event)">
            <div class="content-container">
                <div class="english-box" v-html="renderTitles.english">
                </div>
                <div class="chinese-box" v-html="renderTitles.chinese">
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
                <Dictionary v-if="vocab" :vocab="vocab"/>
            </div>
        </div>
        <SelectBox v-if="selectBox.isShow"
            @highlight="highlightVocab"
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
                mousex: 0,
                mousey: 0
            },
            titles: {
                english: 'What is the “Great Replacement” right-wing conspiracy theory?',
                chinese: '什么是 “大替换 “的右翼阴谋论？'
            },
            paragraphs: {
                english: [
                    'IN “THE GREAT GATSBY”, Tom Buchanan, a boorish plutocrat, recounts what he learned from a book called “The Rise of the Coloured Empires”, by a man called “Goddard”. “It’s a fine book, and everybody ought to read it,” says Buchanan. “The idea is if we don’t look out the white race will be—will be utterly submerged.” F. Scott Fitzgerald was parodying, just about, a book called “The Rising Tide of Colour against White World-Supremacy” by Lothrop Stoddard. Stoddard was admired by Adolf Hitler. He argued that the “Nordic race” that he held responsible for all world progress was being outbred by darker-skinned, supposedly inferior types. In Fitzgerald’s novel, Buchanan’s support for Goddard is a sign that he is a stupid, dislikeable man.',
                    'Almost a century later, the shooting of 13 people, 11 of them black, at a supermarket in Buffalo, a city in upstate New York on May 14th, points to the continuing popularity of such racist ideas. The suspect, Payton Gendron, an 18-year-old who streamed his massacre on Twitch, a gaming website, had apparently published a 180-page document online explaining his motivations. Much of it was copied directly from a similar “manifesto” written by the man who went on a killing spree in Christchurch, New Zealand, in 2019. In essence, it argued that there is an international Jewish conspiracy to engineer the migration of non-white people to historically white countries in an attempt to “replace” whites with a more pliant, racially inferior population. This is known as the “Great Replacement” theory.'
                ],
                chinese: [
                    '在《伟大的盖茨比》中，汤姆-布坎南，一个粗野的财阀，讲述了他从一本叫做《有色帝国的崛起》的书中所学到的东西，这本书的作者叫 "戈达德"。"这是一本好书，每个人都应该读一读，"布坎南说。"它的意思是，如果我们不注意，白人将被--将被彻底淹没。" F.斯科特-菲茨杰拉德模仿的，正是洛特罗普-斯托达德的一本名为《反对白人世界至上主义的有色人种崛起之潮》的书。斯托达德受到了阿道夫-希特勒的钦佩。他认为，他认为对所有世界进步负有责任的 "北欧人种 "正在被肤色较深的所谓劣等人种所淘汰。在菲茨杰拉德的小说中，布坎南对戈达德的支持表明他是一个愚蠢、令人讨厌的人。',
                    '近一个世纪后，5月14日在纽约州北部城市布法罗的一家超市发生的13人被枪杀事件，其中11人是黑人，这表明这种种族主义思想仍在流行。嫌疑人佩顿-根德隆（Payton Gendron）是一名18岁的年轻人，他在游戏网站Twitch上直播了他的屠杀，显然在网上发表了一份180页的文件，解释了他的动机。其中大部分内容直接抄自2019年在新西兰克赖斯特彻奇疯狂杀人的男子写的类似 "宣言"。从本质上讲，它认为存在一个国际犹太阴谋，设计非白人移民到历史上的白人国家，试图用更柔顺、种族低劣的人口 "取代 "白人。这就是所谓的 "大替代 "理论。'
                ]
            },
            hightedVocabs: ['shooting', 'boorish', 'Replacement', 'conspiracy']
        }
    },
    computed: {
        renderTitles(){
            const highlighted = highlightWords(this.titles.english, 
                                                this.hightedVocabs)
            return {
                english: `<h3>${highlighted}</h3>`,
                chinese: `<h3>${this.titles.chinese}</h3>`
            }
        },
        renderParagraphs(){
            const chinParas = this.paragraphs.chinese
            const engParas = this.paragraphs.english.map(
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
        highlightVocab(){
            if (this.hightedVocabs.includes(this.vocab)){
                this.hightedVocabs = this.hightedVocabs.filter(v => v !== this.vocab)
            }
            else {
                this.hightedVocabs.push(this.vocab)
            }
        }
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