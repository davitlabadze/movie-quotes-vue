<template>
  <div>
    <button
      class="relative flex border-red-800 rounded-md dark:text-white"
      @mouseover="hover = true"
    >
      <TranslateIcon class="w-5 h-5" />
      <ChevronDownIcon class="w-5 h-5" />
    </button>

    <div v-if="hover" @mouseleave="hover = false" @mousedown="hover = false">
      <ul
        class="absolute z-10 w-40 p-2 py-3 mt-2 font-semibold text-left bg-white shadow-lg -ml-14 rounded-xl dark:bg-slate-800"
      >
        <li
          class="block text-center transition duration-150 ease-in hover:bg-gray-100 dark:hover:bg-slate-700"
        >
          <span class="flex p-4 cursor-pointer dark:text-white">
            <img
              src="https://cdn.countryflags.com/thumbs/georgia/flag-800.png"
              alt="georgia flag"
              class="w-5 h-5 mr-3 rounded"
            />
            ქართული
          </span>
        </li>

        <li
          class="block text-center transition duration-150 ease-in hover:bg-gray-100 dark:hover:bg-slate-700"
        >
          <span class="flex p-4 cursor-pointer dark:text-white"
            ><img
              src="https://img.freepik.com/free-vector/illustration-uk-flag_53876-18166.jpg"
              alt="georgia flag"
              class="w-5 h-5 mr-3 rounded"
            />
            English
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { ChevronDownIcon, TranslateIcon } from "@heroicons/vue/outline";

export default {
  components: {
    ChevronDownIcon,
    TranslateIcon,
  },
  data() {
    return {
      hover: false,
    };
  },
};
</script>
<style></style>
