import { Button, Modal } from "ant-design-vue";
import { defineComponent, h, onMounted } from "vue";

export default defineComponent({
    setup() {
        function clickComfirm() {
            console.log(233333);
            Modal.confirm({
                title: '6666'
            })
        }
        onMounted(() => {
            document.getElementsByTagName('button')[0].click()
            
        })
        return () => (
            h(
                Button, {
                onClick: clickComfirm
            }, '6666')
        )
    }
})