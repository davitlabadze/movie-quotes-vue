<template>
  <ActionItem
    title="Add Quote"
    path="admin.quotes"
    action="All Quotes"
    :icon="TableIcon"
    :btnIcon="EyeIcon"
  />
  <Form
    @submit="createQuote"
    encType="multipart/form-data"
    class="flex"
    v-if="movies"
  >
    <div class="w-1/2 overflow-hidden rounded-lg md:max-w-xl">
      <div class="md:flex">
        <div class="flex items-center justify-center w-full h-full">
          <label
            class="relative flex flex-col w-full border-4 border-gray-300 border-dashed h-96 hover:bg-gray-100 dark:hover:bg-slate-800"
          >
            <div class="flex flex-col items-center justify-center pt-7">
              <p
                class="text-sm tracking-wider text-gray-400 pt-28 group-hover:text-gray-600"
              >
                {{ $t("Attach_a_file") }}
              </p>
            </div>
            <img
              v-if="imageUrl"
              class="absolute w-full h-full rounded"
              :src="imageUrl"
              alt="image"
            />
            <Field
              type="file"
              class="opacity-0"
              accept="image/*"
              name="image"
              @change="onFilePicked"
            />
          </label>
        </div>
      </div>
    </div>

    <div class="w-1/2 ml-20">
      <div class="mb-6">
        <label
          class="block mb-2 text-xs font-bold text-gray-700 uppercase"
          htmlFor="quote_en"
        >
          {{ $t("Quote_en") }}
        </label>
        <Field
          class="w-full p-2 border border-gray-400 rounded outline-none dark:bg-slate-800 dark:text-slate-600 dark:border-slate-700"
          type="text"
          name="quote_en"
          rules="required"
        />
        <p className="mt-2 text-xs text-red-500">
          <ErrorMessage name="quote_en" />
        </p>
      </div>
      <div class="mb-6">
        <label
          class="block mb-2 text-xs font-bold text-gray-700 uppercase"
          htmlFor="quote_ka"
        >
          {{ $t("Quote_ka") }}
        </label>
        <Field
          class="w-full p-2 border border-gray-400 rounded outline-none dark:bg-slate-800 dark:text-slate-600 dark:border-slate-700"
          type="text"
          name="quote_ka"
          rules="required"
        />
        <p className="mt-2 text-xs text-red-500">
          <ErrorMessage name="quote_en" />
        </p>
      </div>
      <label class="block mb-2 text-xs font-bold text-gray-700 uppercase">
        {{ $t("Choose a movie") }}
      </label>
      <div class="mb-6">
        <Field
          as="select"
          class="dark:bg-slate-800 dark:text-slate-600 dark:border-slate-700 form-select block px-3 py-1.5 font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          aria-label="Default select example"
          name="movie_id"
        >
          <option v-for="movie in movies" :key="movie.id" :value="movie.id">
            {{ movie.movie[this.$i18n.locale] }}
          </option>
        </Field>
      </div>

      <div class="flex mb-6 w-min">
        <div class="flex mb-6 w-min">
          <ButtonItem title="Create" />
        </div>
      </div>
    </div>
  </Form>
  <div v-else>
    <TheSpiner />
  </div>
</template>

<script setup>
import ActionItem from "../../components/adminPanel/ActionItem.vue";
import { TableIcon, EyeIcon } from "@heroicons/vue/outline";
import ButtonItem from "../../components/adminPanel/ButtonItem.vue";
import { defineRule, Form, Field, ErrorMessage } from "vee-validate";
import QuoteAPI from "../../services/QuoteAPI";
import { ref } from "vue";
import TheSpiner from "../../components/frontend/TheSpiner.vue";
// import axios from "axios";

const locale = localStorage.getItem("lang");
defineRule("required", (value) => {
  if (!value || !value.length) {
    if (locale === "en") return "Value is required";
    if (locale === "ka") return "ველი ცარიელია";
  }
  return true;
});

const imageUrl = ref(null);
const imageFile = ref(null);
const onFilePicked = (event) => {
  const files = event.target.files;
  let filename = files[0].name;
  if (filename.lastIndexOf(".") <= 0) {
    return alert("please add a valid file!");
  }
  const fileReader = new FileReader();
  fileReader.addEventListener("load", () => {
    imageUrl.value = fileReader.result;
  });
  fileReader.readAsDataURL(files[0]);
  imageFile.value = event.target.files[0];
};

const movies = ref(null);
const getMovies = async () => {
  const response = await QuoteAPI.getMovies();
  movies.value = response.data;
};
getMovies();

const createQuote = async (data, { resetForm }) => {
  const formData = new FormData();
  formData.append("quote_en", data.quote_en);
  formData.append("quote_ka", data.quote_ka);
  formData.append("movie_id", data.movie_id);
  formData.append("thumbnail", data.image);
  try {
    await QuoteAPI.createQuote(formData);
    resetForm();
  } catch (error) {
    console.log(error);
  }
};
</script>
