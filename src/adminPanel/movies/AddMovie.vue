<template>
  <ActionItem
    title="Add Movie"
    path="admin.movies"
    action="All Movies"
    :icon="TableIcon"
    :btnIcon="EyeIcon"
  />
  <div>
    <Form class="mt-10" @submit="createMovie">
      <div class="mb-6">
        <label
          class="block mb-2 text-xs font-bold text-gray-700 uppercase"
          htmlFor="movie_en"
        >
          {{ $t("Movie_en") }}
        </label>
        <Field
          class="w-full p-2 border border-gray-400 rounded outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-slate-600"
          type="text"
          name="movie_en"
          rules="required"
        />
        <p className="mt-2 text-xs text-red-500">
          <ErrorMessage name="movie_en" />
        </p>
      </div>

      <div class="mb-6">
        <label
          class="block mb-2 text-xs font-bold text-gray-700 uppercase"
          htmlFor="movie_ka"
        >
          {{ $t("Movie_ka") }}
        </label>
        <Field
          class="w-full p-2 border border-gray-400 rounded outline-none dark:bg-slate-800 dark:text-slate-600 dark:border-slate-700"
          type="text"
          name="movie_ka"
          rules="required"
        />
        <p className="mt-2 text-xs text-red-500">
          <ErrorMessage name="movie_ka" />
        </p>
      </div>

      <div class="flex mb-6 w-min">
        <ButtonItem title="Create" />
      </div>
    </Form>
  </div>
</template>

<script setup>
import { TableIcon, EyeIcon } from "@heroicons/vue/outline";
import ButtonItem from "../../components/adminPanel/ButtonItem.vue";
import ActionItem from "../../components/adminPanel/ActionItem.vue";
import { defineRule, Form, Field, ErrorMessage } from "vee-validate";
import MovieAPI from "../../services/MovieAPI";

const locale = localStorage.getItem("lang");
defineRule("required", (value) => {
  if (!value || !value.length) {
    if (locale === "en") return "Value is required";
    if (locale === "ka") return "ველი ცარიელია";
  }
  return true;
});

const createMovie = async (data, { resetForm }) => {
  try {
    await MovieAPI.createMovie(data.movie_en, data.movie_ka);
    resetForm();
  } catch (error) {
    console.log(error);
  }
};
</script>
