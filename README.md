<<<<<<< HEAD
Discourse Chinese Share
=======================

使用此插件请fork本项目，并修改 `assets/javascripts/share_links.js`文件中的`码农圈`为您的站点名字。

A Easy plugin to add Chinese share buttons in [Discourse](https://github.com/discourse/discourse).

We can add share buttons like Weibo, Wechat, Renren.

## 在 Docker 镜像上的安装方法

修改你的 `/var/discourse/containers/app.yml` 文件. 默认的 `app.yml` 有一个 `hooks` 属性，如下:

```ruby
hooks:
  after_code:
    - exec:
        cd: $home/plugins
        cmd:
          - mkdir -p plugins
          - git clone https://github.com/discourse/docker_manager.git
```
在那后面添加一行，注意空格对齐。
```
- git clone https://github.com/wuchong/discourse-chinese-share.git
```

重建 Discourse：`/var/discourse/launcher rebuild app`

进入管理员页面 -> 设置 -> 基本设置 -> 找到`share links`配置项，加入你想添加的分享按钮，如`weibo`,`wechat`,`renren`。

刷新页面，完成。
=======
chinese-share-links
===================

Chinese share links is a plugin for Discourse to add share links for Weibo & Renren.

为 Discourse 添加分享到微博和人人的支持。

## Installation / 安装

在 `app.yml` 的

    hooks:
      after_code:
        - exec:
            cd: $home/plugins
            cmd:
              - mkdir -p plugins
              - git clone https://github.com/discourse/docker_manager.git

最后一行 `- git clone https://github.com/discourse/docker_manager.git` 后添加：

    - git clone https://github.com/fantasticfears/chinese-share-links.git

## Usage / 使用

Go to Site Settings's basic category, add services in the share_links.

进入站点设置的基本设置分类，在share_links中添加服务。

## Changelog

Current version: 0.1.1

0.1.1: 增加了微信支持（弹出窗口）

<img src="https://meta.discourse.org/uploads/default/37011/5ca80fe8f9fbd487.png" width="390" height="197">
>>>>>>> 7deece8bb7b00b448e7bc829be957a1b437b349e
