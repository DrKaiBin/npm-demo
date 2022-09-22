<template>
    <div class="w-full h-[60px] text-primary text-3xl">echart</div>
    <div class="w-full h-[500px]" ref="lineChart"></div>
  </template>
  <script lang="ts">
  import { defineComponent, onMounted, ref } from "vue";
  import { renderEchart } from "../../../packages/styles/echarts.style";
  export default defineComponent({
    setup() {
      const lineChart = ref();
      onMounted(() => {
        renderEchart(lineChart.value);
      });
      return {
        selectedKeys: ref(["mail"]),
        lineChart,
      };
    },
  });
  </script>