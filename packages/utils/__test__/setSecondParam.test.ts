/*
 * @Description: 时间：传参后台格式测试
 * @Author: zkb
 * @Date: 2022-09-02 15:32:46
 * @LastEditTime: 2022-09-05 11:06:29
 * @LastEditors: zkb
 */
import { test, expect, it } from "vitest";
import { useSetSecondParam } from "../set-second-param";
import dayjs, { Dayjs } from "dayjs";

test('useSetSecondParam by dayjs', async () => {
    expect(typeof useSetSecondParam(dayjs())).toBe('number')
})

test('useSetSecondParam by [Dayjs, Dayjs]', () => {
    const timeObj = {
        startTime: dayjs().unix(),
        entTime: dayjs().unix()
    }
    expect(useSetSecondParam([dayjs(), dayjs()])).toEqual(timeObj)
})