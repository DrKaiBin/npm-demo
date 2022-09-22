<template>
  <div class="w-full h-full p-10">
    <AntTheme></AntTheme>
    <!-- <div class="w-full h-[60px] text-primary text-3xl">tailwindcss</div>
    <div class="w-full h-[60px] text-primary text-3xl">echart</div> -->
    <EchartTheme></EchartTheme>
  </div>
</template>
<script lang="ts">
import { defineComponent, h, onMounted, reactive, ref } from "vue"
import AntTheme from './views/ant-theme/index.vue'
import EchartTheme from './views/echart-theme/index.vue'
export default defineComponent({
  components: {
    AntTheme,
    EchartTheme
},
  setup() {
  },
});
</script>