<template>
  <div>
    <gallery v-model="imgs" />
  </div>
</template>

<script setup lang="ts">
const imgs = [
  "/IMG_4420.jpeg",
  "/IMG_4421.jpeg",
  "/IMG_4422.jpeg",
  "/IMG_4423.jpeg",
  "/IMG_4424.jpeg",
]
</script>

<style>
.grid {
  position: relative;
  width: 100%;
  box-sizing: border-box;
}

.grid-item {
  position: relative;
  display: block;
  width: 100%;
}
</style>
