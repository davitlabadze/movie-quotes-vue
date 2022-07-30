import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../layouts/frontLayout.vue"),
    children: [
      {
        path: "/",
        name: "singleQuote",
        component: () => import("../views/singleQuote.vue"),
      },
      {
        path: ":movie-quote",
        name: "movieQuote",
        component: () => import("../views/movieQuotes.vue"),
      },
      {
        path: ":login",
        name: "login",
        component: () => import("../auth/LoginItem.vue"),
      },
    ],
  },

  {
    path: "/admin",
    name: "admin",
    component: () => import("../layouts/adminPanel.vue"),
  },
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
