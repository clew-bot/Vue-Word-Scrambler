<template>
  <div id="app">
    <WordScrambler/>
  </div>
</template>

<script>
import WordScrambler from '@/components/WordScrambler.vue'

export default {
  name: 'App',
  components: {
    WordScrambler
  },
}
</script>

<style>
html {
  background: #efefef  
  }

#app {
  font-family: "Open Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #efefef;

}

</style>
