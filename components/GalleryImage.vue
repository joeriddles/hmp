<template>
  <div ref="galleryImageContainer" class="gallery-image-container">
    <img :src="model" class="gallery-image" :style="`width: ${width};`" />
  </div>
</template>

<script setup lang="ts">

const model = defineModel<string>({ required: true })
const galleryImageContainer: Ref<HTMLDivElement | null> = ref(null);
const width = ref("100vw");

onMounted(() => {
  calculateWidth();
  window.addEventListener("resize", onResize);
})

onUnmounted(() => {
  window.removeEventListener("resize", onResize);
});

const calculateWidth = () => {
  const containerWidth = galleryImageContainer.value?.offsetWidth
  if (containerWidth) {
    width.value = containerWidth + "px";
  }
}

const onResize = (_: UIEvent) => {
  calculateWidth();
}
</script>

<style>
.gallery-image-container {
  height: 600px;
  max-width: 100%;
}

.gallery-image {
  height: 600px;
  object-fit: cover;
}
</style>
