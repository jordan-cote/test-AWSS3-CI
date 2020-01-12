import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home";
import Tab1 from "@/components/Tab1";
import Tab2 from "@/components/Tab2";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/tab1",
      name: "Tab1",
      component: Tab1
    },
    {
      path: "/tab2",
      name: "Tab2",
      component: Tab2
    }
  ]
});
