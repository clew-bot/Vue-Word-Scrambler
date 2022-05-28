import actions from './actions.js'
import mutations from './mutations.js'
import getters from './getters.js'

const state = {
    correctSentence: null,
    guessedLettersRow1: [],
    guessedLettersRow2: [],
    guessedLettersRow3: [],
    guessedLettersRow4: [],
    correctColorRow1: [],
    correctColorRow2: [],
    correctColorRow3: [],
    correctColorRow4: [],
    total: 0,
    length: 1,
    nextButton: false,
    done: false,
}

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
  }