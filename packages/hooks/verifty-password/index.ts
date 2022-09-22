/*
 * @Description: 密码认证hooks
 * @Author: zkb
 * @Date: 2022-08-30 17:31:25
 * @LastEditTime: 2022-08-31 18:10:41
 * @LastEditors: zkb
 */


import { InputPassword, message, Modal } from "ant-design-vue"
import { h, ref } from 'vue'

export function useVeriftyPassword(tip?: string) {
    const psw = ref<string>('')
    const inputDom = h(InputPassword, {
        'onUpdate:value': (value) => {
            psw.value = value
        },
        placeholder: '请输入当前用户密码确认操作！'
    })

    const confirm = (): Promise<{ success: boolean, password: string }> => {
        return new Promise((resolve, reject) => {
            Modal.confirm({
                title: '密码认证',
                content: h('div', [
                    inputDom,
                    h('div', { style: { color: 'red' } }, tip)
                ]),
                async onOk() {
                    if (!psw.value || psw.value === '') {
                        message.warning('请输入密码！')
                        return Promise.reject(false)
                    }
                    try {
                        resolve({ success: true, password: psw.value })
                        return Promise.resolve()
                        
                    } catch (error) {
                        
                    }
                },
                onCancel() {
                    return reject(false)
                }
            })
        })
    }

    return { confirm, psw }
}