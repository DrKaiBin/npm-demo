import { Input, InputNumber } from "ant-design-vue";
import { defineComponent, h } from "vue";

/*
 * @Description: 
 * @Author: zkb
 * @Date: 2022-09-02 17:21:59
 * @LastEditTime: 2022-09-05 09:53:38
 * @LastEditors: zkb
 */
export default defineComponent({
    setup(this, props, ctx) {
        console.log(123123, ctx);
    },
    render() {
        return h('div', null, [
           h(InputNumber, { min: 0, max: 255}),
           h(InputNumber, { min: 0, max: 255}),
           h(InputNumber, { min: 0, max: 255}),
           h(InputNumber, { min: 0, max: 255})
        ])
    }
})