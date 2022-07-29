<template>
  <div>
    <div class="grid grid-cols-1 gap-4 sm:grid-cols-4">
      <DashboardCard
        color="bg-gradient-to-r from-blue-500 to-cyan-500 shadow-lgshadow-cyan-500/50 hover:from-indigo-500 hover:to-pink-500 hover:shadow-red-600/50"
        name="All Movies"
        path="/admin/movies"
        :icon="FilmIcon"
      />
      <DashboardCard
        color="bg-gradient-to-r from-green-500 to-teal-500 shadow-lg shadow-teal-500/50 hover:from-yellow-500 hover:to-red-500 hover:shadow-green-600/50"
        name="All Quotes"
        path="/admin/quotes"
        :icon="BookOpenIcon"
      />
    </div>
  </div>
</template>

<script>
import DashboardCard from "../components/adminPanel/DashboardCard.vue";
import { FilmIcon, BookOpenIcon } from "@heroicons/vue/outline";

export default {
  components: {
    DashboardCard,
  },
  data() {
    return {
      FilmIcon,
      BookOpenIcon,
    };
  },
};
</script>

<style></style>
