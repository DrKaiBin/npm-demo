/*
 * @Description: 
 * @Author: zkb
 * @Date: 2022-09-05 11:09:23
 * @LastEditTime: 2022-09-09 11:51:28
 * @LastEditors: zkb
 */
import { Button, Form, FormItem, Input, InputPassword, Modal, Popconfirm, PopconfirmProps, Switch, SwitchProps } from "ant-design-vue"
import { defineComponent, h, PropType, ref, watchEffect } from "vue"
import './styles/index.less'



interface StatusProps {
    popconfirmProps?: PopconfirmProps,
    switchProps?: SwitchProps
}

/**
 * @Description: 用户状态
 * @Author: zkb
 * @Date: 2022-09-06 09:51:22
 * @LastEditTime: Do not edit
 * @LastEditors: zkb
 */
const status = defineComponent<StatusProps>({
    props: {
        popconfirmProps: {
            type: Object as PropType<PopconfirmProps>
        },
        switchProps: {
            type: Object as PropType<SwitchProps>
        }
    } as any,
    emits: ['onConfirm'],
    setup(props, { emit, attrs }) {
        const { popconfirmProps, switchProps } = props

        const visible = ref<boolean>(false)
        const switchStatus = ref<boolean>(false)
        let timeout
        watchEffect(() => {
            if (visible.value) {
                timeout = setTimeout(() => {
                    visible.value = false
                }, 8000)
            }
        })
        return () => (
            h(Popconfirm, {
                visible: visible.value,
                placement: 'top',
                'onUpdate:visible': () => {
                    visible.value = !visible.value
                },
                onConfirm: () => {
                    switchStatus.value = !switchStatus.value
                    emit('onConfirm', switchStatus.value)
                },
                visibleChange: () => {
                    clearTimeout(timeout)
                },
                ...popconfirmProps as PopconfirmProps
            }, {
                default: () => (h(Switch, {
                    checked: switchStatus.value,
                    checkedChildren: '启用',
                    unCheckedChildren: '停用',
                    ...switchProps as SwitchProps
                }))
            })
        )
    }
})

/**
 * @Description: 重置密码
 * @Author: zkb
 * @Date: 2022-09-06 10:33:09
 * @LastEditTime: Do not edit
 * @LastEditors: zkb
 */
const resetPassword = defineComponent({
    setup(this, props, ctx) {
        const visible = ref<boolean>(false)
        return () => [
            // 操作按钮
            h(Button, {
                onClick: () => {
                    visible.value = true
                }
            }, {
                default: () => '重置密码'
            }),
            // 内容区域
            h(Modal, {
                visible: visible.value,
                title: '重置密码',
                'onUpdate:visible': () => {
                    visible.value = !visible.value
                },
            }, {
                default: () => (h(Form, {
                    labelCol: { span: 4 }
                }, {
                    default: () => [
                        h(FormItem, {
                            label: "密码",
                            name: "username"
                        }, {
                            default: () => h(InputPassword, {
                                showCount: true,
                                maxlength: 20
                            })
                        }),
                        h(FormItem, {
                            label: "确认密码",
                            name: "username"
                        }, {
                            default: () => h(InputPassword, {
                                showCount: true,
                                maxlength: 20
                            })
                        })
                    ]
                }))
            })
        ]
    },
})


export { status, resetPassword }