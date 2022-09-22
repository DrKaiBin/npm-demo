<!--
 * @Description: 
 * @Author: zkb
 * @Date: 2022-09-08 15:52:03
 * @LastEditTime: 2022-09-09 11:50:54
 * @LastEditors: zkb
-->
<template>
  <a-modal
    v-model:visible="visible"
    title="Basic Modal"
    @ok="handleOk"
  ></a-modal>
</template>

<script lang="ts" setup>
import setToArray from "lodash-es/_setToArray";
import { ref } from "vue";

const visible = ref<boolean>(false);
const handleOk = () => {
    console.log(23333);
}
</script>
 