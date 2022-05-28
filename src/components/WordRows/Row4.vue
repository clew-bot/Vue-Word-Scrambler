<template>
    <div class="fourthRow">
        <div class="box4" v-for="i in words[3].length" 
        :class="{'isCorrect':guessedLettersRow4Correct[i -1]=== true}" :key="i">{{getLettersRow4[i - 1]}}</div>
      </div>
</template>

<script>
export default {
    name: "Row4",
    props: {
        getLettersRow4: {
            type: Array,
            required: true
        },
        guessedLettersRow4Correct: {
            type: Array,
            required: true
        },
        words: {
            type: Array,
            required: true
        }
    },

}
</script>

<style scoped>

.isCorrect {
  background: #4caf50 !important;
}
.box4 {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #e1e1e1;
  width: 11.1rem;
  height: 4rem;
  margin: 5px;
  flex-grow: 1;
}

.fourthRow {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}

</style>