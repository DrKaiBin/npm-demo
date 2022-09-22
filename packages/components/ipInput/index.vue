<!--
 * @Description: 单IP快捷输入
 * @Author: zkb
 * @Date: 2022-09-02 17:00:34
 * @LastEditTime: 2022-09-05 10:12:55
 * @LastEditors: zkb
-->
<script lang="ts">
import { InputNumber } from "ant-design-vue";
import { defineComponent, h } from "vue";

/*
 * @Description:
 * @Author: zkb
 * @Date: 2022-09-02 17:21:59
 * @LastEditTime: 2022-09-02 17:41:58
 * @LastEditors: zkb
 */
export default defineComponent({
  setup(this, props, ctx) {
    console.log(ctx);
  },
  render() {
    return h(
      "div",
      {
        class: "test",
      },
      [
        h(InputNumber, { min: 0, max: 255 }),
        h(InputNumber, { min: 0, max: 255 }),
        h(InputNumber, { min: 0, max: 255 }),
        h(InputNumber, { min: 0, max: 255 }),
      ]
    );
  },
});
</script>
<style lang="less">
.test {
  width: 200px;
  @apply ~"w-[202px] border border-black border-solid";
  .ant-input-number {
    @apply ~"w-[50px] border-l-0";
    // @apply border-0 !important;
    &-handler-wrap {
        @apply hidden;
    }
    &-focused {
        @apply shadow-none;
    }
    &:hover, &:active {
        @apply border-transparent border-0 border-r-0 !important;
    }
  }
}
</style>
