<!--
 * @Description: 
 * @Author: zkb
 * @Date: 2022-09-02 17:17:24
 * @LastEditTime: 2022-09-05 11:07:32
 * @LastEditors: zkb
-->
<template>
  <GenerateDatePicker
    picker-type="DatePicker"
    range-type="history"
    picker="date"
    :showTime="true"
    @change="changeTime"
    v-model:value="date"
  ></GenerateDatePicker>
  <GenerateDatePicker
    picker-type="RangePicker"
    range-type="history"
    picker="date"
    :showTime="true"
    @change="changeTime"
    v-model:value="date1"
  ></GenerateDatePicker>
</template>

<script setup lang="ts">
import GenerateDatePicker from "../../packages/components/generateDatePicker/index";
import { useSetSecondParam } from "../../packages/utils/set-second-param/index";
import { ref } from "vue";
import dayjs, { Dayjs } from "dayjs";
const date = ref<Dayjs>(dayjs());
const date1 = ref<[Dayjs, Dayjs]>([dayjs().set("month", 6), dayjs()]);

function changeTime(value: any) {
  const a = useSetSecondParam(value);
  console.log(a);
}
</script>
