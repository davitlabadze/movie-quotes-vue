<template>
  <div class="h-screen bg-gray-200 dark:bg-gray-900">
    <div
      class="dark:bg-gray-900 shadow-right dark:shadow-none md:flex md:w-64 md:flex-col md:fixed md:inset-y-0"
    >
      <div class="flex flex-col flex-1 min-h-0">
        <div class="flex items-center h-16 px-4 shadow-sm bg-slate-800">
          <h1 class="text-xl font-bold text-white">Adminpanel</h1>
        </div>
        <div class="flex flex-col flex-1 overflow-hidden">
          <nav class="flex-1 px-2 py-4 space-y-1">
            <div
              class="flex items-center px-2 py-2 text-sm font-medium text-gray-900 dark:text-slate-600"
            >
              CORE
            </div>
            <router-link to="#">
              <h1
                class="flex items-center px-2 py-2 text-sm font-medium text-gray-800 bg-gray-300 rounded-md shadow-lg shadow-gray-500/50 dark:bg-slate-800 dark:shadow-none dark:text-blue-700"
              >
                <TemplateIcon class="w-5 h-5 mr-3" />
                Dashboard
              </h1></router-link
            >
            <router-link to="/"
              ><h1
                class="flex items-center px-2 py-2 text-sm font-medium text-gray-700 rounded-md hover:shadow-lg shadow-gray-500/50 hover:text-black dark:hover:bg-slate-800 dark:shadow-none dark:hover:text-slate-600"
              >
                <GlobeAltIcon class="w-5 h-5 mr-3" />
                View Website
              </h1></router-link
            >
            <div
              class="flex items-center px-2 py-2 text-sm font-medium text-gray-900 dark:text-slate-600"
            >
              INTERFACE
            </div>
            <router-link to="#">
              <h1
                class="flex items-center px-2 py-2 text-sm font-medium text-gray-700 rounded-md hover:shadow-lg shadow-gray-500/50 hover:text-black dark:hover:bg-slate-800 dark:shadow-none dark:hover:text-slate-600"
              >
                <FilmIcon class="w-5 h-5 mr-3" />
                Movies
              </h1></router-link
            >
            <router-link to="#">
              <h1
                class="flex items-center px-2 py-2 text-sm font-medium text-gray-700 rounded-md hover:shadow-lg shadow-gray-500/50 hover:text-black dark:hover:bg-slate-800 dark:shadow-none dark:hover:text-slate-600"
              >
                <BookOpenIcon class="w-5 h-5 mr-3" />
                Quotes
              </h1></router-link
            >
          </nav>
        </div>
      </div>
    </div>
    <div class="flex flex-col md:pl-64">
      <div class="flex flex-shrink-0 h-16">
        <div
          class="flex justify-end flex-1 px-16 bg-white shadow dark:bg-slate-800"
        >
          <div class="flex flex-1 mt-4 font-bold text-black"></div>
          <div class="flex items-center md:ml-6">
            <LangSwitcher />
            <div class="relative ml-3">
              <div>
                <button
                  type="button"
                  class="flex items-center px-2 py-2 text-sm font-medium text-gray-800 bg-gray-300 rounded-md hover:bg-gray-400 hover:text-white dark:bg-slate-900 dark:text-slate-700 dark:hover:text-slate-600"
                >
                  <LogoutIcon
                    class="flex-shrink-0 w-6 h-6 text-gray-500 dark:text-slate-700"
                  />
                  Log Out
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <main class="w-full p-16 mx-auto">
        <DashboardItem />
      </main>
    </div>
  </div>
</template>

<script>
import {
  TemplateIcon,
  GlobeAltIcon,
  FilmIcon,
  BookOpenIcon,
  LogoutIcon,
} from "@heroicons/vue/outline";
import LangSwitcher from "../components/adminPanel/LangSwitcher.vue";
import DashboardItem from "../adminPanel/DashboardItem.vue";

export default {
  components: {
    TemplateIcon,
    GlobeAltIcon,
    FilmIcon,
    BookOpenIcon,
    LangSwitcher,
    LogoutIcon,
    DashboardItem,
  },
};
</script>

<style></style>
