<template>
  <div class="flex px-12 py-12 mb-20 text-5xl text-white ml-96">
    {{ title }}
  </div>
</template>

<script setup>
defineProps({
  title: String,
});
</script>
