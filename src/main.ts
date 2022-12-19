import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import * as VueRouter from "vue-router";
import routes from "./configs/routes";
// 按需导入出错了，没办法了
import NutUI from "@nutui/nutui";
import "@nutui/nutui/dist/style.css";

// iconfont 图标
import './assets/font/iconfont.css';

const router = VueRouter.createRouter({
  // 内部提供了 history 
  history: VueRouter.createWebHashHistory(),
  routes
})

createApp(App).use(router).use(NutUI).mount('#app')
