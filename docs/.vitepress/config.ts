import { defineConfig } from 'vitepress'
import {
  TranslateRoute,
  BlogRoute,
  ReferenceRoute
} from './routes'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "fe-mono",
  description: "HappyJeannie's fe-mono blog via vite-press",
  base: "/HappyJeannie/fe-mono",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
      { text: 'Blogs', link: '/src/blog/index' },
      { text: '快速入口', link: 'src/fast-entry/index' },
      { text: '待办事项', link: 'src/todos/index' },
      {
        text: '其他',
        items: [
          {
            text: 'GitHub', link: 'https://github.com/'
          },
          {
            text: '还没想好', link: 'src/todos/index'
          }
        ]
      }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      BlogRoute,
      TranslateRoute,
      ReferenceRoute
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    outline: {
      level: [2, 6],
      label: '目录'
    },
    i18nRouting: true
  }
})
