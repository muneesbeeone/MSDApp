import { createRouter, createWebHashHistory  } from "vue-router";
import Home from "./views/Home.vue"; // Import your views/components
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  }
];


const router = createRouter({
  history: createWebHashHistory (),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }; 
  },
});

export default router;
