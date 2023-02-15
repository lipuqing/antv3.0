import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// ant 引入
import "ant-design-vue/dist/antd.css";

// import { DatePicker } from 'ant-design-vue'; // 按需引入

import Antd from "ant-design-vue";

const app = createApp(App);
app.config.productionTip = false;

app.use(router);
// app.use(DatePicker);
app.use(Antd);
app.mount("#app");
