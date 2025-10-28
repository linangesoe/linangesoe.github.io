---
title: Hexo 博客修改「笔记」-南盟笔记
date: 2024-07-21 09:39:02
categories: Hexo 
tags: 笔记
cover: http://nange666.test.upcdn.net/hexofm/wzfm0012.jpg
ai: 暂无介绍，自行阅读。
abbrlink: 22bb422d
main_color: '#D2B48C'
---
***
### 本地搜索系统

{% folding yellow, 本地搜索系统 %}

**介绍**
基于 Hexo 3.x 和 4.x 生成包含文章的所有必要数据,通过数据为博客编写本地搜索引擎,支持 XML 和 JSON 格式输出.

**安装插件**
``` bash
# 全局安装
sudo npm install hexo-generator-search --save
```

``` bash
# 运行清除缓存和生成新的文件代码
hexo cl && hexo g 
```
同时会生成在 public/sarch.xml 文件,此文件也就是相当于RSS一样,本地搜索引擎会搜索此文件的所有 sarch.xml 包含关键词的必要数据

**修改代码**
``` bash
# 修改配置主题的yml 文件如下
# Local search
local_search:
  enable: true
  preload: false
  CDN:
```

``` bash
# 修改 _config.yml 添加如下代码
search:
  path: search.xml
  field: post
  content: true
```

{% endfolding %}


***
### 一键三连本地预览或上传

{% folding yellow, 一键三连本地预览 %}

每次修改博客或代码,需要在本地预览一下,但每次都需输入一键三连的代码很长

那么可以把它简化,并一次性运行预览或上传~

```bash
# 配置 package.json 第10行
	"dev": "hexo cl && hexo g && hexo s",
```
启动方法 `npm run dev` 即可一键三连本地预览

``` bash
# 配置 package.json 第11行,注意此代码后边不带点
	"up": "hexo cl && hexo g && hexo d"
```
启动方法 `npm run up` 即可一键三连上传
{% endfolding %}

***
### 侧边栏公众号卡片跳转

{% folding yellow, 侧边栏公众号卡片跳转 %}

**侧边栏公众号卡片只有反转效果,并不能跳转,修改代码实现跳转**

``` bash
# 原代码
# 路径地址 themes/layout/widget/card_weixin.pug
- let faceImg = theme.aside.card_weixin.face
- let backFaceImg = theme.aside.card_weixin.backFace
if theme.aside.card_weixin.enable
  .card-widget.anzhiyu-right-widget#card-wechat(onclick="window.open("/")")
    #flip-wrapper
      #flip-content
        .face(style=`background: url(${faceImg}) center center / 100% no-repeat`)
        .back.face(style=`background: url(${backFaceImg}) center center / 100% no-repeat`)

# 修改后的代码 href='xxxx' 自行填写跳转地址
- let faceImg = theme.aside.card_weixin.face
- let backFaceImg = theme.aside.card_weixin.backFace
if theme.aside.card_weixin.enable
  .card-widget.anzhiyu-right-widget#card-wechat(onclick="window.open("/")")
    #flip-wrapper
      #flip-content
        .face(style=`background: url(${faceImg}) center center / 100% no-repeat`)
        a.back.face(href='xxxx', style=`background: url(${backFaceImg}) center center / 100% no-repeat`)
```
{% endfolding %}
***
### 博客固定永久链接

 {% folding yellow, 博客固定永久链接 %}
 
 Hexo 文章链接默认生成规则：:year/:month/:day/:title，是按照(`年、月、日、标题`)来生成的。
 
 **安装插件**
 ``` bash
 sudo npm install hexo-abbrlink --save
 ```
 
**修改_config.yml文件**
 ``` bash
 ## permalink: :year/:month/:day/:title/
 permalink: :abbrlink.html  ## 此处可以自己设置
 permalink_defaults:
 pretty_urls:
   trailing_index: true # Set to false to remove trailing 'index.html' from permalinks
   trailing_html: true # Set to false to remove trailing '.html' from permalinks
 ## abbrlink config
 abbrlink:
   alg: crc32      #support crc16(default) and crc32 进制
   rep: hex        #support dec(default) and hex  算法
   drafts: false   #(true)Process draft,(false)Do not process draft. false(default) 
   ## Generate categories from directory-tree
   ## depth: the max_depth of directory-tree you want to generate, should > 0
   auto_category:
      enable: true  #true(default)
      depth:        #3(default)
      over_write: false 
   auto_title: false #enable auto title, it can auto fill the title by path
   auto_date: false #enable auto date, it can auto fill the date by time today
   force: false #enable force mode,in this mode, the plugin will ignore the cache, and calc the abbrlink for every post even it already had abbrlink.
 ```
 
 记着要先 `hexo clean` 再` hexo g` 哦～～～
 
**生成链接示意格式**
 
 - 最开始的原始链接
 https://git.nangesoe.cn/2024/07/19/9博客修改记录 Hexo 永久html后缀链接文章
 
 - 生成之后的新链接
 https://git.nangesoe.cn/f7886a0b.html
 
 ??提示: 不论如何修改文章的日期、名称，只要`不改变 footer-matter 中的 id 值`，那么文章链接永远不会变。
 
 {% endfolding %}

***
### 博客生成 RSS 地址
{% folding yellow, 博客生成 RSS 地址 %}

Hexo文件在终端打开 并运行代码 安装 feed插件

``` bash
sudo npm install --save hexo-generator-feed
```

- ```_config.yml```文件插入代码

16行处修改为自己的域名链接

``` bash
# RSS订阅功能
feed:
    type: atom
    path: atom.xml
    limit: false
```
运行 hexo g  即可生成一个在 public 文件夹中的 atom.xml文件,
运行 hexo d  上传到GitHub 中即可~

https://你的域名/atom.xml (即可查看rss)

- ```_config.anzhiyu.yml``` 开启注释

``` bash
- title: RSS
        link: atom.xml
        icon: anzhiyu-icon-rss
```

`访问:`https://`你的域名`/atom.xml (即可获取到生成的xml信息~)

 {% endfolding %}

***
### 博客配置评论 Twikoo插件
{% folding yellow, 博客配置评论 Twikoo插件 %}
{% sitegroup %}
{% site Twikoo是一个简洁、安全、免费的静态网站评论系统, url=https://git.nangesoe.cn/posts/bb7697f2.html, screenshot=http://nange666.test.upcdn.net/hexofm/wzfm009.jpg, avatar=http://nange666.test.upcdn.net/_20231209_32.png, description= %}
{% endsitegroup %}
{% endfolding %}

***
### 博客插入本地图片
{% folding yellow, 博客插入本地图片 %}
``` bash
# 安装插件 全局安装
sudo npm install hexo-asset-image --save
```

修改配置文件`_config.yml` 里的`post_asset_folder:`这个选项设置为`true`

- 每次新建文章则会自动生成同类型的文件夹,里边可以存放文章的图片

``` bash
# 文章内引用图片
![你想输入的替代文字](xxxx/图片名.jpg)
```

如果不想使用本地图片,则把配置文件`_config.yml` 里的`post_asset_folder:`这个选项设置为`false`,随之所有本地图片则会失效!

卸载插件代码
``` bash 
# 查看已安装的插件名称,也可以在 package.json 中查看已安装的插件
npm list

# 卸载插件
sudo npm uninstal 插件名称 --save

# 清除插件缓存
sudo npm prune

```
 {% endfolding %}