import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Test from "../views/Test";
import Battle from "@/views/Battle";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/test",
    name: "Test",
    component: Test
  },
  {
    path: "/battle/:id",
    name: "Battle",
    component: Battle
  }
];
//
const router = new VueRouter({
  routes
});

export default router;
