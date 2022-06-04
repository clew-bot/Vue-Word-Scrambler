<template>
  <div v-if="!getWinner">
      <h1 id="sentence">{{copy}}</h1>
    <h4 >Guess the Sentence! Start typing</h4>
    <h4>The yellow/orange blocks are meant for spaces</h4>
    <h2>Score: {{getScore}}</h2>
 
    <div class="container" :key="refreshGame">
    <div v-if="loading">
      <Row1  :getLettersRow1="getLettersRow1" :guessedLettersRow1Correct="guessedLettersRow1Correct" :words="words" :oneWord="oneWord"/>
</div>

    <div v-if="loading">
      <div v-if="words.length > 1">
        <Row2 :getLettersRow2="getLettersRow2" :guessedLettersRow2Correct="guessedLettersRow2Correct" :words="words" :twoWord="twoWord"/>
      </div>
</div>
 <div v-if="loading">
      <div v-if="words.length > 2">
         <Row3 :getLettersRow3="getLettersRow3" :guessedLettersRow3Correct="guessedLettersRow3Correct" :words="words" :threeWord="threeWord"/>
      </div>
</div>
 <div v-if="loading">
      <div v-if="words.length > 3">
       <Row4 :getLettersRow4="getLettersRow4" :guessedLettersRow4Correct="guessedLettersRow4Correct" :words="words" :fourWord="fourWord"/>
      </div>
</div>

<div class="btn-container">
 <button v-if="nextButton" @click="getNextSentence" class="next-btn">Next</button>
</div>
    </div>
         
  </div>
  <div v-else>
    <Winner />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Row1 from '@/components/WordRows/Row1.vue'
import Row2 from '@/components/WordRows/Row2.vue'
import Row3 from '@/components/WordRows/Row3.vue'
import Row4 from '@/components/WordRows/Row4.vue'
import Winner from '@/components/Winner/Winner.vue'
import json from "../assets/sentence.json"
export default {
  name: "WordScrambler",
  data() {
    return {
      words: [],
      counter: 1,
      sentence: "",
      currentGuessRow1: [],
      currentGuessRow2: [],
      currentGuessRow3: [],
      currentGuessRow4: [],
      wrongGuess: null,
      rightGuess: null,
      loading:false,
      refreshGame: 0,
      oneWord: null,
      twoWord: null,
      threeWord: null,
      fourWord: null,
      getWinner: false,
      getScore: 0,
      copy: "",
      sentences: json,

    };
  },
  components: {
    Row1,
    Row2,
    Row3,
    Row4,
    Winner
  },
  methods: {
    consoleme() {
      console.log();
    },
    getNextSentence() {
      if(this.counter === 10) { 
      this.getWinner = true
      return
      }
      this.getWinner = false;
      this.counter++;
      this.getScore++;
      this.words = [];
      this.loading = false;
      this.$store.dispatch("wordScrambler/NEW_GAME");
      this.getWords();
    },

    async getWords() {
      this.fourWord = 1;
      this.threeWord = 1;
      this.twoWord = 1;
      this.oneWord = 1;


      let newSentence = this.sentences[Math.floor(Math.random()*this.sentences.length)]
      
      newSentence.split(" ").forEach((word) => {
        this.words.push(word.toLowerCase());
      });
      this.words.length === 4 ? this.fourWord = 0
      : this.words.length === 3 ? this.threeWord = 0
      : this.words.length === 2 ? this.twoWord = 0
      : this.words.length === 1 ? this.oneWord = 0
      : null;

    String.prototype.shuffle = function() {
        return this.split(" ").map(function(word, i) {
            let a = word.split(""),
            n = a.length;

        for (i = n - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let tmp = a[i];
            a[i] = a[j];
            a[j] = tmp;
         }
          return a.join("");
        }).join(" ");
      }
    let copy = [...this.words];
    for (let i = 0; i < this.words.length; i++) {
      copy[i] = this.words[i].shuffle();
    }
    this.copy = copy.join(" ");
    this.$store.dispatch("wordScrambler/SAVE_SENTENCE", this.words)
    this.refreshGame++;
    this.loading= true;
    },
       getCorrectColor(i) {
      if (this.guessedLettersRow1Correct[i] === false) {
        return ""
      } else if (this.guessedLettersRow1Correct[i-1] === true) {
        return "isCorrect"
      }
      
  

    },
  },
  computed: {
    ...mapGetters("wordScrambler",[
      "getLettersRow1", "getLettersRow2", "getLettersRow3", "getLettersRow4", "correctColor", "guessedLettersRow1Correct", "guessedLettersRow2Correct", "guessedLettersRow3Correct", "guessedLettersRow4Correct",
      "nextButton", 
    ]),
 
  },
  mounted() {
    this.getWords();
    window.addEventListener("keyup", (e) => {
    e.preventDefault();
    let key =
      e.keyCode == 13
        ? "enter"
        : e.keyCode == 8
        ? "back"
        : e.keyCode == 32
        ? " "
        : String.fromCharCode(e.keyCode).toLowerCase();

    if(this.getLettersRow1.length < this.words[0].length + 1) {
    this.currentGuessRow1 = key;
    this.$store.dispatch("wordScrambler/GUESS_LETTER_ROW_1", this.currentGuessRow1)
    }
    else if(this.getLettersRow2.length < this.words[1].length + 1) {
      this.currentGuessRow2 = key;
      this.$store.dispatch("wordScrambler/GUESS_LETTER_ROW_2", this.currentGuessRow2) 
    } 

    else if(this.getLettersRow3.length < this.words[2].length + 1) {
      this.currentGuessRow3 = key;
      this.$store.dispatch("wordScrambler/GUESS_LETTER_ROW_3", this.currentGuessRow3) 
    } 

   else if(this.getLettersRow4.length < this.words[3].length + 1) {
      this.currentGuessRow4 = key;
      this.$store.dispatch("wordScrambler/GUESS_LETTER_ROW_4", this.currentGuessRow4) 
    } 
  });
  },
};
</script>

<style scoped>

.btn-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

#sentence {
  color: #8f262a;
  padding-top: 5%;
  font-size: 3rem !important;
}

.next-btn {
  width: 100px;
  display: flex;
  justify-content: center;
  border: none;
  padding: 10px;
  background: #4caf50;
  border-radius: 5px;
  box-shadow: 5px;
  color: white;
}
.container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  background: white;
  margin-left: 200px;
  margin-right: 200px;
  padding: 100px;
  border-radius: 10px;
}






</style>
