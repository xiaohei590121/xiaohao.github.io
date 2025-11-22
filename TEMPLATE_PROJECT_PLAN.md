# 网站模板系统项目计划

## 📋 项目概述

**目标：** 将 recomby-ai.github.io 改造成通用的 GEO 优化博客模板系统

**核心价值：**
- 一套代码 → 多个网站
- 配置文件驱动，无需修改代码
- 内置完整的 GEO/SEO 优化功能

---

## 🎯 完整需求说明

### 核心需求 1: 模板化系统

#### 1.1 配置文件驱动
- 所有品牌信息、公司介绍、联系方式等从配置文件读取
- 支持通过修改配置文件快速定制新网站
- 配置文件使用 YAML 格式，易于编辑

#### 1.2 内容与代码分离
- HTML/CSS/JS 模板保持不变
- 可变内容全部从 `_data/*.yml` 读取
- 支持多语言扩展（预留）

#### 1.3 快速复用流程
```
Fork 模板仓库
    ↓
编辑 _data/*.yml 配置文件
    ↓
添加 _posts/*.md 博客文章
    ↓
运行构建
    ↓
新网站完成 ✅
```

---

### 核心需求 2: Phase 1 - GEO 基础功能

#### 2.1 面包屑导航 + Schema
**功能描述：**
- 自动生成面包屑导航
- 支持手动配置覆盖
- 自动添加 BreadcrumbList Schema
- 响应式设计，移动端友好

**配置方式：**
```yaml
# _data/breadcrumbs.yml
enabled: true
home_label: "Home"
separator: "›"
show_current: true
```

**文章配置：**
```yaml
---
# 自动模式（根据 URL 生成）
breadcrumb_auto: true

# 手动模式（自定义路径）
breadcrumb_path:
  - label: "Blog"
    url: "/blog/"
  - label: "SEO Tips"
    url: "/category/seo/"
---
```

**技术实现：**
- 创建 `_includes/breadcrumbs.html`
- 在 `_includes/schema-org.html` 添加 BreadcrumbList
- 集成到 post 和 page 布局

---

#### 2.2 增强的文章 Schema

**功能描述：**
- 自动计算文章字数
- 自动计算阅读时间
- 增强 BlogPosting Schema
- 支持多图片格式

**新增 Schema 字段：**
```json
{
  "@type": "BlogPosting",
  "wordCount": 1500,
  "timeRequired": "PT8M",
  "articleBody": "文章摘要...",
  "image": [
    "https://xxx.blog/img/post-1x1.jpg",
    "https://xxx.blog/img/post-16x9.jpg",
    "https://xxx.blog/img/post-4x3.jpg"
  ]
}
```

**配置方式：**
```yaml
# _config.yml
reading_speed: 200  # 每分钟字数（中文）
reading_speed_en: 250  # 每分钟字数（英文）

# 文章 front matter
---
reading_time: 8  # 手动设置（可选）
featured_images:
  - "/img/post-1.jpg"
  - "/img/post-2.jpg"
---
```

**技术实现：**
- 创建 Jekyll filter `word_count`
- 创建 Jekyll filter `reading_time`
- 更新 `_includes/schema-org.html`
- 在文章页显示阅读时间

---

#### 2.3 作者 Schema 和作者系统

**功能描述：**
- 支持多作者管理
- 每个作者独立配置
- Person Schema 标记
- 作者信息卡片显示

**配置方式：**
```yaml
# _data/authors.yml
john:
  name: "John Doe"
  display_name: "John Doe"
  bio: "SEO专家，专注于AI搜索优化"
  avatar: "/img/authors/john.jpg"
  email: "john@example.com"
  job_title: "Senior SEO Specialist"
  company: "Recomby.ai"
  website: "https://johndoe.com"
  social:
    twitter: "john"
    linkedin: "in/john"
    github: "john"

maria:
  name: "Maria Chen"
  display_name: "Maria"
  bio: "内容营销专家"
  avatar: "/img/authors/maria.jpg"
  # ... 其他配置
```

**文章使用：**
```yaml
---
title: "文章标题"
author: john  # 引用 authors.yml 中的 key
---
```

**技术实现：**
- 创建 `_data/authors.yml`
- 创建 `_includes/author-card.html`
- 更新 `_includes/schema-org.html` 添加 Person Schema
- 在文章页显示作者信息

---

#### 2.4 相关文章推荐系统

**功能描述：**
- 智能推荐相关文章
- 支持手动指定
- 多种推荐策略
- 可配置显示数量和位置

**推荐策略（按优先级）：**
1. 手动指定 (related_posts)
2. 同系列文章 (series)
3. 相同分类 (category)
4. 相同标签 (tags，权重计算)
5. 最新文章 (fallback)

**配置方式：**
```yaml
# _config.yml
related_posts:
  enabled: true
  limit: 3
  show_in_sidebar: true
  show_at_bottom: true
  same_category_weight: 10
  same_tag_weight: 5

# 文章 front matter
---
# 手动指定（优先级最高）
related_posts:
  - "/blog/post-1/"
  - "/blog/post-2/"

# 或使用系列
series: "geo_basics"
series_order: 2
---
```

**系列文章配置：**
```yaml
# _data/series.yml
geo_basics:
  name: "GEO入门系列"
  description: "从零开始学习GEO优化"
  posts:
    - slug: "geo-intro"
      title: "什么是GEO"
    - slug: "geo-schema"
      title: "Schema标记详解"
    - slug: "geo-content"
      title: "内容优化策略"
```

**技术实现：**
- 创建 `_includes/related-posts.html`
- 创建 Jekyll plugin `related_posts.rb`（如需要）
- 在文章底部和侧边栏显示

---

### 核心需求 3: Phase 2 - SEO 优化功能

#### 3.1 图片 Alt 优化系统

**功能描述：**
- 统一管理文章图片
- 自动添加 alt、title 属性
- 支持图片描述和说明
- 响应式图片加载

**配置方式：**
```yaml
# 文章 front matter
---
images:
  header:
    src: "/img/ai-search-header.jpg"
    alt: "AI search engine analyzing website content"
    title: "AI搜索引擎工作原理"
    caption: "图：AI搜索引擎如何理解内容"

  gallery:
    - id: "diagram1"
      src: "/img/diagram-1.jpg"
      alt: "Step-by-step AI optimization process diagram"
      title: "优化流程图"
      caption: "完整的优化流程"

    - id: "screenshot1"
      src: "/img/screenshot-1.jpg"
      alt: "Google Search Console traffic increase screenshot"
      title: "流量增长数据"
---
```

**Markdown 中使用：**
```liquid
<!-- 传统方式 -->
![Alt text](/img/example.jpg)

<!-- 新方式（自动读取配置） -->
{% include image.html id="diagram1" %}
```

**技术实现：**
- 创建 `_includes/image.html`
- 支持懒加载（loading="lazy"）
- 自动生成 figure + figcaption
- 验证所有图片都有 alt

---

#### 3.2 内部链接优化

**功能描述：**
- 关键词自动链接
- 相关文章链接
- 系列导航
- 链接追踪

**配置方式：**
```yaml
# _data/internal_links.yml
# 关键词自动链接规则
keywords:
  "AI Search Optimization":
    url: "/guide/ai-search/"
    title: "完整的AI搜索优化指南"

  "llms.txt":
    url: "/blog/llms-txt-guide/"
    title: "llms.txt 标准详解"

  "Schema.org":
    url: "/blog/schema-introduction/"
    title: "Schema.org 入门"

# 文章配置
---
auto_link_keywords: true  # 启用自动链接
exclude_keywords: ["某个不想自动链接的词"]
---
```

**技术实现：**
- 创建 Jekyll filter `auto_link`
- 创建 `_includes/series-navigation.html`
- 只对第一次出现的关键词添加链接
- 不在代码块、标题中添加链接

---

#### 3.3 GA 事件追踪增强

**功能描述：**
- 阅读进度追踪
- 外链点击追踪
- Newsletter 订阅追踪
- 资源下载追踪
- 社交分享追踪

**配置方式：**
```yaml
# _config.yml
analytics:
  google_analytics:
    enabled: true
    tracking_id: "G-XXXXXXXXXX"

    # 事件追踪配置
    events:
      reading_progress:
        enabled: true
        milestones: [25, 50, 75, 100]

      outbound_links:
        enabled: true
        domains: ["example.com", "partner.com"]

      downloads:
        enabled: true
        extensions: [".pdf", ".zip", ".docx"]

      social_shares:
        enabled: true
        platforms: ["twitter", "linkedin", "facebook"]
```

**技术实现：**
- 创建 `js/analytics.js`
- 追踪阅读进度（滚动百分比）
- 追踪外链点击
- 追踪转化事件（订阅、下载等）
- 创建事件文档

---

## 🗂️ 配置文件结构

```
_data/
├── site.yml              # 网站基本信息
├── authors.yml           # 作者信息库
├── navigation.yml        # 导航菜单配置
├── breadcrumbs.yml       # 面包屑配置
├── internal_links.yml    # 内部链接规则
├── series.yml            # 系列文章配置
├── analytics.yml         # 分析工具配置（可选，也可在 _config.yml）
└── social.yml            # 社交媒体配置
```

### 配置文件详细说明

#### `_data/site.yml`
```yaml
# 品牌信息
brand:
  name: "Recomby.ai"
  tagline: "AI Search Optimization & Agent API Infrastructure"
  description: "Making you the best match in AI's eyes"
  logo: "/img/logo.png"
  favicon: "/img/favicon.ico"

# 网站信息
url: "https://blog.recomby.ai"
baseurl: ""
language: "en"
timezone: "Asia/Shanghai"

# SEO
seo:
  title: "Recomby.ai | AI Search Optimization Blog"
  keywords: "AI Search, GEO, AIO, Agent API, llms.txt"
  og_image: "/img/og-image.jpg"

# 联系方式
contact:
  email: "contact@recomby.ai"
  phone: ""
  address: ""

# 公司信息（用于 Schema）
company:
  legal_name: "Recomby.ai"
  type: "Organization"  # 或 "Person"
  founded: "2024"
  website: "https://recomby.ai"
```

#### `_data/navigation.yml`
```yaml
header:
  - title: "Home"
    url: "/"

  - title: "Blog"
    url: "/blog/"

  - title: "About"
    url: "/about/"

  - title: "Contact"
    url: "/contact/"

footer:
  - title: "Privacy"
    url: "/privacy/"

  - title: "Terms"
    url: "/terms/"
```

#### `_data/social.yml`
```yaml
platforms:
  twitter:
    enabled: true
    username: "recomby_ai"
    url: "https://twitter.com/recomby_ai"

  github:
    enabled: true
    username: "recomby-ai"
    url: "https://github.com/recomby-ai"

  linkedin:
    enabled: false
    url: ""

  facebook:
    enabled: false
    url: ""
```

---

## 🧪 完整测试方案

### 测试阶段 1: 本地开发测试

#### 1.1 环境搭建
```bash
# 安装依赖
bundle install

# 启动本地服务器
bundle exec jekyll serve

# 或使用 npm
npm start

# 访问
http://localhost:4000
```

#### 1.2 功能测试清单

**配置文件测试：**
- [ ] 修改 `_data/site.yml` 中的品牌名称，验证网站标题更新
- [ ] 修改 `_data/authors.yml`，创建新作者，验证作者信息显示
- [ ] 修改 `_data/navigation.yml`，验证导航菜单更新
- [ ] 修改社交媒体链接，验证页脚和分享按钮更新

**Phase 1 功能测试：**
- [ ] **面包屑导航**
  - 访问文章页，检查面包屑是否显示
  - 点击面包屑链接，验证导航正确
  - 检查移动端显示

- [ ] **文章 Schema**
  - 查看页面源代码，检查 JSON-LD
  - 验证阅读时间显示正确
  - 验证字数统计准确

- [ ] **作者系统**
  - 创建测试文章，指定不同作者
  - 验证作者卡片显示
  - 检查作者头像和社交链接

- [ ] **相关文章**
  - 验证相关文章推荐逻辑
  - 测试手动指定相关文章
  - 测试系列文章导航

**Phase 2 功能测试：**
- [ ] **图片 Alt**
  - 使用新的图片配置方式
  - 验证 alt、title 属性生成
  - 检查响应式加载

- [ ] **内部链接**
  - 验证关键词自动链接
  - 检查链接目标正确
  - 确认不重复链接

- [ ] **GA 追踪**
  - 滚动页面，检查控制台事件
  - 点击外链，验证追踪
  - 测试订阅表单追踪

---

### 测试阶段 2: Schema 验证

#### 2.1 Google Rich Results Test
**工具：** https://search.google.com/test/rich-results

**测试步骤：**
1. 启动本地服务器：`bundle exec jekyll serve`
2. 使用 ngrok 暴露本地地址：`ngrok http 4000`
3. 复制 ngrok URL（如 https://abc123.ngrok.io）
4. 在 Rich Results Test 中输入 URL
5. 验证所有 Schema 通过

**验证项目：**
- [ ] BreadcrumbList Schema 无错误
- [ ] BlogPosting Schema 无错误
- [ ] Person/Organization Schema 无错误
- [ ] WebSite Schema 无错误
- [ ] 所有必需字段都存在

#### 2.2 Schema.org Validator
**工具：** https://validator.schema.org/

**测试步骤：**
1. 复制页面 HTML 源代码
2. 粘贴到 validator
3. 检查错误和警告

---

### 测试阶段 3: SEO 工具验证

#### 3.1 Meta Tags 检查
**工具：** https://metatags.io/

**验证项目：**
- [ ] Open Graph 标签正确
- [ ] Twitter Card 正确
- [ ] 图片预览显示正常
- [ ] 描述文字无截断

#### 3.2 移动端友好性
**工具：** https://search.google.com/test/mobile-friendly

**验证项目：**
- [ ] 页面适配移动端
- [ ] 文字大小合适
- [ ] 点击目标足够大
- [ ] 内容宽度正确

#### 3.3 页面速度测试
**工具：**
- PageSpeed Insights: https://pagespeed.web.dev/
- GTmetrix: https://gtmetrix.com/

**验证项目：**
- [ ] LCP < 2.5s
- [ ] FID < 100ms
- [ ] CLS < 0.1
- [ ] 图片懒加载生效
- [ ] 资源压缩正常

---

### 测试阶段 4: 可访问性测试

#### 4.1 WAVE 测试
**工具：** https://wave.webaim.org/

**验证项目：**
- [ ] 所有图片有 alt 属性
- [ ] 标题层级正确（h1-h6）
- [ ] 链接文字有意义
- [ ] 颜色对比度足够
- [ ] 表单有 label

#### 4.2 键盘导航测试
**手动测试：**
- [ ] 使用 Tab 键可以导航所有链接
- [ ] 焦点顺序合理
- [ ] 跳过导航链接可用
- [ ] 下拉菜单可键盘操作

---

### 测试阶段 5: 跨浏览器测试

**测试浏览器：**
- [ ] Chrome (最新版)
- [ ] Firefox (最新版)
- [ ] Safari (最新版)
- [ ] Edge (最新版)
- [ ] 移动端 Safari (iOS)
- [ ] 移动端 Chrome (Android)

**测试项目：**
- [ ] 布局显示正常
- [ ] 交互功能正常
- [ ] 控制台无错误
- [ ] 性能可接受

---

### 测试阶段 6: Analytics 验证

#### 6.1 Google Analytics 实时测试
**步骤：**
1. 配置 GA4 测试属性
2. 访问网站页面
3. 打开 GA4 实时报告
4. 验证事件触发

**验证事件：**
- [ ] page_view
- [ ] scroll (25%, 50%, 75%, 100%)
- [ ] click (外链)
- [ ] conversion (订阅、下载等)

#### 6.2 浏览器控制台验证
```javascript
// 打开浏览器控制台
// 检查 GA 事件
window.dataLayer  // 查看数据层
```

---

### 测试阶段 7: 内容验证

#### 7.1 拼写和语法检查
**工具：**
- Grammarly
- LanguageTool
- 浏览器拼写检查

#### 7.2 链接检查
**工具：**
```bash
# 使用 HTML Proofer
gem install html-proofer
bundle exec jekyll build
htmlproofer ./_site --disable-external
```

**验证：**
- [ ] 无死链
- [ ] 内部链接正确
- [ ] 图片路径正确

#### 7.3 RSS Feed 验证
**工具：** https://validator.w3.org/feed/

**验证：**
- [ ] feed.xml 格式正确
- [ ] 所有文章包含在内
- [ ] 链接可访问

---

## 📝 测试工具速查表

| 测试类型 | 工具 | URL | 用途 |
|---------|------|-----|------|
| Schema 验证 | Rich Results Test | https://search.google.com/test/rich-results | 验证结构化数据 |
| Schema 验证 | Schema Validator | https://validator.schema.org/ | 深度 Schema 检查 |
| Meta 标签 | Meta Tags | https://metatags.io/ | 社交分享预览 |
| SEO 分析 | Lighthouse | Chrome DevTools | 综合 SEO 评分 |
| 移动友好 | Mobile-Friendly Test | https://search.google.com/test/mobile-friendly | 移动适配检查 |
| 速度测试 | PageSpeed Insights | https://pagespeed.web.dev/ | 性能评分 |
| 可访问性 | WAVE | https://wave.webaim.org/ | 无障碍检查 |
| 链接检查 | HTML Proofer | gem install html-proofer | 死链检测 |
| RSS 验证 | W3C Feed Validator | https://validator.w3.org/feed/ | Feed 格式检查 |
| 本地隧道 | ngrok | https://ngrok.com/ | 本地调试 |

---

## 🚀 实施计划

### Sprint 0: 准备工作（1天）
- [x] 需求文档编写
- [ ] 测试计划制定
- [ ] 创建开发分支
- [ ] 备份现有代码

### Sprint 1: 模板系统基础（2-3天）
- [ ] 创建 `_data/` 目录结构
- [ ] 提取硬编码内容到配置文件
- [ ] 更新所有模板引用配置
- [ ] 本地测试配置切换

**交付物：**
- `_data/site.yml`
- `_data/authors.yml`
- `_data/navigation.yml`
- `_data/social.yml`
- 更新后的模板文件

**验收标准：**
- [ ] 修改配置文件后网站内容更新
- [ ] 无硬编码品牌信息残留
- [ ] 配置文件有详细注释

---

### Sprint 2: Phase 1 实施（3-4天）

**Day 1: 面包屑导航**
- [ ] 创建 `_includes/breadcrumbs.html`
- [ ] 创建 `_data/breadcrumbs.yml`
- [ ] 添加 BreadcrumbList Schema
- [ ] 集成到布局文件
- [ ] 测试和验证

**Day 2: 文章 Schema 增强**
- [ ] 创建字数统计 filter
- [ ] 创建阅读时间 filter
- [ ] 更新 `_includes/schema-org.html`
- [ ] 在文章页显示阅读时间
- [ ] 测试和验证

**Day 3: 作者系统**
- [ ] 完善 `_data/authors.yml`
- [ ] 创建 `_includes/author-card.html`
- [ ] 添加 Person Schema
- [ ] 集成到文章页
- [ ] 测试和验证

**Day 4: 相关文章推荐**
- [ ] 创建 `_data/series.yml`
- [ ] 创建 `_includes/related-posts.html`
- [ ] 实现推荐算法
- [ ] 集成到文章底部和侧边栏
- [ ] 测试和验证

**交付物：**
- 完整的 Phase 1 功能
- 测试用例文档
- Schema 验证报告

**验收标准：**
- [ ] Rich Results Test 全部通过
- [ ] 所有功能本地测试通过
- [ ] 移动端显示正常

---

### Sprint 3: Phase 2 实施（3-4天）

**Day 1-2: 图片 Alt 系统**
- [ ] 创建 `_includes/image.html`
- [ ] 支持图片配置
- [ ] 实现懒加载
- [ ] 创建使用示例
- [ ] 测试和验证

**Day 3: 内部链接优化**
- [ ] 创建 `_data/internal_links.yml`
- [ ] 创建自动链接 filter
- [ ] 创建系列导航组件
- [ ] 测试和验证

**Day 4: GA 事件追踪**
- [ ] 创建 `js/analytics.js`
- [ ] 实现阅读进度追踪
- [ ] 实现外链追踪
- [ ] 实现转化追踪
- [ ] 测试和验证

**交付物：**
- 完整的 Phase 2 功能
- Analytics 事件文档
- 性能测试报告

**验收标准：**
- [ ] 所有图片有 alt 属性
- [ ] WAVE 测试无错误
- [ ] GA 事件正常触发
- [ ] 性能评分 > 90

---

### Sprint 4: 文档和收尾（2天）

**Day 1: 使用文档**
- [ ] 编写 README.md
- [ ] 编写配置指南
- [ ] 创建配置示例
- [ ] 创建 FAQ

**Day 2: 最终测试**
- [ ] 完整功能回归测试
- [ ] 跨浏览器测试
- [ ] 性能优化
- [ ] 创建演示网站

**交付物：**
- 完整的使用文档
- 配置文件模板
- 测试检查清单
- 演示网站

---

## 📊 验收标准总览

### 功能完整性
- [ ] 所有 Phase 1 功能实现
- [ ] 所有 Phase 2 功能实现
- [ ] 配置文件系统完整
- [ ] 文档齐全

### 质量标准
- [ ] Rich Results Test: 100% 通过
- [ ] Lighthouse SEO: > 95
- [ ] Lighthouse Performance: > 90
- [ ] Lighthouse Accessibility: > 95
- [ ] WAVE 错误: 0
- [ ] 死链: 0

### 可用性标准
- [ ] 配置文件易于理解
- [ ] 有完整的使用示例
- [ ] 有详细的注释
- [ ] 支持快速复制新网站

---

## 🎓 使用示例：创建新网站

```bash
# 1. Fork 模板仓库
git clone https://github.com/your-org/blog-template.git xxx-blog
cd xxx-blog

# 2. 修改配置文件
# 编辑 _data/site.yml
brand:
  name: "XXX Blog"
  tagline: "Your New Tagline"
  # ...

# 编辑 _data/authors.yml
# 编辑 _data/social.yml
# ...

# 3. 添加文章
cp _posts/2024-01-01-example.md _posts/2024-11-22-your-first-post.md
# 编辑文章内容

# 4. 本地预览
bundle exec jekyll serve

# 5. 部署
git add .
git commit -m "Initial setup for XXX Blog"
git push origin main
```

**预计时间：** 30 分钟搞定新网站！

---

## 📞 项目联系人

- 开发者: Claude
- 项目所有者: [Your Name]
- 开始日期: 2024-11-22

---

## 📄 附录

### A. 配置文件完整示例
见 `docs/config-examples/` 目录

### B. Schema 模板
见 `docs/schema-templates/` 目录

### C. 测试用例清单
见 `docs/test-cases.md`

### D. 故障排查指南
见 `docs/troubleshooting.md`

---

**版本：** 1.0
**最后更新：** 2024-11-22
