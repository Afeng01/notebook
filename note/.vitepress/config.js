export default {
    base: '/notebook/',
    title: "notebook - CC",
    description: "使用 VitePress 搭建的笔记站点",
    
    themeConfig: {
      // 左侧导航栏
      sidebar: [
        {
          text: '简要说明',
          items: [
            { text: '介绍', link: '/intro' },
            { text: '开始使用', link: '/getting-started' }
          ]
        },
        {
          text: '计算机基础',
          items: [
            { text: '我的第一篇文章', link: '/blog/my-first-post' },
            { text: '学习笔记', link: '/blog/study-notes' }
          ]
        },
        {
          text: '高效系统指南', 
          link: '/windows-computer-literacy/',
          items: [
            {
              text: 'obsidian plugin',
              link: '/windows-computer-literacy/obsidian-plugin/',
              items: [
                { text: 'obsidian搭配 AI agent', link: '/windows-computer-literacy/obsidian-plugin/obsidian-AI-agent-install' }
              ]
            },
            { text: 'litter projects', link: '/windows-computer-literacy/projects/' }
          ]
        }
      ],
      
      // 右上角导航
      nav: [
        { text: '首页', link: '/' },
        { text: '笔记', link: '/notes/' }
      ]
    },
    
    vite: {
      resolve: {
        alias: {
          '@images': '/images'
        }
      }
    }
  }