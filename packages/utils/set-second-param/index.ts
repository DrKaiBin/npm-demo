/*
 * @Description: 
 * @Author: zkb
 * @Date: 2022-09-02 11:52:27
 * @LastEditTime: 2022-09-02 16:42:51
 * @LastEditors: zkb
 */
import { Dayjs } from "dayjs";
type RangeType = [Dayjs, Dayjs]

/**
 * @Description: 返回十位时间戳，通用于后台时间提交，长度精确
 * @Author: zkb
 * @Date: 2022-09-02 16:42:53
 * @LastEditTime: Do not edit
 * @LastEditors: zkb
 * @param {Dayjs} value
 */
export function useSetSecondParam(value: Dayjs | RangeType) {
    if (value instanceof Array) {
        return { startTime: value[0].unix(), entTime: value[1].unix() }
    } else {
        if (value instanceof Object) return value.unix()
        else return value
    }
}