<template>
    <div class="firstRow">
        <div class="box1" v-for="i in words[0].length + oneWord" 
        :class="{'isCorrect':guessedLettersRow1Correct[i -1]=== true, 
                    'lastBox': oneWord === 1}" :key="i">{{getLettersRow1[i - 1]}}</div>
              <!-- <button @click="consoleme">click</button> -->
      </div>

</template>

<script>
export default {
    name: "Row1",
    props: {
        getLettersRow1: {
            type: Array,
            required: true
        },
        guessedLettersRow1Correct: {
            type: Array,
            required: true
        },
        words: {
            type: Array,
            required: true
        },
        oneWord: {
            type: Number,
            required: true
        }
    },
    methods: {
        consoleme() {
            console.log(this.words);
        }
    }

}
</script>

<style scoped>
.firstRow {
  display: flex;
    flex-direction: row;
  justify-content: space-around;
  align-items: center;
}
.isCorrect {
  background: #4caf50 !important;
}
.box1 {
  background: #e1e1e1;
  min-width:55px;
  height: 4rem;
  margin: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.lastBox:last-child {
  background: #ffb74d;
}

</style>