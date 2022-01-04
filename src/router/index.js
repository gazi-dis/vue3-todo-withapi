import { createRouter, createWebHistory } from "vue-router";
import Home from "@/components/Home.vue";

const routerHistory = createWebHistory();
const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
  ],
});
export default router;