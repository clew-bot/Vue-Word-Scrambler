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
  background: #82d585 !important;
    animation:shake .5s ease-in-out;
}
.box2 {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow:1;
  background: #e1e1e1;
  width: 8.8rem;
  height: 4rem;
  margin: 5px;
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