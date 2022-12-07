// 1. Define route components.
// These can be imported from other files

import { createRouter, createWebHistory } from "vue-router";

import Home from "./views/Home.vue";

import Admin from "./views/Admin.vue";

import ProductDetails from "./views/ProductDetails.vue";

import Orders from "./views/Orders.vue";

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
  { path: "/", component: Home },
  {
    path: "/admin",
    component: Admin,
  },
  {
    path: "/productdetails/:id",
    component: ProductDetails,
  },
  {
    path: "/orders",
    component: Orders,
  },
];

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes, // short for `routes: routes`
});

export default router;
