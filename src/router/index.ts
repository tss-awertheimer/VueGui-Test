import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import Orders from "../views/Orders.vue";
import SingleOrder from "../components/SingleOrder.vue";
import OrdersList from "../components/OrdersList.vue";

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
    component: Orders,
    redirect: { name: "OrdersList" },
    children: [
      {
        path: "/orders",
        name: "OrdersList",
        component: OrdersList,
        props: true
      },
      {
        path: "/orders/:id",
        name: "SingleOrder",
        component: SingleOrder,
        props: true
      }
    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;
