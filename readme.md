网站基于 VitePress 构建。

# 目录

环境要求
快速开始
目录结构
配置说明
本地开发
部署说明

# 环境要求
Node.js 16.0 或以上版本
npm（Node.js 包管理器）

# 快速开始

## 安装依赖
npm install

## 启动开发服务器
npm run note:dev

## 构建静态文件
npm run note:build

# 目录结构
NOTEBOOK/
├── node_modules/          # 依赖包
├── note/                 # 文档根目录
│   ├── .vitepress/      # VitePress配置目录
│   │   └── config.js    # 主配置文件
│   ├── index.md         # 网站首页
│   └── ...              # 其他markdown文件
└── package.json         # 项目配置文件

# 配置说明

## 修改网站基本信息

编辑 note/.vitepress/config.js:

export default {
  // 网站标题
  title: "你的网站标题",
  
  // 网站描述
  description: "网站描述",
  
  // 主题配置
  themeConfig: {
    // 导航栏配置
    nav: [
      { text: '首页', link: '/' },
      { text: '笔记', link: '/notes/' }
    ],
    
    // 侧边栏配置
    sidebar: [
      {
        text: '分类一',
        items: [
          { text: '文章1', link: '/article1' },
          { text: '文章2', link: '/article2' }
        ]
      }
    ]
  }
}

## 添加新页面

1. 在 note 目录下创建新的 .md 文件
2. 在 config.js 的 sidebar 中添加对应链接

# 本地开发

## 启动开发服务器
npm run note:dev

访问 http://localhost:5173 预览网站

修改文件后会自动刷新

按 Ctrl + C 停止服务器

## 常见开发任务

1. 添加新页面：在 note 目录下创建新 .md 文件，在 config.js 中的 nav (可选) 和 sidebar 配置中添加链接
2. 修改页面内容：直接编辑对应的 .md 文件
3. 修改导航栏：编辑 config.js 中的 nav 配置
4. 修改侧边栏：编辑 config.js 中的 sidebar 配置

# 部署说明
## 构建静态文件
npm run note:build
- 生成的文件在 note/.vitepress/dist 目录

## 部署到GitHub Pages

1. 推送代码到 GitHub 仓库
2. 在仓库设置中启用 GitHub Pages
3. 选择部署分支和目录

# 常见问题解决

## 自动弹出
1. 如果遇到依赖问题，可以尝试删除 node_modules 目录并重新安装依赖
2. 如果遇到构建问题，可以检查 config.js 配置是否正确
3. 如果遇到部署问题，可以检查 GitHub Pages 设置是否正确

## 页面没有显示在导航中

检查 config.js 中的 sidebar 配置

确保文件路径正确

## 本地预览正常但部署后显示错误
1. 检查 base 配置是否正确
2. 确认部署分支和目录设置
3. 需要更详细的说明或遇到其他问题，请参考 VitePress 官方文档。

## 更多问题：请询问ChatGPT/Claude