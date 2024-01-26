<template>
  <div style="position: relative;">
    <div class="logo">
      <img src="/logo.svg" style="width: 400px; margin-top: 48px;" />
    </div>
    <gallery v-model="imgs" />

    <div style="height: 800px; background-color: #ccbea8;">

    </div>
  </div>
</template>

<script setup lang="ts">
const imgs = ref([
  "/IMG_4420.jpeg",
  "/IMG_4421.jpeg",
  "/IMG_4422.jpeg",
  "/IMG_4423.jpeg",
  "/IMG_4424.jpeg",
])
</script>

<style>
.logo {
  width: 100%;
  position: absolute;
  text-align: center;
  z-index: 10;
  pointer-events: none;
}
</style>
