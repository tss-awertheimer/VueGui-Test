import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/orders",
    name: "Orders",
    // route level code-splitting
    // this generates a separate chunk (orders.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "orders" */ "../views/Orders.vue")
  },
  {
    path: "/order/:id",
    name: "Order",
    component: () =>
      import(/* webpackChunkName: "orders" */ "../components/TableItem.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
