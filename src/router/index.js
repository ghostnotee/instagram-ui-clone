import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/home/index.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/direct",
    name: "Direct",
    component: () => import(/* webpackChunkName: "direct" */ "../views/direct"),
  },
  {
    path: "/explore",
    name: "Explore",
    component: () =>
      import(/* webpackChunkName: "explore" */ "../views/explore"),
  },
  {
    path: "/profile",
    name: "Profile",
    component: () =>
      import(/* webpackChunkName: "profile" */ "../views/profile"),
    children: [
      {
        path: "",
        name: "ProfilePost",
        component: () =>
          import(
            /* webpackChunkName: "profile/post" */ "../views/profile/post"
          ),
      },
      {
        path: "igtv",
        name: "ProfileIGTV",
        component: () =>
          import(
            /* webpackChunkName: "profile/post" */ "../views/profile/igtv"
          ),
      },
      {
        path: "save",
        name: "ProfileSave",
        component: () =>
          import(
            /* webpackChunkName: "profile/post" */ "../views/profile/save"
          ),
      },
      {
        path: "tag",
        name: "ProfileTag",
        component: () =>
          import(/* webpackChunkName: "profile/post" */ "../views/profile/tag"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
