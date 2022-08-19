<template>
  <div v-if="quotes">
    <Header :title="movie[this.$i18n.locale]" />

    <div
      v-for="quote in quotes"
      :key="quote.id"
      class="flex justify-center mt-14"
    >
      <div class="max-w-4xl shadow-lg">
        <img
          class="w-full rounded-t-lg"
          :src="image + quote.thumbnail"
          alt="logo"
        />
        <div class="px-6 py-4 bg-white rounded-b-lg">
          <div class="mb-2 text-xl font-bold text-center">
            {{ quote.quote[this.$i18n.locale] }}
          </div>
        </div>
      </div>
    </div>
  </div>

  <div v-else><TheSpiner /></div>
</template>

<script setup>
import Header from "../components/frontend/TheHeader.vue";
import { ref } from "vue";
import TheSpiner from "../components/frontend/TheSpiner.vue";
import getDataAPI from "../services/getDataAPI";
const image = import.meta.env.VITE_APP_BASE_URL;
import { useRoute } from "vue-router";
const route = useRoute();

const quotes = ref(null);
const movie = ref(null);

const loadQuote = async () => {
  try {
    const response = await getDataAPI.getMovieQuotes(route.params.movieId);

    movie.value = response.data.movie;
    quotes.value = response.data.quotes;
  } catch (err) {
    console.log(err);
  }
};
loadQuote();
</script>
