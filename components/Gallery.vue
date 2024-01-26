<template>
  <div class="gallery">
    <TransitionGroup name="list" tag="gallery-image">
      <template v-for="(img, i) in model" :key="img">
        <gallery-image v-model="model[i]" v-if="i === visibleIndex" />
      </template>
    </TransitionGroup>
  </div>
</template>

<script setup lang="ts">
const model = defineModel<string[]>({ required: true })

let visibleIndex = ref(0);
let timerId: NodeJS.Timeout;

onMounted(() => {
  timerId = setInterval(() => {
    visibleIndex.value = (visibleIndex.value + 1) % model.value.length
  }, 5_000);
})

onUnmounted(() => {
  clearInterval(timerId);
})
</script>

<style>
.gallery {
  max-width: 100vw;
}

.list-move,
/* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
  transition: all 2.0s cubic-bezier(0.895, 0.03, 0.685, 0.22);
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.list-leave-active {
  position: absolute;
}
</style> 
