<template>
  <div
    class="title select-none font-sans font-semibold text-lg transition-opacity duration-300"
    :class="show ? 'opacity-100' : 'opacity-0'"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
defineProps({
  show: Boolean,
});
</script>

<style scoped></style>
