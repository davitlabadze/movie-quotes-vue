<template>
  <div>
    <router-link :to="{ name: path }" v-slot="{ isActive }">
      <h1
        :class="[
          isActive
            ? 'flex items-center px-2 py-2 text-sm font-medium  text-gray-800 shadow-lg shadow-gray-500/50 bg-gray-300 rounded-md dark:bg-slate-800  dark:shadow-none dark:text-blue-700 '
            : 'flex items-center px-2 py-2 text-sm font-medium text-gray-700 rounded-md hover:shadow-lg shadow-gray-500/50 hover:text-black dark:hover:bg-slate-800 dark:shadow-none dark:hover:text-slate-600',
        ]"
      >
        <component :is="icon" class="w-5 h-5 mr-3"></component>
        {{ $t(title) }}
      </h1></router-link
    >
  </div>
</template>
<script setup>
defineProps({
  path: String,
  title: String,
  icon: Function,
});
</script>
