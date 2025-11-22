# GEO-Optimized Blog Template

A clean, production-ready Jekyll blog template optimized for **AI Search Engines (GEO/AIO)** and generative AI discovery.

## Why This Template?

This template is built for the future of search:
- **Schema.org structured data** for AI understanding
- **llms.txt** for AI crawler discovery
- **robots.txt** optimized for AI bots (GPT, Claude, Perplexity, etc.)
- **Dynamic sitemap** that auto-updates with new posts
- **Open Graph** and **Twitter Card** for social sharing
- **PWA-ready** with service worker caching

## Quick Start

### 1. Configure Your Site

Edit **`_config.yml`** with your information:

```yaml
# Site Information
title: Your Blog Title
SEOTitle: Your SEO Title
description: "Your description"
keyword: "your, keywords, here"
url: "https://yourdomain.com"
email: your@email.com

# Social Media
github_username: your-github
twitter_username: your-twitter

# Sidebar
sidebar-about-description: "Your description"
sidebar-avatar: /img/your-avatar.jpg

# Analytics (optional)
ga_track_id: "UA-XXXXXXX-X"
ga_domain: yourdomain.com
```

### 2. Create Blog Posts

Add markdown files to **`_posts/`** folder with this format:

**Filename:** `YYYY-MM-DD-your-post-title.md`

**Frontmatter:**
```yaml
---
layout: post
title: "Your Post Title"
subtitle: "Your subtitle"
date: 2025-01-01 12:00:00
author: "Author Name"
header-img: "img/post-bg.jpg"
tags:
    - Tag1
    - Tag2
---

Your post content here...
```

### 3. (Optional) Add Schema.org Markup to Posts

You can add structured data to individual posts for better AI understanding:

#### FAQ Schema
```yaml
---
title: "Your Post"
schema_faq:
  - question: "What is GEO?"
    answer: "Generative Engine Optimization helps you rank in AI search results."
  - question: "How does it work?"
    answer: "By using structured data and AI-friendly markup."
---
```

#### HowTo Schema
```yaml
---
title: "How to Setup Your Blog"
schema_howto:
  name: "Setup Blog for GEO"
  description: "Step-by-step guide"
  steps:
    - name: "Step 1: Configure"
      text: "Edit _config.yml with your information"
    - name: "Step 2: Create Posts"
      text: "Add markdown files to _posts/"
---
```

#### Table Schema
```yaml
---
title: "Comparison Table"
schema_table:
  about: "Comparison of AI Search Engines"
  caption: "Feature comparison table"
---
```

## Key Files and Their Purposes

### Configuration
- **`_config.yml`** - Main site configuration (EDIT THIS!)
- **`sitemap.xml`** - Auto-generated sitemap (updates automatically)
- **`robots.txt`** - AI crawler permissions
- **`llms.txt`** - AI-readable site description

### Content
- **`_posts/`** - Your blog posts (ADD YOUR POSTS HERE!)
- **`about.html`** - About page
- **`index.html`** - Homepage
- **`archive.html`** - Blog archive page

### Templates
- **`_layouts/`** - Page layouts (post, page, default)
- **`_includes/`** - Reusable components
  - `schema-org.html` - Schema.org JSON-LD markup
  - `social-meta.html` - Open Graph & Twitter Card tags
  - `head.html` - HTML head section
  - `nav.html` - Navigation bar
  - `footer.html` - Footer

### Images
- **`img/logo.png`** - Your logo (replace with yours)
- **`img/og-image.jpg`** - Social sharing image (1200x630px recommended)
- **`img/favicon.ico`** - Browser favicon
- **`img/apple-touch-icon.png`** - iOS home screen icon
- **`img/*.jpg`** - Background images (customize as needed)

### Assets
- **`css/`** - Stylesheets
- **`js/`** - JavaScript files
- **`fonts/`** - Icon fonts
- **`pwa/`** - Progressive Web App configuration

## GEO Optimization Features

### 1. Schema.org Structured Data
- ✅ Organization schema (fixed company info)
- ✅ WebSite schema (blog info)
- ✅ BlogPosting schema (article metadata)
- ✅ Per-article custom schemas (FAQ, HowTo, Table)

### 2. AI Crawler Access
- ✅ `robots.txt` with explicit AI bot permissions
- ✅ `llms.txt` for AI discovery
- ✅ Dynamic sitemap with "always" changefreq
- ✅ No crawl delays

### 3. Social Sharing
- ✅ Open Graph meta tags (Facebook, LinkedIn, WhatsApp, etc.)
- ✅ Twitter Card (summary_large_image)
- ✅ Unified brand image across all platforms

### 4. Performance
- ✅ Service Worker caching (PWA)
- ✅ Compressed images
- ✅ Minified CSS/JS
- ✅ Offline support

## Usage as a Template

This is designed as a **reusable template**. To create a new blog:

1. Fork or clone this repository
2. Edit `_config.yml` with your site information
3. Replace images in `img/` folder with your branding
4. Delete example posts in `_posts/`
5. Start writing your own posts!

**That's it!** Everything else is pre-configured and optimized for GEO.

## File Structure Overview

```
.
├── _config.yml              # Main configuration (EDIT THIS)
├── _posts/                  # Your blog posts (ADD POSTS HERE)
├── _layouts/                # Page templates
├── _includes/               # Reusable components
│   ├── schema-org.html      # Structured data
│   ├── social-meta.html     # Social sharing tags
│   └── ...
├── img/                     # Images (REPLACE WITH YOURS)
│   ├── logo.png             # Your logo
│   ├── og-image.jpg         # Social sharing image
│   └── ...
├── sitemap.xml              # Auto-generated sitemap
├── robots.txt               # Crawler permissions
├── llms.txt                 # AI crawler description
└── index.html               # Homepage

```

## Technical Details

- **Static Site Generator:** Jekyll
- **Hosting:** GitHub Pages compatible
- **CSS Framework:** Bootstrap
- **Icons:** Glyphicons
- **SEO:** Schema.org, Open Graph, Twitter Cards
- **PWA:** Service Worker, Manifest

## Customization Tips

### Change Color Theme
Edit `css/hux-blog.css` or `css/hux-blog.min.css`

### Change Fonts
Edit `_includes/head.html` to add custom font links

### Add Custom Pages
Create new `.html` files in root with frontmatter:
```yaml
---
layout: page
title: "Page Title"
description: "Page description"
header-img: "img/bg.jpg"
---
```

### Modify Navigation
Edit `_includes/nav.html`

### Update Footer
Edit `_includes/footer.html`

## Support

This template is based on Hux Blog theme, cleaned up and optimized for GEO.

For issues or questions, please check the code comments or create an issue.

---

**Built for the AI-first future. Optimized for discovery, not just ranking.**
