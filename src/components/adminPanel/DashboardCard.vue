<template>
  <div
    class="relative flex items-center px-6 py-5 space-x-3 rounded-lg shadow-sm"
    :class="color"
  >
    <div class="flex-shrink-0">
      <div class="flex-shrink-0 w-6 h-6 mr-3 text-white">
        <component :is="icon" class="w-5 h-5" />
      </div>
    </div>
    <div class="flex-1 min-w-0">
      <router-link :to="path">
        <h3 class="focus:outline-none">
          <p class="text-sm font-medium text-white">{{ $t(name) }}</p>
          <p class="text-sm text-white truncate">
            {{ $t("total") }}: {{ data }}
          </p>
        </h3>
      </router-link>
    </div>
  </div>
</template>

<script setup>
defineProps({
  color: String,
  icon: Function,
  data: Number,
  path: String,
  name: String,
});
</script>
