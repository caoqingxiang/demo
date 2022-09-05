import { createRouter, createWebHashHistory } from "vue-router";
import routes from "./routes";

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

const whileList = ["/"]; // 配置白名单
// 路由加载前
router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  if (whileList.includes(to.path) || localStorage.getItem("token")) {
    next();
  } else {
    next("/");
  }
});

export default router;
