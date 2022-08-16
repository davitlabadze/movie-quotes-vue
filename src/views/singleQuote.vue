<template>
  <div class="flex justify-center py-32">
    <div v-if="data" class="rounded-lg">
      <div class="flex justify-center h-96">
        <img
          class="object-cover h-full rounded-lg"
          :src="image + data.thumbnail"
          alt="logo"
        />
      </div>
      <h1 class="py-12 text-5xl text-center text-white">
        {{ data.quote[this.$i18n.locale] }}
      </h1>
      <div class="py-2 text-center text-white">
        <router-link :to="{ name: 'home.movieQuote' }">
          <h1 class="font-sans text-5xl underline">
            {{ data.movie.movie[this.$i18n.locale] }}
          </h1>
        </router-link>
      </div>
    </div>
    <div v-else>
      <the-spiner />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import QuoteAPI from "../services/QuoteAPI";
import TheSpiner from "../components/frontend/TheSpiner.vue";
const image = import.meta.env.VITE_APP_BASE_URL;

const data = ref(null);

const loadQuote = async () => {
  try {
    const response = await QuoteAPI.getQuote();
    data.value = response.data.singleQuote;
  } catch (err) {
    console.log(err);
  }
};
loadQuote();
</script>
