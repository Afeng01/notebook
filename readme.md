# 筱筱的笔记本

这是一个使用 VitePress 构建的个人知识库网站，可以直接展示 Obsidian 笔记内容。

## 目录结构

```
notebook/                          # 项目根目录
├── note/                         # VitePress 项目目录
│   ├── .vitepress/              # VitePress 配置目录
│   │   └── config.mjs           # 主配置文件
│   ├── content/                 # 笔记内容 (Junction Point)
│   └── index.md                # 网站首页
└── README.md                    # 项目说明

public/                          # Obsidian 公开目录
├── categories/                  # 分类目录
│   ├── tech/                   # 技术笔记
│   │   ├── index.md           # 分类索引
│   │   └── *.md               # 技术笔记文件
│   └── life/                   # 生活随笔
│       ├── index.md           # 分类索引
│       └── *.md               # 生活笔记文件
└── index.md                    # 笔记首页
```

## 配置说明

### 1. VitePress 配置 (note/.vitepress/config.mjs)

```javascript
export default defineConfig({
  title: "筱筱的笔记本",
  description: "个人知识库",
  
  // 允许访问外部文件
  vite: {
    server: {
      fs: {
        allow: ['..', 'D:/701 --- obsidian笔记存放/筱筱的/public']
      }
    }
  },
  
  themeConfig: {
    // 导航配置
    nav: [
      { text: '首页', link: '/' },
      { text: '技术笔记', link: '/content/categories/tech/' },
      { text: '生活随笔', link: '/content/categories/life/' },
      { text: '分类', link: '/content/categories/' }
    ],
    
    // 侧边栏配置
    sidebar: {
      '/content/categories/tech/': [
        {
          text: '技术笔记',
          collapsed: false,
          items: [
            { text: '第一篇笔记', link: '/content/categories/tech/01' }
          ]
        }
      ],
      '/content/categories/life/': [
        {
          text: '生活随笔',
          collapsed: false,
          items: [
            { text: '第一篇笔记', link: '/content/categories/life/first' }
          ]
        }
      ]
    }
  }
})
```

### 2. 文件命名规范

- 使用英文文件名，避免中文
- 分类目录使用有意义的英文名称（如 tech、life）
- 文章文件建议使用：
  * 日期前缀：`YYYY-MM-DD-title.md`
  * 或序号前缀：`01-title.md`
  * 或描述性名称：`getting-started.md`

### 3. 文章 Frontmatter

每篇文章都需要包含以下 frontmatter：

```yaml
---
title: 文章标题
date: YYYY-MM-DD
category: tech/life
tags:
  - tag1
  - tag2
description: 文章描述
---
```

## 使用说明

### 1. 目录链接设置

1. 在 note 目录下创建 content 目录链接：
```powershell
New-Item -ItemType Junction -Path "content" -Target "D:\701 --- obsidian笔记存放\筱筱的\public"
```

### 2. 开发命令

```bash
# 启动开发服务器
npm run note:dev

# 构建网站
npm run note:build

# 预览构建结果
npm run note:preview
```

### 3. 添加新文章

1. 在对应分类目录下创建 Markdown 文件
2. 添加必要的 frontmatter
3. 更新侧边栏配置（如需要）

## 注意事项

1. 文件路径
   - 所有链接都需要以 `/content/` 开头
   - 确保文件名与配置中的路径匹配

2. 图片处理
   - 推荐使用图床
   - 直接使用图床链接

3. 目录结构
   - 保持目录结构简洁
   - 避免过深的嵌套

4. 配置更新
   - 添加新文章后记得更新侧边栏配置
   - 保持导航链接的正确性

## 常见问题

1. 404 错误
   - 检查文件是否存在
   - 确认路径是否正确
   - 验证文件名大小写

2. 导航问题
   - 确保所有链接以 `/content/` 开头
   - 检查配置中的路径是否正确

3. 文件更新
   - Junction Point 确保实时同步
   - 修改后可能需要刷新页面

## 导航和侧边栏配置

### 1. 基础配置结构

VitePress 的导航和侧边栏配置位于 `note/.vitepress/config.mjs` 文件中的 `themeConfig` 部分：

```javascript
export default defineConfig({
  themeConfig: {
    nav: [...],      // 导航栏配置
    sidebar: [...],  // 侧边栏配置
    // 其他主题配置
  }
})
```

### 2. 导航栏配置

```javascript
nav: [
  { text: '首页', link: '/' },
  { text: '技术笔记', link: '/content/categories/tech/' },
  { text: '生活随笔', link: '/content/categories/life/' },
  { text: '分类', link: '/content/categories/' }
]
```

### 3. 全局侧边栏配置

```javascript
sidebar: [
  {
    text: '技术笔记',
    collapsed: false,  // 是否默认折叠
    items: [
      { text: '技术笔记首页', link: '/content/categories/tech/' },
      { text: '第一篇笔记', link: '/content/categories/tech/01' }
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
]
```

### 4. 其他主题配置

```javascript
themeConfig: {
  // 文档页脚配置
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
}
```

### 5. 配置说明

1. 导航栏特点：
   - 支持多级导航
   - 使用 `link` 属性指定链接
   - 所有内容页面链接都需要以 `/content/` 开头

2. 侧边栏特点：
   - 全局显示（除首页外）
   - 支持分组和嵌套
   - 可以设置折叠状态

3. 页面功能：
   - 上一页/下一页导航
   - 自动生成目录
   - 本地搜索功能
   - 中文界面

### 6. 注意事项

1. 链接路径：
   - 所有内容页面的链接都需要以 `/content/` 开头
   - 确保链接路径与实际文件路径匹配

2. 文件组织：
   - 在添加新文章时需要更新侧边栏配置
   - 建议使用有意义的文件名和清晰的目录结构

3. 配置更新：
   - 修改配置后会自动热更新
   - 如遇问题可以重启开发服务器

## 侧边栏层级结构说明

### 1. 基础结构示例

```javascript
sidebar: [
  // 第一级：顶级分类
  {
    text: '分类名称',
    items: [
      // 第二级：子分类或文章
      { 
        text: '子分类名称',
        items: [
          // 第三级：文章或更深层子分类
          { text: '文章标题', link: '/content/path/to/article' }
        ]
      }
    ]
  }
]
```

### 2. 添加新内容的位置

1. 添加顶级分类：
```javascript
sidebar: [
  // 在这里添加新的顶级分类
  {
    text: '新的顶级分类',
    items: []
  },
  // 现有的分类...
]
```

2. 添加子分类：
```javascript
{
  text: '现有顶级分类',
  items: [
    // 在这里添加新的子分类
    {
      text: '新的子分类',
      items: []
    },
    // 现有的子分类...
  ]
}
```

3. 添加文章：
```javascript
{
  text: '现有分类',
  items: [
    // 在这里添加新的文章
    { text: '新文章标题', link: '/content/path/to/new-article' },
    // 现有的文章...
  ]
}
```

### 3. 完整层级示例

```javascript
sidebar: [
  // 第一个顶级分类
  {
    text: '简要说明',
    items: [
      { text: '主页', link: '/content/' },
      { text: '介绍', link: '/content/intro' }
    ]
  },
  
  // 第二个顶级分类（带子分类）
  {
    text: '技术文档',
    items: [
      // 子分类
      {
        text: 'JavaScript',
        items: [
          // 文章
          { text: '基础教程', link: '/content/tech/js/basics' },
          { text: '进阶指南', link: '/content/tech/js/advanced' }
        ]
      },
      // 另一个子分类
      {
        text: 'Python',
        items: [
          { text: '入门指南', link: '/content/tech/python/getting-started' }
        ]
      }
    ]
  },
  
  // 第三个顶级分类（直接包含文章）
  {
    text: '生活随笔',
    items: [
      { text: '我的第一篇文章', link: '/content/life/first-post' },
      { text: '读书笔记', link: '/content/life/reading-notes' }
    ]
  }
]
```

### 4. 注意事项

1. 路径规范：
   - 所有文章链接都必须以 `/content/` 开头
   - 使用有意义的目录结构和文件名
   - 保持 URL 友好（避免使用特殊字符和空格）

2. 层级限制：
   - 建议最多使用三级层级
   - 过深的层级可能影响用户体验

3. 命名建议：
   - 分类名称简洁明了
   - 文章标题具有描述性
   - 保持命名风格一致

4. 维护建议：
   - 定期整理和更新侧边栏结构
   - 删除文章时同步更新侧边栏
   - 保持分类结构的清晰和合理

### 1. 文件系统配置

VitePress默认只能访问项目目录内的文件。由于我们的笔记实际存储在Obsidian仓库中，需要特殊的文件系统配置来允许访问外部文件。

#### 配置步骤：

1. 创建目录链接（Junction Point）：
```powershell
# 将VitePress的content目录链接到Obsidian的content目录
New-Item -ItemType Junction -Path "note/content" -Target "path/to/obsidian/content"
```

2. 配置VitePress允许访问外部文件：
```javascript
// note/.vitepress/config.mjs
export default defineConfig({
  // ... 其他配置 ...
  
  vite: {
    server: {
      fs: {
        strict: false,  // 允许访问项目目录之外的文件
        allow: [
          '..',  // 允许访问上级目录
          'D:/path/to/obsidian/content'  // 允许访问Obsidian仓库
        ]
      }
    }
  }
})
```

#### 配置说明：

- **strict: false**：关闭严格的文件系统访问限制
- **allow**：指定允许访问的目录列表
  - `'..'`：允许访问项目父级目录
  - 完整的Obsidian仓库路径：允许直接访问笔记文件

这个配置对于开发环境是必需的，它允许VitePress在本地开发时正确访问和加载Obsidian仓库中的笔记文件。在生产环境构建时，所有文件都会被复制到输出目录，因此不需要这个配置。

> 注意：请确保路径使用正斜杠(/)而不是反斜杠(\)，这样可以避免路径解析问题。