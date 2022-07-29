<script setup>
import BackButton from "../components/frontend/BackButton.vue";
</script>

<template>
  <div>
    <BackButton />
    <div class="flex justify-center py-24">
      <main
        class="container max-w-lg p-16 mx-auto mt-10 bg-gray-300 border border-gray-200 rounded-xl"
      >
        <h1 class="text-center front-bold-text-xl">Authorization</h1>
        <form>
          <div class="mb-6">
            <label
              class="block mb-2 text-xs font-bold text-gray-700 uppercase"
              htmlFor="email"
            >
              email
            </label>
            <input
              class="w-full p-2 border border-gray-400"
              type="email"
              name="email"
              id="email"
            />
          </div>
          <div class="mb-6">
            <label
              class="block mb-2 text-xs font-bold text-gray-700 uppercase"
              htmlFor="password"
            >
              password
            </label>
            <input
              class="w-full p-2 border border-gray-400"
              type="password"
              name="password"
              id="password"
            />
          </div>
          <div class="flex mb-6">
            <button
              type="submit"
              class="px-4 py-2 text-white bg-gray-400 rounderd hover:bg-gray-500"
            >
              Log In
            </button>
          </div>
        </form>
      </main>
    </div>
  </div>
</template>

<style></style>
