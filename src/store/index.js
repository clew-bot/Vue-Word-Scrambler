import Vue from "vue"
import Vuex from "vuex"

// Module import
import wordScrambler from "./module/wordScrambler"
Vue.use(Vuex)

const modules = {
    wordScrambler
}
export default new Vuex.Store({
  modules
})