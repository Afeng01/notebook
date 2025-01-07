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
            { text: '开始使用', link: '/getting-started' },
            //这里添加新文章链接
          ]
        },
        {
          text: '计算机基础', //text可以是任何想要在侧边栏显示的文字
          items: [ //这里使用的是数组
            { text: '我的第一篇文章', link: '/blog/my-first-post' },
            { text: '学习笔记', link: '/blog/study-notes' },
            // 在这里添加新的文章链接
            // link: 必须以 / 开头，并且对应实际的文件路径（不需要包含 .md 扩展名）
          ]
        },
        {
          text: '高效系统指南', //text可以是任何想要在侧边栏显示的文字
          items: [ //这里使用的是数组
            { text: '我的第一篇文章', link: '/blog/my-first-post' },
            { text: '学习笔记', link: '/blog/study-notes' },
            // 在这里添加新的文章链接
            // link: 必须以 / 开头，并且对应实际的文件路径（不需要包含 .md 扩展名）
          ]
        }
      ],
      
      // 右上角导航
      nav: [
        { text: '首页', link: '/' },
        { text: '笔记', link: '/notes/' }
      ]
    }
  }