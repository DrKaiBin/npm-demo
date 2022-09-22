/*
 * @Description: 
 * @Author: zkb
 * @Date: 2022-08-30 17:17:00
 * @LastEditTime: 2022-09-20 11:47:58
 * @LastEditors: zkb
 */
import { createApp } from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue';
import '../packages/styles/index.css';
import 'ant-design-vue/dist/antd.less';
import '../packages/styles/antd-ui.less';
import { generateTheme } from '../packages/utils/color/index'

const app = createApp(App)

generateTheme(true)
app.use(Antd)
app.mount('#app')