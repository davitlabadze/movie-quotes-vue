<template>
  <div
    class="fixed ml-10 text-sm text-gray-600 underline opacity-50 bottom-16 hover:text-gray-300"
  >
    <router-link
      :to="token ? { name: 'admin.dashboard' } : { name: 'home.login' }"
    >
      <h1 class="font-sans">
        {{
          token
            ? $t("Go to Adminpanel")
            : $t("Authorization for the administrator")
        }}
      </h1>
    </router-link>
  </div>
</template>
<script setup>
const token = localStorage.getItem("token");
</script>
