/*
 * @Description: 
 * @Author: zkb
 * @Date: 2022-08-30 17:38:47
 * @LastEditTime: 2022-09-02 18:03:21
 * @LastEditors: zkb
 */

import { Test } from "./components/test";

export {
    Test
}

const components = [Test]
const install = (app) => {
    components.forEach(component => app.component((component.name, component)))
}

export default {
    install
}