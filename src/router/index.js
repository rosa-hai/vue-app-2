import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Create from "../views/Create";
import Battle from "@/views/Battle";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/create",
    name: "Create",
    component: Create
  },
  {
    path: "/battle/:id",
    name: "Battle",
    component: Battle,
    props: route => ({ id: route.params.id })
  }
];
//
const router = new VueRouter({
  routes
});

export default router;
