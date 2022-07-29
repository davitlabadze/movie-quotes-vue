import { createRouter, createWebHistory } from "vue-router";
import frontLayout from "../layouts/frontLayout.vue";
import Login from "../auth/LoginItem.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: frontLayout,
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
  ],
});

export default router;
