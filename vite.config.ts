/*
 * @Description: vite配置
 * @Author: zkb
 * @Date: 2022-08-30 17:17:00
 * @LastEditTime: 2022-09-20 10:32:43
 * @LastEditors: zkb
 */
/// <reference types="vitest" />
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { generateTheme } from './packages/utils/color/index'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    outDir: 'lib',
    lib: {
      entry: resolve(__dirname, 'packages/index.ts'),
      name: 'common',
      fileName: (format) => `common.${format}.js`, // 打包后的文件名
      formats: ['es', 'umd']
    },
    rollupOptions: {
      external: ['vue', 'ant-desgin-vue'],
      output: {
				// 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
				globals: {
          vue: 'Vue',
          'ant-desgin-vue': 'ant-desgin-vue'
				},
			},
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: generateTheme(),
        javascriptEnabled: true,
      },
    }
  },
  test: {
    environment: "happy-dom"
  }
})
