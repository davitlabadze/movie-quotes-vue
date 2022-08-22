<template>
  <div>
    <BackButton />
    <div class="flex justify-center py-24">
      <main
        class="container max-w-lg p-16 mx-auto mt-10 bg-gray-300 border border-gray-200 rounded-xl"
      >
        <h1 class="text-center front-bold-text-xl">
          {{ $t("Authorization") }}
        </h1>
        <Form @submit="handleLogin">
          <div class="mb-6">
            <label
              class="block mb-2 text-xs font-bold text-gray-700 uppercase"
              for="email"
            >
              {{ $t("email") }}
            </label>
            <Field
              class="w-full p-2 border border-gray-400"
              type="email"
              name="email"
              rules="required"
            />
            <span className="mt-2 text-xs text-red-500">
              <ErrorMessage name="email" />
              {{ errStatus == 404 ? $t("This user does not exist") : "" }}
            </span>
          </div>

          <div class="mb-6">
            <label
              class="block mb-2 text-xs font-bold text-gray-700 uppercase"
              for="password"
            >
              {{ $t("password") }}
            </label>
            <Field
              class="w-full p-2 border border-gray-400"
              type="password"
              name="password"
              autocomplete="on"
              rules="required"
            />
            <span className="mt-2 text-xs text-red-500">
              <ErrorMessage name="password" />
              {{ errStatus == "401" ? $t("The password is incorrect") : "" }}
            </span>
          </div>
          <div class="flex mb-6">
            <button
              type="submit"
              class="px-4 py-2 text-white bg-gray-400 hover:bg-gray-500 rounderd"
            >
              {{ $t("Log In") }}
            </button>
          </div>
        </Form>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
import BackButton from "../components/frontend/BackButton.vue";
import AuthAPI from "../services/AuthAPI";
import { defineRule, Form, Field, ErrorMessage } from "vee-validate";

const locale = localStorage.getItem("lang");
defineRule("required", (value) => {
  if (!value || !value.length) {
    if (locale === "en") return "Value is required";
    if (locale === "ka") return "ველი ცარიელია";
  }
  return true;
});

const errStatus = ref(null);
const handleLogin = async (values) => {
  try {
    const response = await AuthAPI.login(values.email, values.password);
    const checkUser = response?.data?.user;
    if (checkUser) {
      localStorage.setItem("token", response.data.token);
      router.replace({ name: "admin.dashboard" });
    } else {
      errStatus.value = response.data.status;
      console.log(response.data.status);
    }
  } catch (err) {
    errStatus.value = 404;
    console.error(err);
  }
};
</script>
