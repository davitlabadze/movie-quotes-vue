<template>
  <div class="flex items-center justify-center pt-96">
    <span className="visually-hidden">
      <img className="w-8 h-8 mr-2 animate-spin " :src="Spiner" alt="loading" />
    </span>
  </div>
</template>

<script setup>
import Spiner from "../../assets/spiner.svg";
</script>
