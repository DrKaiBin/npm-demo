import { defineComponent, h, PropType, reactive } from "vue";
import { DatePicker } from "ant-design-vue";
import dayjs, { Dayjs } from "dayjs";
import { DatePickerProps, RangePicker, RangePickerProps } from "ant-design-vue/lib/date-picker";
import { RangeType } from "ant-design-vue/lib/vc-picker/RangePicker";
/*
 * @Description: 时间组件封装
 * @Author: zkb
 * @Date: 2022-09-01 15:49:25
 * @LastEditTime: 2022-09-02 15:17:11
 * @LastEditors: zkb
 */
interface extraProps {
    pickerType: 'DatePicker' | 'RangePicker'
    rangeType?: 'history' | 'future' | 'none',
}
type basePickerProps = extraProps & (DatePickerProps | RangePickerProps)
type RangeValue = [Dayjs, Dayjs];
export default defineComponent<basePickerProps>({
    props: {
        pickerType: {
            type: String,
        },
        rangeType: {
            type: String,
            default: 'none'
        }
    } as any,
    setup(this, props, ctx) {        
        const { attrs } = ctx
        /**
         * @Description: 可选时间范围，
         * props.rangeType: 过去、未来、所有, 默认所有
         * @Author: zkb
         * @Date: 2022-09-02 10:33:55
         * @LastEditTime: Do not edit
         * @LastEditors: zkb
         * @param {Dayjs} current
         */
        const disabledDate = (current: Dayjs) => {
            if (props.rangeType === 'history') return current >= dayjs().endOf('day');
            else if (props.rangeType === 'future') return current <= dayjs().endOf('day')
            else return false
        };

        /**
         * @Description: 快捷选项
         * @Author: zkb
         * @Date: 2022-09-02 10:34:59
         * @LastEditTime: Do not edit
         * @LastEditors: zkb
         */
        const ranges = reactive({
            '当天': [dayjs().startOf('day'), dayjs()] as RangeValue,
            '本月': [dayjs().startOf('month'), dayjs()] as RangeValue,
            '最近三个月': [dayjs().set('month', dayjs().get('month') - 3).startOf('month'), dayjs()] as RangeValue,
            '最近半年': [dayjs().set('month', dayjs().get('month') - 6).startOf('month'), dayjs()] as RangeValue,
        })

        return () => (h(props.pickerType === 'DatePicker' ? DatePicker : RangePicker, {
            picker: 'week',
            disabledDate,
            ranges,
            ...attrs
        }))
    },
})