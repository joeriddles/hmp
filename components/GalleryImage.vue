<template>
  <div ref="galleryImageContainer" class="gallery-image-container">
    <nuxt-img :src="model" fit="cover" height="600px" :width="width" ref="imgRef" />
  </div>
</template>

<script setup lang="ts">

const model = defineModel<string>({ required: true })
const galleryImageContainer: Ref<HTMLDivElement | null> = ref(null);
const width = ref("100vw");

onMounted(() => {
  const containerWidth = galleryImageContainer.value?.offsetWidth
  if (containerWidth) {
    width.value = containerWidth + "px";
  }
})
</script>

<style>
.gallery-image-container {
  max-width: 100%;
}
</style>
