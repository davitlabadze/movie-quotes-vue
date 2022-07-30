<template>
  <div class="">
    <LanguageSwitcher />
    <div class="min-h-screen">
      <router-view />
    </div>
    <LoginForAdmin />
  </div>
</template>

<script setup>
import LanguageSwitcher from "../components/frontend/LanguageSwitcher.vue";
import LoginForAdmin from "../components/frontend/LoginForAdmin.vue";
</script>
