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
        <form @submit.prevent="handleLogin">
          <div class="mb-6">
            <label
              class="block mb-2 text-xs font-bold text-gray-700 uppercase"
              for="email"
            >
              {{ $t("email") }}
            </label>
            <input
              class="w-full p-2 border border-gray-400"
              type="email"
              v-model="email"
            />
          </div>
          <div class="mb-6">
            <label
              class="block mb-2 text-xs font-bold text-gray-700 uppercase"
              for="password"
            >
              {{ $t("password") }}
            </label>
            <input
              class="w-full p-2 border border-gray-400"
              type="password"
              name="password"
              id="password"
              v-model="password"
            />
          </div>
          <div class="flex mb-6">
            <button
              type="submit"
              class="px-4 py-2 text-white bg-gray-400 rounderd hover:bg-gray-500"
            >
              {{ $t("Log In") }}
            </button>
          </div>
        </form>
      </main>
    </div>
  </div>
</template>

<script setup>
// import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
import axios from "axios";
import BackButton from "../components/frontend/BackButton.vue";
// import LoginAPI from "../services/LoginAPI";

// #issues  change ref form input value
const email = "admin@admin.ge";
const password = "admin";

const handleLogin = async () => {
  // LoginAPI.Authorization(email, password);
  // localStorage.setItem("token");
  try {
    await axios
      .post("http://127.0.0.1:8000/api/login", {
        email,
        password,
      })
      .then((res) => {
        console.log(JSON.stringify(res?.data));
        // alert
        const checkUser = res?.data.user;
        if (checkUser) {
          localStorage.setItem("token", res.data.token);
          // const token = res?.data.token;
          // router.push({ name: "dashboard" });
          // router.push("/admin").catch(() => {});
          router.push({ name: "admin.dashboard" });

          // navigate("/adminPanel/dashboard");
        } else {
          // setErrMessage(res.data.status);
          console.log(res.data.status);
        }
      })
      .catch((err) => {
        console.log(err);
        // setErrMessage("404");
      });
  } catch (err) {
    console.error(err);
  }
};
</script>
