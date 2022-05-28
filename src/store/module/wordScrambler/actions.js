import {
  SAVE_SENTENCE,
  GUESS_LETTER_ROW_1,
  GUESS_LETTER_ROW_2,
  GUESS_LETTER_ROW_3,
  GUESS_LETTER_ROW_4,
  NEW_GAME,
} from "./types";

export default {
  [SAVE_SENTENCE]({ commit }, sentence) {
    commit("saveSentenceAnswer", sentence);
  },
  [GUESS_LETTER_ROW_1]: ({ commit }, letter) => {
    commit("addGuessedLetterRow1", letter);
  },
  [GUESS_LETTER_ROW_2]: ({ commit }, letter) => {
    commit("addGuessedLetterRow2", letter);
  },
  [GUESS_LETTER_ROW_3]: ({ commit }, letter) => {
    commit("addGuessedLetterRow3", letter);
  },
  [GUESS_LETTER_ROW_4]: ({ commit }, letter) => {
    commit("addGuessedLetterRow4", letter);
  },
  [NEW_GAME]: ({ commit }) => {
    commit("newGame");
  },
};
