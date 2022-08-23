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
        path: "movie-quote/:movieId",
        name: "home.movieQuote",
        component: () => import("../views/movieQuotes.vue"),
      },
      {
        path: "login",
        name: "home.login",
        component: () => import("../auth/TheLogin.vue"),
      },
    ],
  },

  {
    path: "/admin",
    name: "admin",
    redirect: "/admin/dashboard",
    component: () => import("../layouts/adminPanel.vue"),
    meta: { isAuth: true },
    children: [
      {
        path: "dashboard",
        name: "admin.dashboard",
        component: () => import("../adminPanel/TheDashboard.vue"),
        meta: { isAuth: true },
      },
      {
        path: "movies",
        name: "admin.movies",
        component: () => import("../adminPanel/movies/ViewMovies.vue"),
        meta: { isAuth: true },
      },
      {
        path: "movie-add",
        name: "admin.movieAdd",
        component: () => import("../adminPanel/movies/AddMovie.vue"),
        meta: { isAuth: true },
      },
      {
        path: "movie-edit/:movieId",
        name: "admin.movieEdit",
        component: () => import("../adminPanel/movies/EditMovie.vue"),
      },
      {
        path: "quotes",
        name: "admin.quotes",
        component: () => import("../adminPanel/quotes/ViewQuotes.vue"),
        meta: { isAuth: true },
      },
      {
        path: "quote-add",
        name: "admin.quoteAdd",
        component: () => import("../adminPanel/quotes/AddQuote.vue"),
        meta: { isAuth: true },
      },
      {
        path: "quote-edit/:quoteId",
        name: "admin.quoteEdit",
        component: () => import("../adminPanel/quotes/EditQuote.vue"),
        meta: { isAuth: true },
      },
    ],
  },
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});
router.beforeEach((to, from, next) => {
  if (to.meta.isAuth) {
    const token = localStorage.getItem("token");
    if (!token) {
      next("/login");
    }
  }
  next();
});

export default router;
