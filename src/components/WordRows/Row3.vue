<template>
    <div class="thirdRow">
        <div class="box3" v-for="i in words[2].length + threeWord" 
        :class="{'isCorrect':guessedLettersRow3Correct[i -1]=== true, 'lastBox': threeWord === 1}" :key="i">{{getLettersRow3[i - 1]}}</div>
      </div>
</template>

<script>
export default {
    name: "Row3",
    props: {
        getLettersRow3: {
            type: Array,
            required: true
        },
        guessedLettersRow3Correct: {
            type: Array,
            required: true
        },
        words: {
            type: Array,
            required: true
        },
        threeWord: {
            type: Number,
            required: true
        }
    },

}
</script>

<style scoped>

.isCorrect {
  background: #4caf50 !important;
}
.box3 {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #e1e1e1;
  width: 4.6rem;
  height: 4rem;
  margin: 5px;
}
.lastBox:last-child {
  background: #ffb74d;
}

.thirdRow {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}


</style>