export default {
  getLettersRow1: (state) => {
    return state.guessedLettersRow1;
  },
  getLettersRow2: (state) => {
    return state.guessedLettersRow2;
  },
  getLettersRow3: (state) => {
    return state.guessedLettersRow3;
  },
  getLettersRow4: (state) => {
    return state.guessedLettersRow4;
  },
  correctColor: (state) => {
    return state.correctColor;
  },
  guessedLettersRow1Correct: (state) => {
    return state.correctColorRow1;
  },
  guessedLettersRow2Correct: (state) => {
    return state.correctColorRow2;
  },
  guessedLettersRow3Correct: (state) => {
    return state.correctColorRow3;
  },
  guessedLettersRow4Correct: (state) => {
    return state.correctColorRow4;
  },
  nextButton: (state) => {
    return state.nextButton;
  },
};
