export default {
    base: '/notebook/',
    title: "我的学习笔记",
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
        }
      ],
      
      // 右上角导航
      nav: [
        { text: '首页', link: '/' },
        { text: '笔记', link: '/notes/' }
      ]
    }
  }