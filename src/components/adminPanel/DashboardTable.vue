<template>
  <div class="flex py-3 mt-10">
    <ClipboardListIcon
      class="flex-shrink-0 w-6 h-6 mr-3 text-black dark:text-slate-600"
    />

    <p class="dark:text-slate-600">{{ $t("Recent Movies quotes") }}</p>
  </div>
  <table
    class="w-full text-center divide-y divide-gray-200 rounded-lg shadow-md dark:divide-slate-700"
  >
    <TableThead
      :titles="['id', 'Movie_en', 'Movie_ka', 'Quote_en', 'Quote_ka', 'image']"
    />

    <tbody
      class="flex flex-col items-center w-full overflow-x-hidden overflow-y-scroll bg-white rounded-b-lg dark:bg-slate-800 h-96"
    >
      <tr
        class="flex w-full bg-white dark:bg-slate-800"
        v-for="data in quotes"
        :key="data.quote.id"
      >
        <td class="w-1/4 p-4 px-6 text-gray-900 dark:text-slate-600">
          {{ data.id }}
        </td>
        <td class="w-1/4 p-4 px-6 text-gray-500 dark:text-slate-600">
          {{ data.movie.movie.en }}
        </td>
        <td class="w-1/4 p-4 px-6 text-gray-500 dark:text-slate-600">
          {{ data.movie.movie.ka }}
        </td>
        <td class="w-1/4 p-4 px-6 text-gray-500 dark:text-slate-600">
          {{ data.quote.en }}
        </td>
        <td class="w-1/4 p-4 px-6 text-gray-500 dark:text-slate-600">
          {{ data.quote.ka }}
        </td>
        <td class="w-1/4 p-4 px-6 text-gray-500 dark:text-slate-600">
          <img
            class="ml-20"
            :src="image + data.thumbnail"
            width="64"
            height="64"
            alt="movie img"
          />
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import { ClipboardListIcon } from "@heroicons/vue/outline";
import TableThead from "./TableThead.vue";
const image = import.meta.env.VITE_APP_BASE_URL;
defineProps({
  quotes: Object,
});
</script>
