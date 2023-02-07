import { createRouter, createWebHistory } from "vue-router";

import memes from "../views/memes.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "memes",
      component: memes,
    },
  ],
});

export default router;
