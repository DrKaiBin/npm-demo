/*
 * @Description: 
 * @Author: zkb
 * @Date: 2022-08-31 14:54:31
 * @LastEditTime: 2022-09-01 15:45:40
 * @LastEditors: zkb
 */
import { describe, expect, it } from "vitest";
import { defineComponent, h, nextTick } from "vue";
import { useVeriftyPassword } from "../verifty-password";
import { Button } from "ant-design-vue";
import { mount } from '@vue/test-utils'

const genComp = defineComponent({
    setup() {
        const { confirm } = useVeriftyPassword('提示你很6')
        async function clickComfirm() {
            console.log(23333333);
            // await nextTick()
            // confirm().then(() => {
            //     console.log(22223433);
            // })
        }
        return () => (h(
            Button, {
            onClick: clickComfirm
        }, {
            default: () => { return '123123 '}
        }))
    }
})
describe('useVeriftyPassword', async () => {
    it('test 666', async () => {
        const wrapper = mount(genComp)
        await wrapper.trigger('click')
    })
})