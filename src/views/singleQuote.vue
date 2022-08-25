<template>
  <div class="flex justify-center py-32" v-if="data">
    <div class="rounded-lg">
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
        <router-link
          :to="{ name: 'home.movieQuote', params: { movieId: data.movie_id } }"
        >
          <h1 class="font-sans text-5xl underline">
            {{ data.movie.movie[this.$i18n.locale] }}
          </h1>
        </router-link>
      </div>
    </div>
  </div>
  <NoInfromationAvailable v-else-if="!loading && !data" />
  <TheSpiner v-else />
</template>

<script setup>
import { ref } from "vue";
import TheSpiner from "../components/frontend/TheSpiner.vue";
import getDataAPI from "../services/getDataAPI";
import NoInfromationAvailable from "../components/frontend/NoInfromationAvailable.vue";
const image = import.meta.env.VITE_APP_BASE_URL;

const data = ref(null);
const loading = ref(null);
const loadQuote = async () => {
  try {
    loading.value = true;
    const response = await getDataAPI.getQuote();
    data.value = response.data.singleQuote;
    loading.value = false;
  } catch (err) {
    console.log(err);
  }
};
loadQuote();
</script>
