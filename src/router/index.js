import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../layouts/frontLayout.vue"),
    children: [
      {
        path: "/",
        name: "home.singleQuote",
        component: () => import("../views/singleQuote.vue"),
      },
      {
        path: "movie-quote",
        name: "home.movieQuote",
        component: () => import("../views/movieQuotes.vue"),
      },
      {
        path: "login",
        name: "home.login",
        component: () => import("../auth/LoginItem.vue"),
      },
    ],
  },

  {
    path: "/admin",
    name: "admin",
    redirect: "/admin/dashboard",
    component: () => import("../layouts/adminPanel.vue"),
    children: [
      {
        path: "dashboard",
        name: "admin.dashboard",
        component: () => import("../adminPanel/DashboardItem.vue"),
      },
      {
        path: "movies",
        name: "admin.movies",
        component: () => import("../adminPanel/movies/ViewMovies.vue"),
      },
      {
        path: "movie-add",
        name: "admin.movieAdd",
        component: () => import("../adminPanel/movies/AddMovie.vue"),
      },
      {
        path: "movie-edit",
        name: "admin.movieEdit",
        component: () => import("../adminPanel/movies/EditMovie.vue"),
      },
      {
        path: "quotes",
        name: "admin.quotes",
        component: () => import("../adminPanel/quotes/ViewQuotes.vue"),
      },
    ],
  },
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
