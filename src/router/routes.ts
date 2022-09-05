import { RouteRecordRaw } from "vue-router";
import Home from "@/view/Home.vue";
import Child from "@/view/Child.vue";
import Table from "@/view/Table.vue";

// 类型为 Array<RouteRecordRaw>，可以 ctrl+左键查看
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/Login",
  },
  {
    path: "/Login",
    name: "Login",
    component: () => import("@/view/login/Login.vue"),
    meta: {
      title: "登录页面",
    },
  },
  {
    path: "/index",
    component: () => import("@/view/login/Index.vue"),
    meta: {
      title: "首页",
    },
  },

  {
    path: "/Father",
    component: () => import("@/view/Father.vue"),
    // redirect:'/Father/Child1',
    children: [
      {
        path: "Child1",
        components: {
          default: Child,
        },
      },
      {
        path: "Child2",
        components: {
          son1: () => import("@/view/son1.vue"),
          son2: () => import("@/view/son2.vue"),
        },
      },
    ],
  },
  { path: "/Home", name: "Home", component: Home },
  { path: "/Table", name: "Table", component: Table },
  {
    path: "/reg/:name/:address/:date",
    name: "reg",
    component: () => import("@/view/reg.vue"),
  },
  {
    path: "/Detail",
    name: "Detail",
    component: () => import("@/view/Detail.vue"),
  },
];

export default routes;
