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
@import url('https://fonts.googleapis.com/css2?family=Crimson+Text:ital,wght@0,400;0,600;1,400&display=swap');
html {
  background: #efefef;  
  padding: 20px;
  }

#app {
  font-family: 'Crimson Text', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #efefef;
  padding: 10px;

}

</style>
