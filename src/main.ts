// 引入的不再是 Vue 构造函数，引入的是一个名为 createApp 的工厂函数
import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import zhCn from "element-plus/es/locale/lang/zh-cn";
import router from "./router";
import "font-awesome/css/font-awesome.min.css";

// 创建应用实例对象-app(类似于之前的vue2中的 vm ，但app比vm更“轻”)
const app = createApp(App);

app.use(store);
app.use(ElementPlus, { locale: zhCn });
app.use(router);
// 挂载
app.mount("#app");
