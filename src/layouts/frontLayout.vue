<script setup>
import SingleQuote from "../views/singleQuote.vue";
import LanguageSwitcher from "../components/frontend/LanguageSwitcher.vue";
import LoginForAdmin from "../components/frontend/LoginForAdmin.vue";
// import MovieQuotes from "../views/movieQuotes.vue";
</script>

<template>
  <div class="">
    <LanguageSwitcher />
    <div class="min-h-screen">
      <SingleQuote />
      <!-- <MovieQuotes /> -->
    </div>
    <LoginForAdmin />
  </div>
</template>
