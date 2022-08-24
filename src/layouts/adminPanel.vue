<template>
  <div class="h-screen bg-gray-200 dark:bg-gray-900">
    <div
      class="dark:bg-gray-900 shadow-right dark:shadow-none md:flex md:w-64 md:flex-col md:fixed md:inset-y-0"
    >
      <div class="flex flex-col flex-1 min-h-0">
        <div class="flex items-center h-16 px-4 shadow-sm bg-slate-800">
          <h1 class="text-xl font-bold text-white">{{ $t("Dashboard") }}</h1>
        </div>
        <div class="flex flex-col flex-1 overflow-hidden">
          <nav class="flex-1 px-2 py-4 space-y-1">
            <div
              class="flex items-center px-2 py-2 text-sm font-medium text-gray-900 dark:text-slate-600"
            >
              {{ $t("CORE") }}
            </div>

            <TheNavigation
              path="admin.dashboard"
              title="Dashboard"
              :icon="TemplateIcon"
            />

            <TheNavigation
              path="home.singleQuote"
              title="View Website"
              :icon="GlobeAltIcon"
            />
            <div
              class="flex items-center px-2 py-2 text-sm font-medium text-gray-900 dark:text-slate-600"
            >
              {{ $t("INTERFACE") }}
            </div>
            <TheNavigation
              path="admin.movies"
              title="Movies"
              :icon="FilmIcon"
            />
            <TheNavigation
              path="admin.quotes"
              title="Quotes"
              :icon="BookOpenIcon"
            />
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
            <DarkMode />
            <LangSwitcher />
            <div class="relative ml-3">
              <div>
                <button
                  @click="handleLogout"
                  type="button"
                  class="flex items-center px-2 py-2 text-sm font-medium text-gray-800 bg-gray-300 rounded-md hover:bg-gray-400 hover:text-white dark:bg-slate-900 dark:text-slate-700 dark:hover:text-slate-600"
                >
                  <LogoutIcon
                    class="flex-shrink-0 w-6 h-6 text-gray-500 dark:text-slate-700"
                  />
                  {{ $t("Log Out") }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <main class="w-full p-16 mx-auto">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script setup>
import {
  TemplateIcon,
  GlobeAltIcon,
  FilmIcon,
  BookOpenIcon,
  LogoutIcon,
} from "@heroicons/vue/outline";
import LangSwitcher from "../components/adminPanel/LangSwitcher.vue";
import DarkMode from "../components/DarkMode.vue";

import { useRouter } from "vue-router";
import AuthAPI from "../services/AuthAPI";
import TheNavigation from "../components/adminPanel/TheNavigation.vue";
const router = useRouter();
const handleLogout = async () => {
  try {
    const response = await AuthAPI.Logout();

    if (response.data.status === 200) {
      localStorage.removeItem("token");
      router.replace({ name: "home.singleQuote" });
    }
  } catch (err) {
    console.error(err);
  }
};
</script>
