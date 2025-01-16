import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/notebook/',
  title: "无尽的探索",
  description: "使用 VitePress 搭建的笔记站点",
  lang: 'zh-CN',
  
  // 添加调试配置
  debug: true,
  
  themeConfig: {
    // 导航栏
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Note', link: '/content/' }
    ],
    
    // 全局侧边栏
    sidebar: [
      {
        text: '简要说明',
        collapsed: false,
        items: [
          { text: '一切的开始', link: '/content/' },
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
      },
      {
        text: '测试',
        items: [
          { text: '测试页面', link: '/content/test' }
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

    // 简化搜索配置
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '目前服务暂未启用，搜索不到以下关键词：',
                resetButtonTitle: '关闭',
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭'
                }
              }
            }
          }
        }
      }
    }
  },

  // 针对obsidian仓库相对路径的配置
  // 忽略死链接检查
  ignoreDeadLinks: true,

  markdown: {
    // 在markdown配置中也添加忽略 死链接 选项
    ignoreDeadLinks: true,
    config: (md) => {
      const defaultRender = md.renderer.rules.link_open || function(tokens, idx, options, env, self) {
        return self.renderToken(tokens, idx, options)
      }

      md.renderer.rules.link_open = function(tokens, idx, options, env, self) {
        const token = tokens[idx]
        const href = token.attrGet('href')
        
        if (href) {
          // 修改链接路径，将 public 替换为 content
          if (!href.startsWith('/') && !href.startsWith('http')) {
            token.attrSet('href', `/content/${href}`)
          }
        }

        return defaultRender(tokens, idx, options, env, self)
      }
    }
  },

  // 添加文件系统调试
  vite: {
    server: {
      fs: {
        strict: false,
        allow: ['..', 'D:/701 --- obsidian笔记存放/筱筱的/content']
      },
      port: 5174,
      strictPort: true,
      host: true
    },
    logLevel: 'info'
  }
}) 