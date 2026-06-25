# 🌐 Astro 博客模板：轻量 · 高性能 · 自动化部署友好

```sh
npm create astro@latest -- --template blog
```

> 🧑‍🚀 **经验丰富的开发者？** 可直接删除本文件，开始你的创作之旅！

---

## ✨ 核心特性

- ✅ 极简设计风格（轻松定制属于你的视觉风格）
- ✅ Lighthouse 性能评分 100/100
- ✅ SEO 友好：规范 URL、OpenGraph 元数据
- ✅ 完整支持 Markdown 与 MDX 内容
- ✅ 为 CI/CD 流程优化，无缝集成自动化部署
- ✅ giscus框架的评论功能
- ✅ 上下篇翻页功能
- ✅ 亮色和暗色功能
- ✅ 最近文章列表自动获取功能
- ✅ 中英文切换功能

---

## 📂 项目结构

```text
|.github/worksflows/deploy.yml
├── public/          # 静态资源（图片、favicon 等）
├── src/
│   ├── components/  # 可复用组件（Astro/React/Vue/Svelte/Preact）
│   ├── content/     # 内容集合（博客文章等，支持类型校验）
│   ├── layouts/     # 页面布局模板
│   └── pages/       # 路由页面（.astro / .md 文件自动生成路由）
├── astro.config.mjs # Astro 配置文件
├── package.json
├── tsconfig.json
└── README.md
```

📌 说明：
- `src/pages/` 中的 `.astro` 或 `.md` 文件将自动映射为网站路由
- `src/content/blog/` 存放博客文章，通过 `getCollection('blog')` 读取，支持 frontmatter 类型校验（[内容集合文档](https://docs.astro.build/en/guides/content-collections/)）
- `public/` 目录存放需直接访问的静态资源（如 `robots.txt`、图标等）

## ⚙️ 常用命令

所有命令均在项目根目录执行：

| 命令                      | 说明                             |
|--------------------------|----------------------------------|
| `npm install`            | 安装依赖                         |
| `npm run dev`            | 启动本地开发服务器（http://localhost:4321） |
| `npm run build`          | 构建生产版本至 `./dist/` 目录    |
| `npm run preview`        | 本地预览构建结果                 |
| `npm run astro add`      | 添加集成（如 Tailwind、React）   |
| `npm run astro check`    | 类型与内容校验                   |
| `npm run astro --help`   | 查看 Astro CLI 帮助              |

---

## 🌱 延伸学习

- 📚 [官方文档](https://docs.astro.build)
- 💬 [Discord 社区](https://astro.build/chat)
- 🧪 [内容集合指南](https://docs.astro.build/en/guides/content-collections/)

---

## 🙏 致谢

本模板设计灵感源自优雅简洁的 [Bear Blog](https://github.com/HermanMartinus/bearblog/)，特此致谢!

---

## 声明

- 这个模版只是在astro官方博客模版基础上加了少量内容，比如实现数学公式的渲染支持，浏览量显示，自动部署到github.io网站等，可以先下载代码然后安装环境运行，支持更新代码到仓库后自动部署（.github/worksflows/deploy.yml）。
- 注意在astro.config.mjs中将个人网站地址替换为如下形式：
site: 'https://xxxx.github.io',
