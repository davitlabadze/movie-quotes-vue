<template>
  <div :class="{ 'sticky top-0 w-full h-32 bg-black': header === true }">
    <BackButton />
    <MovieTitle :title="title" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import BackButton from "./BackButton.vue";
import MovieTitle from "./MovieTitle.vue";

defineProps({
  title: String,
});

const header = ref(false);
const setHeader = (state) => {
  header.value = state;
};
const changeBgHeader = () => {
  if (window.scrollY >= 10) {
    setHeader(true);
  } else {
    setHeader(false);
  }
};
window.addEventListener("scroll", changeBgHeader);
</script>
