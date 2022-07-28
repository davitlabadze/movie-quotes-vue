import { createRouter, createWebHistory } from "vue-router";
import frontLayout from "@/layouts/frontLayout.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: frontLayout,
    },
  ],
});

export default router;
