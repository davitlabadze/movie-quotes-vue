<template>
  <ActionItem
    title="Add Movie"
    path="movies"
    action="All Movies"
    :icon="TableIcon"
    :btnIcon="EyeIcon"
  />
  <div>
    <form class="mt-10">
      <div class="mb-6">
        <label
          class="block mb-2 text-xs font-bold text-gray-700 uppercase"
          htmlFor="movie_en"
        >
          {{ $t("Movie_en") }}
        </label>
        <input
          class="w-full p-2 border border-gray-400 rounded outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-slate-600"
          type="text"
          name="movie-en"
          id="movie-en"
        />
      </div>

      <div class="mb-6">
        <label
          class="block mb-2 text-xs font-bold text-gray-700 uppercase"
          htmlFor="movie_ka"
        >
          {{ $t("Movie_ka") }}
        </label>
        <input
          class="w-full p-2 border border-gray-400 rounded outline-none dark:bg-slate-800 dark:text-slate-600 dark:border-slate-700"
          type="text"
          name="movie-ka"
          id="movie-ka"
        />
      </div>
      <div class="flex mb-6 w-min">
        <ButtonItem title="Create" />
      </div>
    </form>
  </div>
</template>

<script>
import { TableIcon, EyeIcon } from "@heroicons/vue/outline";
import ButtonItem from "../../components/adminPanel/ButtonItem.vue";
import ActionItem from "../../components/adminPanel/ActionItem.vue";
export default {
  data() {
    return {
      TableIcon,
      EyeIcon,
    };
  },
  components: { ButtonItem, ActionItem },
};
</script>

<style></style>
