/*
 * @Description: 89
 * @Author: zkb
 * @Date: 2022-09-19 18:12:52
 * @LastEditTime: 2022-09-22 11:15:06
 * @LastEditors: zkb
 */
const colorList: {[key: string]: string} = {
    primaryColor: '189, 126, 247',
    successColor: '24, 195, 139',
    warningColor: '239, 196, 21',
    dangerColor: '254, 72, 90',
    alarmColor: '255, 135, 0',
    borderColorBase: '255, 0, 255',
    borderColorSplit: '0, 255, 255',
    textColor: '144, 144, 144',
    textColorSecondary: '50, 50, 50',
    disabledColor: '200, 200, 200',
    headingColor: '120, 210, 11'
}

/**
 * @Description: 设置主题
 * @Author: zkb
 * @Date: 2022-09-20 11:07:09
 * @LastEditTime: Do not edit
 * @LastEditors: zkb
 */
export function generateTheme(setElement?: boolean) {
    let rootCss = ''

    const lessTheme = {}
    const tailwindTheme = {}

    for (const item in colorList) {
        const name = item.replace(/([A-Z])/g, '-$1').toLocaleLowerCase()
        // 像素配置
        if (colorList[item].indexOf('px') !== -1) {
            lessTheme[item] = colorList[item]
            rootCss += `${'--' + name}: ${colorList[item]}; \n`
            continue
        }
        // 颜色配置
        rootCss += `${'--' + name}:rgb(${colorList[item]}); \n`
        rootCss += `${'--' + name + '-tailwindcss'}: ${colorList[item]}; \n`
        lessTheme[name] = tailwindTheme[item] = rgbToHex(`rgb(${colorList[item]})`)
    }

    if (setElement) {
        const styleNode = document.createElement('style')
        styleNode.setAttribute('theme', 'root-theme')
        styleNode.innerHTML = `:root { ${rootCss} }`
        const head = document.querySelector('head')

        if (head) {
            const currentStyle = Array.from(head.children).find(
                (node) => node.tagName === 'STYLE' && node.getAttribute('theme') === 'root-theme'
            )

            if (currentStyle) head.removeChild(currentStyle)

            head.appendChild(styleNode)
        }
    }
    console.log(123123, lessTheme, tailwindTheme);
    return lessTheme
}


export function rgbToHex(color:string) {
    // RGB颜色值的正则
    const reg = /^(rgb|RGB)/;
    if (reg.test(color)) {
        let strHex = "#";
        // 把RGB的3个数值变成数组
        const colorArr = color.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(",");
        // 转成16进制
        for (let i = 0; i < colorArr.length; i++) {
            var hex = Number(colorArr[i]).toString(16);
            if (hex === "0") {
                hex += hex;
            }
            strHex += hex;
        }
        return strHex;
    } else {
        return color
    }
}

export function hexToRgb(color:string) {
    // 16进制颜色值的正则
    const reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
    // 把颜色值变成小写
    color = color.toLowerCase()
    if (reg.test(color)) {
        // 如果只有三位的值，需变成六位，如：#fff => #ffffff
        if (color.length === 4) {
            let colorNew = "#";
            for (let i = 1; i < 4; i += 1) {
                colorNew += color.slice(i, i + 1).concat(color.slice(i, i + 1));
            }
            color = colorNew;
        }
        // 处理六位的颜色值，转为RGB
        const colorChange: number[] = [];
        for (let i = 1; i < 7; i += 2) {
            colorChange.push(parseInt("0x" + color.slice(i, i + 2)));
        }
        return "RGB(" + colorChange.join(",") + ")";
    } else {
        return color;
    }
}