# Blog Template with GEO Optimization

A production-ready Jekyll blog template with built-in AI Search Optimization (GEO) features. One codebase, infinite websites - just change the configuration files!

## 🚀 Quick Start (30 Minutes to Your New Website)

```bash
# 1. Fork or clone this repository
git clone https://github.com/your-org/blog-template.git my-new-blog
cd my-new-blog

# 2. Install dependencies
bundle install

# 3. Customize your website
# Edit files in _data/ directory (see Configuration Guide below)

# 4. Add your first blog post
cp _posts/2025-11-18-example-post.md _posts/2025-11-22-my-first-post.md
# Edit the post content

# 5. Preview locally
bundle exec jekyll serve
# Visit http://localhost:4000

# 6. Deploy
# Commit and push to GitHub Pages or your hosting platform
```

## ✨ Features

### Core Template System
- **Configuration-Driven**: All branding, contact info, and settings in YAML files
- **No Code Changes Required**: Customize entirely through `_data/*.yml` files
- **Multi-Website Support**: One template → unlimited websites

### GEO/SEO Optimization (Phase 1)
- ✅ **Breadcrumb Navigation** with Schema.org markup
- ✅ **Enhanced Article Schema** (BlogPosting with reading time, word count)
- ✅ **Author System** with Person/Organization Schema
- ✅ **Related Posts** recommendation (smart algorithm)

### Advanced SEO (Phase 2)
- ✅ **Image Alt Optimization** system
- ✅ **Internal Link Management**
- ✅ **Enhanced Analytics** (reading progress, outbound links, downloads)

### Technical Features
- Jekyll 4.0+ compatible
- Responsive design
- PWA support (offline mode, service worker)
- Fast page loads
- Structured data for AI search engines

## 📁 Configuration Files

All customizable settings are in the `_data/` directory:

```
_data/
├── site.yml          # Website basic info (brand, SEO, features)
├── authors.yml       # Author profiles
├── navigation.yml    # Header and footer menus
├── social.yml        # Social media links
├── breadcrumbs.yml   # Breadcrumb settings
├── internal_links.yml# Auto-linking keywords
└── series.yml        # Article series configuration
```

## 🎨 Customization Guide

### 1. Basic Site Information

Edit `_data/site.yml`:

```yaml
brand:
  name: "Your Blog Name"
  tagline: "Your Tagline"
  description: "Your description"
  logo: "/img/your-logo.png"

website:
  url: "https://yourblog.com"
  language: "en"

seo:
  title: "Your SEO Title"
  keywords: "your, keywords, here"

contact:
  email: "your@email.com"
```

### 2. Add Authors

Edit `_data/authors.yml`:

```yaml
john_doe:
  name: "John Doe"
  display_name: "John"
  type: "Person"
  bio: "Your bio here"
  avatar: "/img/authors/john.jpg"
  social:
    twitter: "johndoe"
    github: "johndoe"
    linkedin: "in/johndoe"
```

Use in posts:

```yaml
---
title: "My Post"
author: john_doe  # References the author ID
---
```

### 3. Configure Navigation

Edit `_data/navigation.yml`:

```yaml
header:
  - title: "Home"
    url: "/"
  - title: "Blog"
    url: "/blog/"
  - title: "About"
    url: "/about/"
```

### 4. Social Media Links

Edit `_data/social.yml`:

```yaml
platforms:
  twitter:
    enabled: true
    username: "your_twitter"
    url: "https://twitter.com/your_twitter"

  github:
    enabled: true
    username: "your-github"
    url: "https://github.com/your-github"
```

## 📝 Writing Blog Posts

### Basic Post Structure

Create a file in `_posts/` with the format: `YYYY-MM-DD-title.md`

```yaml
---
layout: post
title: "Your Post Title"
subtitle: "Optional subtitle"
date: 2025-11-22 10:00:00
author: john_doe
category: "SEO"
tags: ["AI", "Search", "GEO"]
header-img: "img/post-bg.jpg"
---

Your content here...
```

### Advanced Post Features

#### 1. Custom Reading Time

```yaml
---
title: "My Post"
reading_time: 10  # Override auto-calculated reading time
---
```

#### 2. Featured Images for Schema

```yaml
---
title: "My Post"
featured_images:
  - "/img/post-featured.jpg"
  - "/img/post-featured-16x9.jpg"
---
```

#### 3. Breadcrumb Customization

```yaml
---
title: "My Post"
breadcrumb_path:
  - label: "Resources"
    url: "/resources/"
  - label: "Guides"
    url: "/resources/guides/"
---
```

#### 4. Related Posts

```yaml
---
title: "My Post"
# Manual related posts
related_posts:
  - "/blog/post-1/"
  - "/blog/post-2/"

# Or use series
series: "geo_basics"
series_order: 2
---
```

#### 5. Image Configuration

```yaml
---
title: "My Post"
images:
  gallery:
    - id: "diagram1"
      src: "/img/diagram-1.jpg"
      alt: "SEO optimization workflow diagram"
      title: "Complete SEO Workflow"
      caption: "Our proven SEO process"
---

Use in post:
{% include image.html id="diagram1" %}
```

## 🔧 Advanced Configuration

### Enabling Features

Edit `_data/site.yml`:

```yaml
features:
  blog: true
  search: true
  comments: false
  newsletter: false
  rss: true
  sitemap: true
  analytics: true

reading:
  show_reading_time: true
  show_word_count: false
  words_per_minute: 200

related_posts:
  enabled: true
  limit: 3
  show_at_bottom: true
  same_category_weight: 10
  same_tag_weight: 5
```

### Series Configuration

Edit `_data/series.yml`:

```yaml
geo_basics:
  name: "GEO Fundamentals"
  description: "Complete guide to AI search optimization"
  posts:
    - slug: "what-is-geo"
      title: "What is GEO?"
    - slug: "geo-implementation"
      title: "Implementing GEO"
```

### Internal Links

Edit `_data/internal_links.yml`:

```yaml
enabled: true  # Turn on auto-linking

keywords:
  "AI Search":
    url: "/guides/ai-search/"
    title: "Learn about AI Search"
    limit: 1  # Link only first occurrence
```

## 📊 Analytics Setup

The template includes enhanced analytics tracking:

- ✅ Reading progress (25%, 50%, 75%, 100%)
- ✅ Outbound link clicks
- ✅ File downloads
- ✅ Social shares
- ✅ Time on page
- ✅ CTA clicks

Just add your Google Analytics ID in `_config.yml`:

```yaml
ga_track_id: "G-XXXXXXXXXX"
ga_domain: "yourblog.com"
```

## 🧪 Testing Your Site

### Local Testing

```bash
# Start local server
bundle exec jekyll serve

# Visit http://localhost:4000
```

### Schema Validation

1. Start local server
2. Use ngrok to expose: `ngrok http 4000`
3. Test with:
   - [Google Rich Results Test](https://search.google.com/test/rich-results)
   - [Schema.org Validator](https://validator.schema.org/)

### SEO Validation

- [Meta Tags Checker](https://metatags.io/)
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)

## 🚢 Deployment

### GitHub Pages

```bash
git add .
git commit -m "Initial setup"
git push origin main
```

Enable GitHub Pages in repository settings → Pages → Source: main branch

### Custom Hosting

```bash
# Build the site
bundle exec jekyll build

# Deploy _site/ directory to your hosting
```

## 📚 Examples

### Creating a New Blog in 5 Minutes

```bash
# 1. Clone template
git clone template.git corporate-blog

# 2. Edit _data/site.yml
brand:
  name: "Corporate Blog"
  tagline: "Industry Insights"

# 3. Edit _data/authors.yml (add your team)
# 4. Edit _data/social.yml (your social links)
# 5. Add first post
# 6. Done!
```

### Multi-Language Support

Create separate configuration profiles:

```yaml
# _data/site-en.yml (English)
# _data/site-zh.yml (Chinese)
```

## 🐛 Troubleshooting

### Breadcrumbs not showing?

Check `_data/breadcrumbs.yml`:
```yaml
enabled: true
```

### Related posts not working?

Ensure in `_data/site.yml`:
```yaml
related_posts:
  enabled: true
```

### Analytics not tracking?

1. Check `ga_track_id` in `_config.yml`
2. Open browser console, look for analytics.js logs
3. Verify gtag is loaded

## 📖 Documentation

- [Complete Project Plan](TEMPLATE_PROJECT_PLAN.md)
- [Schema Implementation Guide](docs/schema-guide.md)
- [Configuration Reference](docs/configuration.md)

## 🤝 Contributing

Contributions welcome! Please:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

MIT License - feel free to use for commercial or personal projects.

## 💬 Support

- GitHub Issues: [Report bugs or request features](https://github.com/your-org/template/issues)
- Documentation: See `docs/` directory
- Examples: See `examples/` directory

---

**Built with ❤️ for the AI Search era**

Transform your blog into an AI-discoverable powerhouse in 30 minutes!
