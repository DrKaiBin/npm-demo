/*
 * @Description: 
 * @Author: zkb
 * @Date: 2022-09-06 11:24:34
 * @LastEditTime: 2022-09-06 11:26:04
 * @LastEditors: zkb
 */
// test.js

// 从测试实用工具集中导入 `mount()` 方法
// 同时导入你要测试的组件
import { mount } from '@vue/test-utils'
import {status} from './index'

// 现在挂载组件，你便得到了这个包裹器
const wrapper = mount(status)

// 你可以通过 `wrapper.vm` 访问实际的 Vue 实例
const vm = wrapper.vm

// 在控制台将其记录下来即可深度审阅包裹器
// 我们对 Vue Test Utils 的探索也由此开始
console.log(wrapper, vm)