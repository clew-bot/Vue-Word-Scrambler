const allAreTrue = (arr) => {
  return arr.every((element) => element === true);
};
export default {
  saveSentenceAnswer(state, sentence) {
    state.correctSentence = sentence;
  },
  addGuessedLetterRow1(state, letter) {
    if (state.done === true) {
      return;
    }
    if (
      state.correctSentence.length === 1 &&
      state.guessedLettersRow1.length === state.correctSentence[0].length &&
      letter !== "back"
    ) {
      return;
    }
    state.guessedLettersRow1.push(letter);
    if (letter === "back" && state.guessedLettersRow1.length > 1) {
      state.correctColorRow1.pop();
      state.guessedLettersRow1.pop();
      state.guessedLettersRow1.pop();
      state.total--;
      state.length--;
      return;
    }
    if (letter === "back" && state.guessedLettersRow1.length === 1) {
      state.correctColorRow1.pop();
      state.guessedLettersRow1.pop();
      return;
    }
    //For first words that start with one letter //
    if (state.correctSentence[0].length === 1) {
      if (state.total === 1 && state.guessedLettersRow1[0].length === 1) {
        if (letter === " ") {
          state.correctColorRow1.push(true);
          state.total = 0;
          state.length = 1;
          return;
        } else {
          state.correctColorRow1.push(false);
          state.total = 0;
          state.length = 1;
          return;
        }
      }
    }
    // Last case of letter, need that space
    if (state.correctSentence[0].length === state.total) {
      if (letter === " ") {
        state.correctColorRow1.push(true);
        state.total = 0;
        state.length = 1;
        return;
      } else {
        state.correctColorRow1.push(false);
        state.total = 0;
        state.length = 1;
        return;
      }
    }
    // The rest of the words
    if (state.guessedLettersRow1.length <= state.length) {
      if (state.correctSentence[0][state.total] === letter) {
        state.correctColorRow1.push(true);
        state.total++;
        state.length++;
        if (
          state.correctSentence.length === 1 &&
          state.guessedLettersRow1.length === state.correctSentence[0].length &&
          letter !== "back"
        ) {
          if (allAreTrue(state.correctColorRow1)) {
            state.nextButton = true;
            state.done = true;
          }
          return;
        }
        return;
      } else {
        state.correctColorRow1.push(false);
        state.total++;
        state.length++;
        return;
      }
    }
  },
  addGuessedLetterRow2(state, letter) {
    if (state.done === true) {
      return;
    }
    if (
      state.correctSentence.length === 2 &&
      state.guessedLettersRow2.length === state.correctSentence[1].length &&
      letter !== "back"
    ) {
      return;
    }
    state.guessedLettersRow2.push(letter);

    if (letter === "back" && state.guessedLettersRow2.length > 1) {
      state.correctColorRow2.pop();
      state.guessedLettersRow2.pop();
      state.guessedLettersRow2.pop();
      state.total--;
      state.length--;
      return;
    }

    if (letter === "back" && state.guessedLettersRow2.length === 1) {
      state.correctColorRow2.pop();
      state.guessedLettersRow2.pop();
      if (state.guessedLettersRow2.length === 0) {
        state.guessedLettersRow1.pop();
        state.correctColorRow1.pop();
        state.length = state.correctSentence[0].length + 1;
        state.total = state.correctSentence[0].length;
      }
      return;
    }

    if (state.correctSentence[1].length === 1) {
      if (state.total === 1 && state.guessedLettersRow2[0].length === 1) {
        if (letter === " ") {
          state.correctColorRow2.push(true);
          state.total = 0;
          state.length = 1;
          return;
        } else {
          state.correctColorRow2.push(false);
          state.total = 0;
          state.length = 1;
          return;
        }
      }
    }
    // Last case of letter, need that space
    if (state.correctSentence[1].length === state.total) {
      if (letter === " ") {
        state.correctColorRow2.push(true);
        state.total = 0;
        state.length = 1;
        return;
      } else {
        state.correctColorRow2.push(false);
        state.total = 0;
        state.length = 1;
        return;
      }
    }
    // The rest of the words
    if (state.guessedLettersRow2.length <= state.length) {
      if (state.correctSentence[1][state.total] === letter) {
        state.correctColorRow2.push(true);
        state.total++;
        state.length++;
        if (
          state.correctSentence.length === 2 &&
          state.guessedLettersRow2.length === state.correctSentence[1].length &&
          letter !== "back"
        ) {
          if (
            allAreTrue(state.correctColorRow2) &&
            allAreTrue(state.correctColorRow1)
          ) {
            state.nextButton = true;
            state.done = true;
          }
          return;
        }
        return;
      } else {
        state.correctColorRow2.push(false);
        state.total++;
        state.length++;
        return;
      }
    }
  },
  addGuessedLetterRow3(state, letter) {
    if (state.done === true) {
      return;
    }
    if (
      state.correctSentence.length === 3 &&
      state.guessedLettersRow3.length === state.correctSentence[2].length &&
      letter !== "back"
    ) {
      return;
    }

    state.guessedLettersRow3.push(letter);
    if (letter === "back" && state.guessedLettersRow3.length > 1) {
      state.correctColorRow3.pop();
      state.guessedLettersRow3.pop();

      state.guessedLettersRow3.pop();
      state.total--;
      state.length--;
      return;
    }
    if (letter === "back" && state.guessedLettersRow3.length === 1) {
      state.correctColorRow3.pop();
      state.guessedLettersRow3.pop();
      if (state.guessedLettersRow3.length === 0) {
        state.guessedLettersRow2.pop();
        state.correctColorRow2.pop();
        state.length = state.correctSentence[1].length + 1;
        state.total = state.correctSentence[1].length;
      }
      return;
    }
    //For first words that start with one letter //
    if (state.correctSentence[2].length === 1) {
      if (state.total === 1 && state.guessedLettersRow3[0].length === 1) {
        if (letter === " ") {
          state.correctColorRow3.push(true);
          state.total = 0;
          state.length = 1;
          return;
        } else {
          state.correctColorRow3.push(false);
          state.total = 0;
          state.length = 1;
          return;
        }
      }
    }
    // Last case of letter, need that space
    if (state.correctSentence[2].length === state.total) {
      if (letter === " ") {
        state.correctColorRow3.push(true);
        state.total = 0;
        state.length = 1;
        return;
      } else {
        state.correctColorRow3.push(false);
        state.total = 0;
        state.length = 1;
        return;
      }
    }

    // The rest of the words
    if (state.guessedLettersRow3.length <= state.length) {
      if (state.correctSentence[2][state.total] === letter) {
        state.correctColorRow3.push(true);
        state.total++;
        state.length++;
        if (
          state.correctSentence.length === 3 &&
          state.guessedLettersRow3.length === state.correctSentence[2].length &&
          letter !== "back"
        ) {
          if (
            allAreTrue(state.correctColorRow2) &&
            allAreTrue(state.correctColorRow1) &&
            allAreTrue(state.correctColorRow3)
          ) {
            state.nextButton = true;
            state.done = true;
          }
          return;
        }
        return;
      } else {
        state.correctColorRow3.push(false);
        state.total++;
        state.length++;
        return;
      }
    }
  },
  addGuessedLetterRow4(state, letter) {
    if (state.done === true) {
      return;
    }
    if (
      state.correctSentence.length === 4 &&
      state.guessedLettersRow4.length === state.correctSentence[3].length &&
      letter !== "back"
    ) {
      return;
    }
    state.guessedLettersRow4.push(letter);

    if (letter === "back" && state.guessedLettersRow4.length > 1) {
      state.correctColorRow4.pop();
      state.guessedLettersRow4.pop();
      state.guessedLettersRow4.pop();
      state.total--;
      state.length--;
      return;
    }
    if (letter === "back" && state.guessedLettersRow4.length === 1) {
      state.correctColorRow4.pop();
      state.guessedLettersRow4.pop();
      if (state.guessedLettersRow4.length === 0) {
        state.guessedLettersRow3.pop();
        state.correctColorRow3.pop();
        state.length = state.correctSentence[2].length + 1;
        state.total = state.correctSentence[2].length;
      }
      return;
    }
    if (state.correctSentence[3].length === 1) {
      if (state.total === 1 && state.guessedLettersRow4[0].length === 1) {
        if (letter === " ") {
          state.correctColorRow4.push(true);
          state.total = 0;
          state.length = 1;
          return;
        } else {
          state.correctColorRow4.push(false);
          state.total = 0;
          state.length = 1;
          return;
        }
      }
    }
    // Last case of letter, need that space
    if (state.correctSentence[3].length === state.total) {
      if (letter === " ") {
        state.correctColorRow4.push(true);
        state.total = 0;
        state.length = 1;
        return;
      } else {
        state.correctColorRow4.push(false);
        state.total = 0;
        state.length = 1;
        return;
      }
    }

    // The rest of the words
    if (state.guessedLettersRow4.length <= state.length) {
      if (state.correctSentence[3][state.total] === letter) {
        state.correctColorRow4.push(true);
        state.total++;
        state.length++;
        if (
          state.correctSentence.length === 4 &&
          state.guessedLettersRow4.length === state.correctSentence[3].length &&
          letter !== "back"
        ) {
          if (
            allAreTrue(state.correctColorRow2) &&
            allAreTrue(state.correctColorRow1) &&
            allAreTrue(state.correctColorRow3) &&
            allAreTrue(state.correctColorRow4)
          ) {
            state.nextButton = true;
            state.done = true;
          }
          return;
        }
        return;
      } else {
        state.correctColorRow4.push(false);
        state.total++;
        state.length++;
        return;
      }
    }
  },
  newGame(state) {
    state.correctColorRow1 = [];
    state.correctColorRow2 = [];
    state.correctColorRow3 = [];
    state.correctColorRow4 = [];
    state.guessedLettersRow1 = [];
    state.guessedLettersRow2 = [];
    state.guessedLettersRow3 = [];
    state.guessedLettersRow4 = [];
    state.correctSentence = [];
    state.total = 0;
    state.length = 1;
    state.nextButton = false;
    state.done = false;
  },
};
