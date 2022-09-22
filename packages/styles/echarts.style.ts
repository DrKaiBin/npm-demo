/*
 * @Description: 
 * @Author: zkb
 * @Date: 2022-09-20 14:28:16
 * @LastEditTime: 2022-09-20 18:10:59
 * @LastEditors: zkb
 */
import * as echarts from 'echarts/core'
import {
    TooltipComponent, TooltipComponentOption,
    GridComponent, GridComponentOption,
    LegendComponent, LegendComponentOption,
    DataZoomComponent, DataZoomComponentOption
} from "echarts/components";
import { LineChart,LineSeriesOption } from 'echarts/charts'
import { UniversalTransition } from "echarts/features"
import { CanvasRenderer } from 'echarts/renderers'
echarts.registerTheme("trustmo-theme", {
    // 调色盘
    color: [
      "#597ef7",
      "#efc415",
      "#1ed1e8",
      "#18c38b",
      "#ff8700",
      "#7d3af7",
      "#1d38df",
      "#dfd001",
      "#8187fd",
      "#88cc12",
    ],
    valueAxis: {
        axisLine: {
            show: true,
            lineStyle: {
                color: "red"
            }
        },
        axisLabel: {
            show: true,
            color: "green"
        },
    },
    categoryAxis: {
        axisLine: {
            show: true,
            lineStyle: {
                color: "red"
            }
        },
        axisLabel: {
            show: true,
            color: "green"
        },
    },
    logAxis: {
        axisLine: {
            show: true,
            lineStyle: {
                color: "red"
            }
        },
        axisLabel: {
            show: true,
            color: "green"
        },
    }
});
echarts.use([
    TooltipComponent, GridComponent, LegendComponent, LineChart, CanvasRenderer, CanvasRenderer, UniversalTransition, DataZoomComponent
])
type EchartsOption = echarts.ComposeOption<TooltipComponentOption | GridComponentOption | LegendComponentOption | DataZoomComponentOption | LineSeriesOption>

export function renderEchart(chart: HTMLElement) {
    const render = echarts.init(chart, 'trustmo-theme')
    const option: EchartsOption = {
        tooltip: {
            trigger: 'axis',
            valueFormatter: (value) => value + '%'
        },
        legend: {
            show: true,
            left: 50,
            data: ['a', 'b', 'c', 'd', 'e', 'f', 'g']
        },
        grid: {
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: [1, 2, 3, 4, 5, 6, 7]
        },
        yAxis: {
            type: 'value'
        },
        dataZoom: [{ type: 'inside', minValueSpan: 10 }],
        series: [
            { 
                name: 'a',
                type: 'line',
                smooth: true,
                data: [11, 22, 33, 44 ,55 ,66, 77]
            },
            { 
                name: 'b',
                type: 'line',
                smooth: true,
                data: [77, 66, 55, 44, 33, 22, 11]
            },
            { 
                name: 'c',
                type: 'line',
                smooth: true,
                data: [177, 166, 155, 144, 133, 122, 111]
            },
            { 
                name: 'd',
                type: 'line',
                smooth: true,
                data: [277, 366, 455, 144, 733, 222, 411]
            },
            { 
                name: 'e',
                type: 'line',
                smooth: true,
                data: [577, 666, 355, 344, 233, 222, 21]
            },
            { 
                name: 'f',
                type: 'line',
                smooth: true,
                data: [377, 166, 155, 344, 433, 522, 111]
            },
            { 
                name: 'g',
                type: 'line',
                smooth: true,
                data: [477, 266, 355, 644, 333, 322, 211]
            }
        ]
    }
    render.setOption(option)
}
/*
 * @Description: echarts颜色主题
 * @Author: zkb
 * @Date: 2022-09-20 14:28:16
 * @LastEditTime: 2022-09-20 15:07:40
 * @LastEditors: zkb
 */
const echartTheme = () => {
    return {
        color: [
            '#597ef7', '#efc415', '#1ed1e8', '#18c38b', '#ff8700', '#7d3af7', '#1d38df', '#dfd001', '#8187fd', '#88cc12'
        ]
    }
}


