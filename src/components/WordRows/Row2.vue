<template>
    <div class="secondRow">
        <div class="box2" v-for="i in words[1].length + twoWord" 
        :class="{'isCorrect':guessedLettersRow2Correct[i -1]=== true, 'lastBox': twoWord === 1}" :key="i">{{getLettersRow2[i - 1]}}</div>
      </div>
</template>

<script>
export default {
    name: "Row2",
    props: {
        getLettersRow2: {
            type: Array,
            required: true
        },
        guessedLettersRow2Correct: {
            type: Array,
            required: true
        },
        words: {
            type: Array,
            required: true
        },
        twoWord: {
            type: Number,
            required: true
        }
    },

}
</script>

<style scoped>
.secondRow {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}
.isCorrect {
  background: #4caf50 !important;
}
.box2 {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #e1e1e1;
  width: 8.8rem;
  height: 4rem;
  margin: 5px;
}

.lastBox:last-child {
  background: #ffb74d;
}

</style>