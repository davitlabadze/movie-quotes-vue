<template>
  <div class="flex p-2 mb-10">
    <div class="flex p-2 dark:text-slate-600">
      <div class="flex-shrink-0 w-6 h-6 mr-3 dark:text-slate-600">
        <component :is="icon" />
      </div>
      {{ $t(title) }}
    </div>
    <button
      class="flex p-2 text-white bg-gray-500 dark:text-slate-900 dark:bg-slate-700 dark:hover:bg-blue-500 hover:bg-gray-600 rounded-xl"
    >
      <div class="w-6 h-6">
        <component :is="btnIcon" />
      </div>
      <router-link :to="{ name: path }">{{ $t(action) }}</router-link>
    </button>
  </div>
</template>

<script setup>
defineProps({
  icon: Function,
  btnIcon: Function,
  title: String,
  path: String,
  action: String,
});
</script>

<style></style>
