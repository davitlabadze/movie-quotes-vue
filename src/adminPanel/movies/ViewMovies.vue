<template>
  <ActionItem
    title="All Movies"
    path="movie-add"
    action="Add Movie"
    :icon="TableIcon"
    :btnIcon="PlusIcon"
  />
  <div class="mt-20">
    <input
      name="search"
      type="search"
      id="search"
      placeholder="Search by movie"
      class="p-2 px-12 mb-4 bg-no-repeat rounded-lg shadow-sm outline-none dark:placeholder-gray-600 dark:bg-slate-800 dark:text-slate-500 bg bg-left-1 bg-search"
    />
  </div>
  <div>
    <table
      class="w-full text-center divide-y divide-gray-200 shadow-md dark:divide-slate-700"
    >
      <thead
        class="flex w-full text-white rounded-t-lg bg-gray-50 dark:bg-slate-800"
      >
        <tr class="flex w-full mb-2">
          <th
            class="w-1/4 p-2 text-xs text-gray-500 uppercase dark:text-slate-600"
          >
            id
          </th>
          <th
            class="w-1/4 p-2 text-xs text-gray-500 uppercase dark:text-slate-600"
          >
            movie english
          </th>
          <th
            class="w-1/4 p-2 text-xs text-gray-500 uppercase dark:text-slate-600"
          >
            movie georiga
          </th>

          <th
            class="w-1/4 p-2 text-xs text-gray-500 uppercase dark:text-slate-600"
          >
            actions
          </th>
        </tr>
      </thead>
      <tbody
        class="flex flex-col items-center w-full overflow-x-hidden overflow-y-scroll bg-white dark:bg-slate-800 rounded-b-md h-96"
      >
        <tr class="flex w-full bg-white dark:bg-slate-800">
          <td class="w-1/4 p-4 px-6 text-gray-900 dark:text-slate-600">1</td>
          <td class="w-1/4 p-4 px-6 text-gray-500 dark:text-slate-600">
            kukaracha
          </td>
          <td class="w-1/4 p-4 px-6 text-gray-500 dark:text-slate-600">
            კუკარაჩა
          </td>
          <td class="w-1/4 p-4 px-6 text-center">
            <router-link :to="{ name: 'admin.movieEdit' }">
              <button class="ml-4">
                <PencilIcon
                  class="w-6 h-6 text-slate-300 hover:text-slate-500 dark:text-slate-700 hover:dark:text-slate-500"
                />
              </button>
            </router-link>
            <button class="ml-2">
              <TrashIcon
                class="w-6 h-6 text-slate-300 hover:text-slate-500 dark:text-slate-700 hover:dark:text-slate-500"
              />
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import {
  TrashIcon,
  PencilIcon,
  TableIcon,
  PlusIcon,
} from "@heroicons/vue/outline";
import ActionItem from "../../components/adminPanel/ActionItem.vue";
export default {
  data() {
    return {
      TableIcon,
      PlusIcon,
    };
  },
  components: { TrashIcon, PencilIcon, ActionItem },
};
</script>

<style></style>
