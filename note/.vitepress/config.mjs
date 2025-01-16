import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "无尽的探索",
  description: "个人知识库",
  
  vite: {
    server: {
      fs: {
        allow: ['..', 'D:/701 --- obsidian笔记存放/筱筱的/public']
      }
    }
  },
  
  themeConfig: {
    // 导航栏
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Note', link: '/content/index' }
    ],
    
    // 全局侧边栏
    sidebar: [
      {
        text: '简要说明',
        collapsed: false,
        items: [
          { text: '主页', link: '/content/' },
          { text: '介绍', link: '/content/intro' },
          { text: '开始使用', link: '/content/getting-started' }
        ]
      },
      {
        text: '生活随笔',
        collapsed: false,
        items: [
          { text: '生活随笔首页', link: '/content/categories/life/' },
          { text: '第一篇笔记', link: '/content/categories/life/first' }
        ]
      }
    ],

    // 文档页脚
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    // 大纲配置
    outline: {
      level: [2, 3],
      label: '目录'
    },

    // 搜索配置
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档'
          },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭'
            }
          }
        }
      }
    }
  },

  markdown: {
    ignoreDeadLinks: true
  }
}) 