<template>
  <button @click="toggleDark()" class="mr-4">
    <MoonIcon class="w-5 h-5 text-white animate-dark" v-if="isDark === true" />
    <SunIcon class="w-5 h-5 animate-light" v-else />
  </button>
</template>

<script setup>
import { SunIcon, MoonIcon } from "@heroicons/vue/solid";
import { useDark, useToggle } from "@vueuse/core";
const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<style></style>
