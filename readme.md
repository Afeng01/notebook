# 个人笔记网站搭建指南

这是一个基于 VitePress 构建的个人笔记网站项目。无论你是想记录学习笔记、写博客，还是建立知识库，这个项目都能帮助你快速搭建一个美观的网站。

> 💡 即使你完全不懂编程，按照本指南的步骤操作也能轻松搭建属于自己的网站！

# 📚 目录

- [环境准备](#环境准备)
- [快速开始](#快速开始)
- [网站内容管理](#网站内容管理)
- [个性化设置](#个性化设置)
- [本地开发](#本地开发)
- [部署上线](#部署上线)
- [常见问题](#常见问题)

# 🔧 环境准备

## 必需软件

1. **Node.js** (16.0 或更高版本)
   - 访问 [Node.js 官网](https://nodejs.org/)
   - 下载并安装适合你系统的版本
   - 安装完成后，打开命令行输入 `node -v` 确认安装成功

2. **Visual Studio Code** (推荐的编辑器)
   - 访问 [VS Code 官网](https://code.visualstudio.com/)
   - 下载并安装
   - 建议安装以下扩展:
     - Markdown All in One
     - Vue Language Features
     - Volar

3. **Git** (用于版本控制和部署)
   - 访问 [Git 官网](https://git-scm.com/)
   - 下载并安装

# 🚀 快速开始

## 1. 获取项目

两种方式：

### 方式一：直接下载（推荐新手使用）
1. 点击本页面顶部的绿色 "Code" 按钮
2. 选择 "Download ZIP"
3. 解压下载的文件到你想要的位置

### 方式二：使用 Git 克隆
```bash
git clone [你的仓库地址]
cd [项目文件夹名]
```

## 2. 安装依赖

打开命令行（终端），进入项目目录：

```bash
# 安装项目所需的所有依赖
npm install
```

## 3. 启动项目

```bash
# 启动开发服务器
npm run note:dev
```

现在打开浏览器访问 http://localhost:5173 就能看到你的网站了！

# 📝 网站内容管理

## 文件结构说明

```
NOTEBOOK/
├── note/                 # 所有内容都在这个文件夹中
│   ├── index.md         # 网站首页
│   └── .vitepress/      # 配置文件夹
│       └── dist/        # 构建输出目录（已忽略）
│       └── config.js    # 主配置文件
├── .github/ # GitHub 配置目录
│   └── workflows/ # GitHub Actions 工作流
└── .gitignore # Git 忽略文件
```

## 添加新内容

### 1. 创建新文章

1. 在 `note` 文件夹中选择合适的位置（或创建新文件夹）
2. 创建新的 `.md` 文件，例如 `note/blog/my-first-post.md`
3. 在文件开头添加 Front Matter（文章信息）：

```markdown
---
title: 我的第一篇文章
date: 2024-01-01
description: 这是一篇示例文章
---

# 我的第一篇文章

这里是文章内容...
```

### 2. 添加到导航菜单

编辑 `note/.vitepress/config.js`：

```js
export default {
  themeConfig: {
    // 顶部导航栏
    nav: [
      { text: '首页', link: '/' },
      { text: '博客', link: '/blog/' },
      // 在这里添加新的导航项
    ],
    
    // 侧边栏
    sidebar: {
      '/blog/': [
        {
          text: '博客文章', //text可以是任何想要在侧边栏显示的文字
          items: [ //这里使用的是数组
            { text: '我的第一篇文章', link: '/blog/my-first-post' },
            { text: '学习笔记', link: '/blog/study-notes' },
            // 在这里添加新的文章链接
            // link: 必须以 / 开头，并且对应实际的文件路径（不需要包含 .md 扩展名）
          ]
        },
        {
          text: '生活随笔',
          items: [
           { text: '旅行日记', link: '/blog/life/travel-diary' },
           { text: '读书笔记', link: '/blog/life/reading-notes' },
           // 这里和上面一样
          ]
        }
      ]
    }
  }
}
```

## Markdown 写作指南

VitePress 支持所有标准的 Markdown 语法，以下是常用示例：

```markdown
# 一级标题
## 二级标题

- 无序列表项
- 另一个列表项

1. 有序列表
2. 第二项

*斜体文本* 或 _斜体文本_
**粗体文本** 或 __粗体文本__

[链接文本](链接地址)

![图片描述](图片地址)

> 引用文本

代码块：
```js
console.log('Hello World')
```

表格：
| 列1 | 列2 |
|-----|-----|
| 内容1 | 内容2 |
```

# ⚙️ 个性化设置

## 修改网站信息

编辑 `note/.vitepress/config.js`：

```js
export default {
  // 网站标题
  title: "你的网站标题",
  
  // 网站描述
  description: "网站描述",
  
  // 主题配置
  themeConfig: {
    // Logo设置
    logo: '/logo.png',
    
    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/你的用户名' }
    ],
    
    // 页脚信息
    footer: {
      message: '用 ❤️ 制作',
      copyright: 'Copyright © 2024-present 你的名字'
    }
  }
}
```

## 自定义主题

1. 创建 `note/.vitepress/theme/custom.css`：

```css
:root {
  --vp-c-brand: #646cff;
  --vp-c-brand-light: #747bff;
}
```

2. 在 `config.js` 中引入：

```js
import './theme/custom.css'
```

# 💻 本地开发

## 常用命令

```bash
# 启动开发服务器
npm run note:dev

# 构建网站
npm run note:build

# 预览构建结果
npm run note:preview
```

## 开发技巧

1. 保存文件后，网站会自动刷新
2. 使用 `Ctrl + C` 停止开发服务器
3. 遇到问题时，查看命令行输出的错误信息

# 🌐 部署说明

本项目使用 GitHub Actions 自动部署到 GitHub Pages。

## 部署配置

1. **GitHub Pages 设置**：
   - 在仓库设置中启用 GitHub Pages
   - 选择 `gh-pages` 分支作为部署源
   - 选择 `/ (root)` 作为部署目录

2. **工作流配置**：
   - 使用 `.github/workflows/deploy.yml` 定义部署流程
   - 自动在推送到 main 分支时触发部署
   - 构建后的文件会被推送到 gh-pages 分支

# ❓ 常见问题

## 1. 安装依赖失败
- 检查 Node.js 版本是否符合要求
- 尝试删除 `node_modules` 文件夹和 `package-lock.json`，然后重新运行 `npm install`
- 如果在中国大陆，可以使用淘宝镜像：
  ```bash
  npm config set registry https://registry.npmmirror.com
  ```

## 2. 页面没有显示在导航中
- 检查文件路径是否正确
- 确认 `config.js` 中的配置是否正确
- 文件名和路径是否包含特殊字符

## 3. 本地预览正常但部署后显示错误
- 检查 `base` 配置是否正确
- 确认部署分支和目录设置
- 查看 GitHub Actions 运行日志

## 4. 常见问题和解决方案

1. **dist 目录被 Git 跟踪问题**：
   - 问题：dist 目录不应该被 Git 跟踪
   - 解决：在 .gitignore 中添加 `note/.vitepress/dist/`
   - 如果已被跟踪，使用 `git rm -r --cached note/.vitepress/dist`

2. **部署权限问题**：
   - 问题：GitHub Actions 没有写入权限
   - 解决：在 deploy.yml 中添加 permissions 配置
   ```yaml
   permissions:
     contents: write
   ```

3. **分支选择问题**：
   - 问题：GitHub Pages 分支设置不正确
   - 解决：在 GitHub Pages 设置中选择 gh-pages 分支

# 🎯 最佳实践

1. 文件组织
   - 按主题或类别创建文件夹
   - 使用有意义的文件名
   - 保持目录结构清晰

2. 内容编写
   - 使用清晰的标题层级
   - 添加适当的描述和标签
   - 定期备份内容

3. 版本控制
   - 经常提交更改
   - 写清晰的提交信息
   - 在重大更改前创建分支

# 📞 获取帮助

如果遇到问题：
1. 查看本文档的常见问题部分
2. 搜索 GitHub Issues
3. 在 GitHub 上提新的 Issue
4. 通过 ChatGPT/Claude 获取帮助

---

> 🎉 恭喜你！现在你已经掌握了这个笔记网站的所有基础知识。开始创建属于你的内容吧！