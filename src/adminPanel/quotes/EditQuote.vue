<template>
  <ActionItem
    title="Edit Quote"
    path="quotes"
    action="All Quotes"
    :icon="TableIcon"
    :btnIcon="EyeIcon"
  />
  <form method="POST" encType="multipart/form-data" class="flex">
    <div class="w-1/2 overflow-hidden rounded-lg md:max-w-xl">
      <div class="md:flex">
        <div class="flex items-center justify-center w-full h-full">
          <label
            class="relative flex flex-col w-full border-4 border-gray-300 border-dashed h-96 hover:bg-gray-100"
          >
            <div class="flex flex-col items-center justify-center pt-7">
              <p
                class="text-sm tracking-wider text-gray-400 pt-28 group-hover:text-gray-600"
              >
                Attach a file
              </p>
            </div>
            <img
              class="absolute w-full h-full rounded"
              src="https://attachments-cdn.coub.com/coub_storage/coub/simple/cw_timeline_pic/f9253b232a0/4c705da47a3201399d8d2/med_1481141689_image.jpg"
              alt=""
            />
            <input type="file" class="opacity-0" />
          </label>
        </div>
      </div>
    </div>

    <div class="w-1/2 ml-20">
      <div class="mb-6">
        <label
          class="block mb-2 text-xs font-bold text-gray-700 uppercase"
          htmlFor="quote-en"
        >
          quote english
        </label>
        <input
          class="w-full p-2 border border-gray-400 rounded outline-none dark:bg-slate-800 dark:text-slate-600 dark:border-slate-700"
          type="text"
          name="quote-en"
          id="quote-en"
          value="kukaracha was killed"
        />
      </div>
      <div class="mb-6">
        <label
          class="block mb-2 text-xs font-bold text-gray-700 uppercase"
          htmlFor="quote-ka"
        >
          quote georgia
        </label>
        <input
          class="w-full p-2 border border-gray-400 rounded outline-none dark:bg-slate-800 dark:text-slate-600 dark:border-slate-700"
          type="text"
          name="quote-ka"
          id="quote-ka"
          value="კუკარაჩა მოკლეს"
        />
      </div>
      <label class="block mb-2 text-xs font-bold text-gray-700 uppercase">
        Choose a movie
      </label>
      <div class="mb-6">
        <select
          class="dark:bg-slate-800 dark:text-slate-600 dark:border-slate-700 form-select block px-3 py-1.5 font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          aria-label="Default select example"
          name="movie_id"
        >
          <option value="1">kukaracha</option>
        </select>
      </div>

      <div class="flex mb-6 w-min">
        <div class="flex mb-6 w-min">
          <ButtonItem title="Update" />
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import ActionItem from "../../components/adminPanel/ActionItem.vue";
import { TableIcon, EyeIcon } from "@heroicons/vue/outline";
import ButtonItem from "../../components/adminPanel/ButtonItem.vue";
export default {
  data() {
    return {
      TableIcon,
      EyeIcon,
    };
  },
  components: { ActionItem, ButtonItem },
};
</script>
