<template>
  <div class="flex p-2 mb-10">
    <div class="flex p-2 dark:text-slate-600">
      <div class="flex-shrink-0 w-6 h-6 mr-3 dark:text-slate-600">
        <component :is="icon" />
      </div>
      {{ title }}
    </div>
    <button
      class="flex p-2 text-white bg-gray-500 dark:text-slate-900 dark:bg-slate-700 dark:hover:bg-blue-500 hover:bg-gray-600 rounded-xl"
    >
      <div class="w-6 h-6">
        <component :is="btnIcon" />
      </div>
      <router-link :to="path">{{ action }}</router-link>
    </button>
  </div>
</template>

<script>
export default {
  props: ["icon", "btnIcon", "title", "path", "action"],
};
</script>

<style></style>
