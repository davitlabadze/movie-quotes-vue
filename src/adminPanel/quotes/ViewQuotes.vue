<template>
  <ActionItem
    title="All Quotes"
    path="admin.quoteAdd"
    action="Add Quote"
    :icon="TableIcon"
    :btnIcon="PlusIcon"
  />
  <div class="mt-20">
    <input
      name="search"
      type="search"
      id="search"
      v-model="input"
      placeholder="Search by movie or quote"
      class="p-2 px-12 mb-4 bg-no-repeat rounded-lg shadow-sm outline-none dark:placeholder-gray-600 dark:bg-slate-800 dark:text-slate-500 bg bg-left-1 bg-search"
    />
  </div>
  <div>
    <table
      class="w-full text-center divide-y divide-gray-200 shadow-md dark:divide-slate-700"
    >
      <TableThead
        :titles="[
          'id',
          'Movie_en',
          'Movie_ka',
          'Quote_en',
          'Quote_ka',
          'image',
          'action',
        ]"
      />
      <tbody
        v-if="quotes"
        class="flex flex-col items-center w-full overflow-x-hidden overflow-y-scroll bg-white dark:bg-slate-800 rounded-b-md h-96"
      >
        <tr
          class="flex w-full bg-white dark:bg-slate-800"
          v-for="quote in filteredList()"
          :key="quote.id"
        >
          <td class="w-1/4 p-4 px-6 text-gray-900 dark:text-slate-600">
            {{ quote.id }}
          </td>
          <td class="w-1/4 p-4 px-6 text-gray-500 dark:text-slate-600">
            {{ quote.movie.movie.en }}
          </td>
          <td class="w-1/4 p-4 px-6 text-gray-500 dark:text-slate-600">
            {{ quote.movie.movie.ka }}
          </td>
          <td class="w-1/4 p-4 px-6 text-gray-500 dark:text-slate-600">
            {{ quote.quote.en }}
          </td>
          <td class="w-1/4 p-4 px-6 text-gray-500 dark:text-slate-600">
            {{ quote.quote.ka }}
          </td>
          <td class="w-1/4 p-4 px-6 text-gray-500 dark:text-slate-600">
            <img
              class="ml-14"
              :src="image + quote.thumbnail"
              width="64"
              height="64"
              alt="movie img"
            />
          </td>
          <td class="w-1/4 p-4 px-6 text-center">
            <router-link
              :to="{ name: 'admin.quoteEdit', params: { quoteId: quote.id } }"
            >
              <button class="ml-4">
                <PencilIcon
                  class="w-6 h-6 text-slate-300 hover:text-slate-500 dark:text-slate-700 hover:dark:text-slate-500"
                />
              </button>
            </router-link>
            <button class="ml-2" @click="deteleQuote(quote.id)">
              <TrashIcon
                class="w-6 h-6 text-slate-300 hover:text-slate-500 dark:text-slate-700 hover:dark:text-slate-500"
              />
            </button>
          </td>
        </tr>
      </tbody>
      <div v-else>
        <TheSpiner />
      </div>
    </table>
  </div>
</template>

<script setup>
import {
  TrashIcon,
  PencilIcon,
  TableIcon,
  PlusIcon,
} from "@heroicons/vue/outline";
import { ref } from "vue";
import ActionItem from "../../components/adminPanel/ActionItem.vue";
import TableThead from "../../components/adminPanel/TableThead.vue";
import QuoteAPI from "../../services/QuoteAPI";
import TheSpiner from "../../components/frontend/TheSpiner.vue";
const image = import.meta.env.VITE_APP_BASE_URL;

const quotes = ref([]);
const loadQuotes = async () => {
  try {
    const response = await QuoteAPI.getQuotes();
    quotes.value = response.data;
  } catch (error) {
    console.log(error);
  }
};

loadQuotes();

const deteleQuote = async (quoteId) => {
  try {
    await QuoteAPI.deteleQuote(quoteId);
    loadQuotes();
  } catch (error) {
    console.log(error);
  }
};

const input = ref("");

const filteredList = () => {
  const lang = localStorage.getItem("lang");
  return quotes.value.filter(
    (quote) =>
      quote.quote[lang].toLowerCase().includes(input.value.toLowerCase()) ||
      quote.movie.movie[lang].toLowerCase().includes(input.value.toLowerCase())
  );
};
</script>
