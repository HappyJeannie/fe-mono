import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "fe-mono",
  description: "HappyJeannie's fe-mono blog via vite-press",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
      { text: 'Blogs', link: '/src/blog/index' },
      { text: '快速入口', link: 'src/fast-entry/index' },
      { text: '待办事项', link: 'src/todos/index' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      {
        text: 'Blogs',
        items: [
          {
            text: 'git 相关', link: '/src/blog/git/index'
          }
        ]
      },
      {
        text: '翻译内容',
        items: [
          {
            text: 'Vite Press 中文文档', link: '/src/translate/index'
          }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
