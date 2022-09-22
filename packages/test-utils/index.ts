import { nextTick } from "vue"

/*
 * @Description: 为了测试转换，我们需要使用. 在触发转换事件后等待rAF().
 * @Author: zkb
 * @Date: 2022-09-06 15:28:33
 * @LastEditTime: 2022-09-06 16:22:43
 * @LastEditors: zkb
 */
export const rAF = async () => {
    return new Promise((res) => {
        requestAnimationFrame(() => {
            requestAnimationFrame(async () => {
                res(null)
                await nextTick()
            })
        })
    })
}

export const sleep = (timeout = 0) => new Promise(resolve => setTimeout(resolve, timeout));
