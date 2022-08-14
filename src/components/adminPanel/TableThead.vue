<template>
  <thead
    class="flex w-full text-white rounded-t-lg bg-gray-50 dark:bg-slate-800"
  >
    <tr class="flex w-full mb-2">
      <th
        v-for="title in titles"
        v-bind:key="title.id"
        class="w-1/4 p-2 text-xs text-gray-500 uppercase dark:text-slate-600"
      >
        {{ $t(title) }}
      </th>
    </tr>
  </thead>
</template>
<script>
export default {
  props: {
    titles: Object,
  },
};
</script>
