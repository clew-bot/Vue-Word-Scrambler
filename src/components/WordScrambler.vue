<template>
  <div class="hello">
    <h1>Word Scrambler</h1>
    <h2>Score: {{getScore}}</h2>
    <button @click="getWords">Click</button>
    <h1>{{sentence}}</h1>
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



      <button v-if="nextButton" @click="getNextSentence">Next</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import Row1 from '@/components/WordRows/Row1.vue'
import Row2 from '@/components/WordRows/Row2.vue'
import Row3 from '@/components/WordRows/Row3.vue'
import Row4 from '@/components/WordRows/Row4.vue'
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

    };
  },
  components: {
    Row1,
    Row2,
    Row3,
    Row4
  },
  methods: {
    consoleme() {
      console.log("LENGTH", this.words[0].length);
    },

    getNextSentence() {
      this.counter++;
      this.words = [];
      this.loading = false;
      this.$store.dispatch("NEW_GAME");
      this.getWords();
    },

    async getWords() {
      this.fourWord = 1;
      this.threeWord = 1;
      this.twoWord = 1;
      this.oneWord = 1;

      const response = await fetch(
        `https://api.hatchways.io/assessment/sentences/${this.counter}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
      const {
        data: { sentence },
      } = await response.json();
      this.sentence = sentence;
      
      sentence.split(" ").forEach((word) => {
        this.words.push(word.toUpperCase());
      });
      this.words.length === 4 ? this.fourWord = 0
      : this.words.length === 3 ? this.threeWord = 0
      : this.words.length === 2 ? this.twoWord = 0
      : this.words.length === 1 ? this.oneWord = 0
      : null;

      this.$store.dispatch("SAVE_SENTENCE", this.words)
      this.refreshGame++;
      this.loading= true;

      // Jumble words
    //      for(var i = this.words.length - 1; i > 0; i--) {
    //     var j = Math.floor(Math.random() * (i + 1));
    //     var tmp = this.words[i];
    //     this.words[i] = this.words[j];
    //     this.words[j] = tmp;
    // }
    // console.log(this.words);
    // return this.words.join("");

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
    ...mapState({
      // getLettersRow1: state => state.getLettersRow1,
      // getLettersRow2: state => state.getLettersRow2,
    }),
    ...mapGetters([
      "getLettersRow1", "getLettersRow2", "getLettersRow3", "getLettersRow4", "correctColor", "guessedLettersRow1Correct", "guessedLettersRow2Correct", "guessedLettersRow3Correct", "guessedLettersRow4Correct", "getScore",
      "nextButton",
    ]),
 
  },
  mounted() {
    this.getWords();
   window.addEventListener("keyup", (e) => {
    e.preventDefault();
    let key =
      e.keyCode == 13
        ? "{enter}"
        : e.keyCode == 8
        ? "back"
        : e.keyCode == 32
        ? " "
        : String.fromCharCode(e.keyCode).toUpperCase();

    if(this.getLettersRow1.length < this.words[0].length + 1) {
    this.currentGuessRow1 = key;
    this.$store.dispatch("GUESS_LETTER_ROW_1", this.currentGuessRow1)
    }
    else if(this.getLettersRow2.length < this.words[1].length + 1) {
      this.currentGuessRow2 = key;
      this.$store.dispatch("GUESS_LETTER_ROW_2", this.currentGuessRow2) 
      console.log(this.currentGuessRow2)
    } 

    else if(this.getLettersRow3.length < this.words[2].length + 1) {
      this.currentGuessRow3 = key;
      this.$store.dispatch("GUESS_LETTER_ROW_3", this.currentGuessRow3) 
      console.log(this.currentGuessRow3)
    } 

   else if(this.getLettersRow4.length < this.words[3].length + 1) {
      this.currentGuessRow4 = key;
      this.$store.dispatch("GUESS_LETTER_ROW_4", this.currentGuessRow4) 
      console.log(this.currentGuessRow4)
    } 
  });
  },
};
</script>

<style scoped>

.isCorrect {
  background: #4caf50 !important;
}
.box1 {
  background: #e1e1e1;
  min-width: 90px;
  height: 4rem;
  margin: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.box1:last-child {
  background: #ffb74d;
}

.box4 {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #e1e1e1;
  width: 11.1rem;
  height: 4rem;
  margin: 5px;
}

.container {
  display: flex;

  justify-content: center;
  /* align-items: center; */
  flex-direction: column;
  background: white;
  margin-left: 200px;
  margin-right: 200px;
  padding: 100px;
  border-radius: 10px;
}






</style>
