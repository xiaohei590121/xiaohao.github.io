# 我的 AI 探索空間

這是一個專注於人工智慧、機器學習和相關技術的個人部落格。
本專案 Fork 自 [Hux Blog](https://github.com/Huxpro/huxpro.github.io) 並進行了修改以符合 AI 主題。

![](https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80) <!-- 建議替換成您網站的截圖 -->

[原專案使用者手冊 (英文) 👉](_doc/Manual.md)
--------------------------------------------------
以下啟動和開發指南主要基於原 Hux Blog 專案。

### 開始使用 (Getting Started)

1.  您需要 [Ruby](https://www.ruby-lang.org/en/) 和 [Bundler](https://bundler.io/) 來使用 [Jekyll](https://jekyllrb.com/)。請參考 [Using Jekyll with Bundler](https://jekyllrb.com/tutorials/using-jekyll-with-bundler/) 完成環境配置。

2.  安裝 `Gemfile` 中的依賴：

```sh
$ bundle install 
```

3.  啟動網站 (預設網址為 `localhost:4000`)：

```sh
$ bundle exec jekyll serve  # 或者使用 npm start (如果 package.json 中有設定)
```

### 開發 (Development)

若要修改主題，您可能需要 [Grunt](https://gruntjs.com/) (原專案使用)。`Gruntfile.js` 中包含了一些任務，例如最小化 JavaScript、編譯 `.less` 到 `.css` 等。

Jekyll 相關的核心程式碼位於 `_include/` 和 `_layouts/`。其中大部分是 [Liquid](https://github.com/Shopify/liquid/wiki) 模板。

此主題使用 Jekyll 的預設語法高亮工具 [Rouge](http://rouge.jneen.net/)。

### 想了解更多原專案的資訊？請查閱 [完整使用者手冊 (英文)](_doc/Manual.md)！


授權 (License)
---------------

Apache License 2.0.
Copyright (c) 2015-present Huxpro

本部落格主題衍生自 [Clean Blog Jekyll Theme (MIT License)](https://github.com/BlackrockDigital/startbootstrap-clean-blog-jekyll/)
Copyright (c) 2013-2016 Blackrock Digital LLC.

---

感謝原作者 Huxpro 的出色工作！
