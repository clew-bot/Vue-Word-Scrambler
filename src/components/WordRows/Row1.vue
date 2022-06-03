<template>
    <div class="firstRow">
        <div class="box1" v-for="i in words[0].length + oneWord" 
        :class="{'isCorrect':guessedLettersRow1Correct[i -1]=== true, 
                    'lastBox': oneWord === 1, 
                    'twoBoxes' : words[0].length === 1}" :key="i">{{getLettersRow1[i - 1]}}</div>
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
}
</script>

<style scoped>

.twoBoxes {
  width: 30rem !important;
}
.firstRow {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}
.isCorrect {
  background: #82d585 !important;
  transition: background 0.5s ease-in-out;
  animation:shake .5s ease-in-out;
}
.box1 {
  background: #e1e1e1;
  min-width:50px;
  flex-grow:1;
  height: 4rem;
  margin: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
}

.lastBox:last-child {
  background: #ffb74d;
}

@keyframes shake {
  0% { transform: translate(0, 0); }
  25% { transform: translate(-5px, -5px); }
  50% { transform: translate(5px, -5px); }
  75% { transform: translate(-5px, -5px); }
  100% { transform: translate(0, 0); }
}

</style>