/*
 * @Description: 用户管理测试
 * @Author: zkb
 * @Date: 2022-09-06 11:09:23
 * @LastEditTime: 2022-09-19 18:11:31
 * @LastEditors: zkb
 */
import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import { nextTick } from 'vue'
import { rAF } from '../../../test-utils'
import { status } from '../index'


describe('test status', () => {
    const wrapper = mount(status)
    
    it('是否打开确认框', async () => {
        wrapper.get('button').trigger('click')
        await nextTick()
        await rAF()
        
        expect(document.getElementsByClassName('ant-popover')).toHaveLength(1)
    })

    it('通过确认是否改变开关状态', async () => {
        const switchDom = wrapper.get('button')
        switchDom.trigger('click')
        await rAF()
        
        const dom = document.querySelector('.ant-btn-primary') as HTMLButtonElement

        dom?.click()
        await rAF()
        expect(wrapper.find('[aria-checked="true"]').exists()).toBe(true)

        switchDom.trigger('click')
        await rAF()
        dom?.click()
        await rAF()
        expect(wrapper.find('[aria-checked="false"]').exists()).toBe(false)
    })
})