<template>
  <ActionItem
    title="All Movies"
    path="movie-add"
    action="Add Movie"
    :icon="TableIcon"
    :btnIcon="PlusIcon"
  />
  <div class="mt-20">
    <input
      name="search"
      type="search"
      id="search"
      placeholder="Search by movie"
      class="p-2 px-12 mb-4 bg-no-repeat rounded-lg shadow-sm outline-none dark:placeholder-gray-600 dark:bg-slate-800 dark:text-slate-500 bg bg-left-1 bg-search"
    />
  </div>
  <div>
    <table
      class="w-full text-center divide-y divide-gray-200 shadow-md dark:divide-slate-700"
    >
      <TableThead :titles="['id', 'Movie_en', 'Movie_ka', 'action']" />

      <tbody
        class="flex flex-col items-center w-full overflow-x-hidden overflow-y-scroll bg-white dark:bg-slate-800 rounded-b-md h-96"
      >
        <tr
          v-for="movie in movies"
          :key="movie.id"
          class="flex w-full bg-white dark:bg-slate-800"
        >
          <td class="w-1/4 p-4 px-6 text-gray-900 dark:text-slate-600">
            {{ movie.id }}
          </td>
          <td class="w-1/4 p-4 px-6 text-gray-500 dark:text-slate-600">
            {{ movie.movie.en }}
          </td>
          <td class="w-1/4 p-4 px-6 text-gray-500 dark:text-slate-600">
            {{ movie.movie.ka }}
          </td>
          <td class="w-1/4 p-4 px-6 text-center">
            <router-link :to="{ name: 'admin.movieEdit' }">
              <button class="ml-4">
                <PencilIcon
                  class="w-6 h-6 text-slate-300 hover:text-slate-500 dark:text-slate-700 hover:dark:text-slate-500"
                />
              </button>
            </router-link>
            <button class="ml-2" @click="deleteMovie(movie.id)">
              <TrashIcon
                class="w-6 h-6 text-slate-300 hover:text-slate-500 dark:text-slate-700 hover:dark:text-slate-500"
              />
            </button>
          </td>
        </tr>
      </tbody>
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
import MovieAPI from "../../services/MovieAPI";

const movies = ref(null);

const loadMovies = async () => {
  try {
    const response = await MovieAPI.getMovies();
    movies.value = response.data;
  } catch (err) {
    console.log(err);
  }
};
loadMovies();

const deleteMovie = async (movieId) => {
  try {
    await MovieAPI.deleteMovie(movieId);
    loadMovies();
  } catch (error) {
    console.log(error);
  }
};
</script>
