/*
 * @Description: 
 * @Author: zkb
 * @Date: 2022-09-02 17:59:01
 * @LastEditTime: 2022-09-20 11:49:33
 * @LastEditors: zkb
 */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  purge: ['./index.html', './packages/**/*.{vue,js,ts,jsx,tsx}', './examples/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: ({ opacityVariable, opacityValue }) => {
          return colorGenerate({ opacityVariable, opacityValue }, 'var(--primary-color-tailwindcss)')
        },
        success: ({ opacityVariable, opacityValue }) => {
          return colorGenerate({ opacityVariable, opacityValue }, 'var(--success-color-tailwindcss)')
        },
        danger: ({ opacityVariable, opacityValue }) => {
          return colorGenerate({ opacityVariable, opacityValue }, 'var(--danger-color-tailwindcss)')
        },
        warning: ({ opacityVariable, opacityValue }) => {
          return colorGenerate({ opacityVariable, opacityValue }, 'var(--warning-color-tailwindcss)')
        },
        alarm: ({ opacityVariable, opacityValue }) => {
          return colorGenerate({ opacityVariable, opacityValue }, 'var(--alarm-color-tailwindcss)')
        }
      }
    },
  },
  plugins: [],
}

function colorGenerate(opt, color) {
  let colorStr = ''
  if (opt.opacityValue != null) colorStr = `rgba(${color}, ${opt.opacityValue})`
  if (opt.opacityVariable != null) colorStr = `rgba(${color}, var(${opt.opacityVariable}, 1))`
  else colorStr = `rgb(${color})`
  return colorStr
}