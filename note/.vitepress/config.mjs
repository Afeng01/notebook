import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/notebook/',
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
      { text: 'Note', link: '/public/' }
    ],
    
    // 全局侧边栏
    sidebar: [
      {
        text: '简要说明',
        collapsed: false,
        items: [
          { text: '一切的开始', link: '/public/' },
          { text: '介绍', link: '/public/intro' },
          { text: '开始使用', link: '/public/getting-started' }
        ]
      },
      {
        text: '生活随笔',
        collapsed: false,
        items: [
          { text: '生活随笔首页', link: '/public/categories/life/' },
          { text: '第一篇笔记', link: '/public/categories/life/first' }
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
    ignoreDeadLinks: true,
    config: (md) => {
      const defaultRender = md.renderer.rules.link_open || function(tokens, idx, options, env, self) {
        return self.renderToken(tokens, idx, options)
      }

      md.renderer.rules.link_open = function(tokens, idx, options, env, self) {
        const token = tokens[idx]
        const href = token.attrGet('href')
        
        if (href) {
          if (!href.startsWith('/') && !href.startsWith('http')) {
            token.attrSet('href', `/public/${href}`)
          }
        }

        return defaultRender(tokens, idx, options, env, self)
      }
    }
  }
}) 