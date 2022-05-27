<template>
  <div class="winner-container">
    <h1>You Won!</h1>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.winner-container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%; right: 50%;
  transform: translate(50%,-50%);
}

</style>