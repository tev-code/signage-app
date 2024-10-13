/** @format */

import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHashHistory } from "vue-router";
import Home from "./views/HomeView.vue";
import Category from "./views/CategoryView.vue";
import VueLazyload from "vue-lazyload";
import "animate.css";
import PrivacyPolicy from "./components/PrivacyPolicy.vue";
import TermsOfService from "./components/TermsOfService.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/category/:categoryName", component: Category, name: "category" },
  {
    path: "/privacy-policy",
    name: "PrivacyPolicy",
    component: PrivacyPolicy,
  },
  {
    path: "/terms-of-service",
    name: "TermsOfService",
    component: TermsOfService,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

createApp(App)
  .use(router)
  .use(VueLazyload, {
    // Optional: Configuration options
    loading: "./assets/Logo.png", // Placeholder image while the actual image is loading
    error: "./assets/Logo.png", // Image to show if loading fails
  })
  .mount("#app");
