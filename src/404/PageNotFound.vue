<template>
  <div class="flex items-center justify-center w-screen h-screen bgcolor">
    <div class="px-4 lg:py-12">
      <div class="lg:gap-4 lg:flex">
        <div
          class="flex flex-col items-center justify-center md:py-24 lg:py-32"
        >
          <h1 class="font-bold text-green-600 text-9xl">404</h1>
          <p
            class="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl"
          >
            <span class="text-red-500">{{ $t("Oops!") }}</span>
            {{ $t("Page not found") }}
          </p>
          <p class="mb-8 text-center text-gray-500 md:text-lg">
            {{ $t("The page you're looking for doesn't exist") }}.
          </p>
          <router-link :to="{ name: 'home.singleQuote' }">
            <p
              class="px-6 py-2 text-sm font-semibold text-blue-800 bg-blue-100 rounded"
            >
              {{ $t("Return to the home page") }}
            </p>
          </router-link>
        </div>
        <div class="mt-4">
          <img :src="Image" alt="img" class="object-cover w-full h-full" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Image from "../404/image.gif";
</script>
