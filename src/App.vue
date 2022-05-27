<template>
  <div id="app">
    <WordScrambler :key="refreshGame"/>
  </div>
</template>

<script>
import WordScrambler from './components/WordScrambler.vue'

export default {
  name: 'App',
  components: {
    WordScrambler
  },
  data() {
    return {
      refreshGame: 2,
    };
  },
}
</script>

<style>
#app {
  font-family: "Open Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background: gray;
  height: 90vh;
}

</style>
