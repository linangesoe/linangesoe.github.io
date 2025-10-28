---
title: Hexo 博客配置评论 插件Twikoo 「记录」-南盟笔记
categories: Hexo
tags: 笔记
cover: http://nange666.test.upcdn.net/hexofm/wzfm009.jpg
top_group_index: 7
ai: 
  Twikoo是一个简洁、安全、免费的静态网站评论系统，基于
  腾讯云开发。一番体验，发现Twikoo真的很强大，目前我决定用它作为主要评论插件。Twikoo支持支持即时通知反垃圾插件、隐私设置等功能，无需另外登录后台，并且配置方式也十分方便，在页面评论区就可以直接管理评论、配置插件。
abbrlink: bb7697f2
main_color: '#005ffb'
date: 2024-07-13 16:22:39
---

Twikoo是一个简洁、安全、免费的静态网站评论系统，基于 腾讯云开发。一番体验，发现Twikoo真的很强大，目前我决定用它作为主要评论插件。Twikoo支持支持即时通知反垃圾插件、隐私设置等功能，无需另外登录后台，并且配置方式也十分方便，在页面评论区就可以直接管理评论、配置插件。

### 部署大致流程

通过MongoDB免费的数据库,以及 Vercel 托管平台,部署 Twikoo评论插件 到GitHub 中,生成自己需要的 环境ID,填写到 Hexo 代码博客中,最后绑定自己的IP域名即可~ 

- 首先,分别注册 MongoDB 和 Vercel  的账号,这两款平台都是可以使用GitHub授权登录(推荐GitHub授权登录)

### 1.创建MongoDB数据库

(由于此站点都是英文,请使用翻译插件或工具翻译)

首次创建一个```组织```,再在组织下创建一个```项目```,项目下创建一个```数据库```,就只有简单的三步,最后简单配置一些数据库的选项即可!


**创建组织:** {% btn 'https://cloud.mongodb.com/v2#/preferences/organizations',点我跳转,anzhiyufont anzhiyu-icon-circle-arrow-right %}


* 点击 ({% span blue, 创建新组织 %}) 组织名称 ({% span blue, 随意 %}) 选择云服务 ({% span blue, MongoDB图集 %}) 点击 ({% span blue, 下一个 %} ) 点击 ({% span blue, 创建组织 %})

#### 自动会跳转到**创建项目的界面**

* 创建项目: 点击(**新建项目**)—项目名称(**随意**)—点击(**下一个**)—点击(**创建项目**)

#### 它会自动跳转到**创建数据库的界面**

* 创建数据库: 点击(**数据库**)—点击(**构建集群**)按照下图进行勾选

<p style="text-align: center; padding: 6px;"  align="center">
		<img src="http://nange666.test.upcdn.net/nangebj/hexowz/twikoo0.png" alt="" style="border: 1px solid #979899; border-radius: 19px; padding: 5px; box-shadow: #979899 0px 0px 6px; width: 100%;vertical-align:baseline;box-sizing:border-box;max-width:100% !important;" draggable="false" data-ratio="0.5622254758418741" data-w="1366"/>
</p>

<p style="text-align: center; padding: 6px;"  align="center">
		<img src="http://nange666.test.upcdn.net/nangebj/hexowz/twikoo13.png" alt="" style="border: 1px solid #979899; border-radius: 19px; padding: 5px; box-shadow: #979899 0px 0px 6px; width: 100%;vertical-align:baseline;box-sizing:border-box;max-width:100% !important;" draggable="false" data-ratio="0.5622254758418741" data-w="1366"/>
</p>

<p style="text-align: center; padding: 6px;"  align="center">
		<img src="http://nange666.test.upcdn.net/nangebj/hexowz/twikoo1.png" alt="" style="border: 1px solid #979899; border-radius: 19px; padding: 5px; box-shadow: #979899 0px 0px 6px; width: 100%;vertical-align:baseline;box-sizing:border-box;max-width:100% !important;" draggable="false" data-ratio="0.5622254758418741" data-w="1366"/>
</p>

<p style="text-align: center; padding: 6px;"  align="center">
		<img src="http://nange666.test.upcdn.net/nangebj/hexowz/twikoo2.png" alt="" style="border: 1px solid #979899; border-radius: 19px; padding: 5px; box-shadow: #979899 0px 0px 6px; width: 100%;vertical-align:baseline;box-sizing:border-box;max-width:100% !important;" draggable="false" data-ratio="0.5622254758418741" data-w="1366"/>
</p>

<p style="text-align: center; padding: 6px;"  align="center">
		<img src="http://nange666.test.upcdn.net/nangebj/hexowz/twikoo3.png" alt="" style="border: 1px solid #979899; border-radius: 19px; padding: 5px; box-shadow: #979899 0px 0px 6px; width: 100%;vertical-align:baseline;box-sizing:border-box;max-width:100% !important;" draggable="false" data-ratio="0.5622254758418741" data-w="1366"/>
</p>


### 2、Vercel一键部署

- 首先确定你的GitHub 和 Vercel是注册并登录的状态~
点击此处一键创建你的 Twikoo 仓库,输入创建仓库的名称(**随意**)[点击跳转](https://vercel.com/import/project?template=https://github.com/twikoojs/twikoo/tree/main/src/server/vercel-min)

<p style="text-align: center; padding: 6px;"  align="center">
		<img src="http://nange666.test.upcdn.net/nangebj/hexowz/twikoo4.png" alt="" style="border: 1px solid #979899; border-radius: 19px; padding: 5px; box-shadow: #979899 0px 0px 6px; width: 100%;vertical-align:baseline;box-sizing:border-box;max-width:100% !important;" draggable="false" data-ratio="0.5622254758418741" data-w="1366"/>
</p>

- 出现这个界面表示,拉取的仓库成功,但是显示还没有配置环境变量~

<p style="text-align: center; padding: 6px;"  align="center">
		<img src="http://nange666.test.upcdn.net/nangebj/hexowz/twikoo5.png" alt="" style="border: 1px solid #979899; border-radius: 19px; padding: 5px; box-shadow: #979899 0px 0px 6px; width: 100%;vertical-align:baseline;box-sizing:border-box;max-width:100% !important;" draggable="false" data-ratio="0.5622254758418741" data-w="1366"/>
</p>

点击**设置**—**环境变量**—填写名称为**MONGODB_URI**和**字段**(字段就是在 MongoDB 配置时生成的字段)

<p style="text-align: center; padding: 6px;"  align="center">
		<img src="http://nange666.test.upcdn.net/nangebj/hexowz/twikoo6.png" alt="" style="border: 1px solid #979899; border-radius: 19px; padding: 5px; box-shadow: #979899 0px 0px 6px; width: 100%;vertical-align:baseline;box-sizing:border-box;max-width:100% !important;" draggable="false" data-ratio="0.5622254758418741" data-w="1366"/>
</p>

<p style="text-align: center; padding: 6px;"  align="center">
		<img src="http://nange666.test.upcdn.net/nangebj/hexowz/twikoo7.png" alt="" style="border: 1px solid #979899; border-radius: 19px; padding: 5px; box-shadow: #979899 0px 0px 6px; width: 100%;vertical-align:baseline;box-sizing:border-box;max-width:100% !important;" draggable="false" data-ratio="0.5622254758418741" data-w="1366"/>
</p>

<p style="text-align: center; padding: 6px;"  align="center">
		<img src="http://nange666.test.upcdn.net/nangebj/hexowz/twikoo8.png" alt="" style="border: 1px solid #979899; border-radius: 19px; padding: 5px; box-shadow: #979899 0px 0px 6px; width: 100%;vertical-align:baseline;box-sizing:border-box;max-width:100% !important;" draggable="false" data-ratio="0.5622254758418741" data-w="1366"/>
</p>

<p style="text-align: center; padding: 6px;"  align="center">
		<img src="http://nange666.test.upcdn.net/nangebj/hexowz/twikoo9.png" alt="" style="border: 1px solid #979899; border-radius: 19px; padding: 5px; box-shadow: #979899 0px 0px 6px; width: 100%;vertical-align:baseline;box-sizing:border-box;max-width:100% !important;" draggable="false" data-ratio="0.5622254758418741" data-w="1366"/>
</p>

<p style="text-align: center; padding: 6px;"  align="center">
		<img src="http://nange666.test.upcdn.net/nangebj/hexowz/twikoo10.png" alt="" style="border: 1px solid #979899; border-radius: 19px; padding: 5px; box-shadow: #979899 0px 0px 6px; width: 100%;vertical-align:baseline;box-sizing:border-box;max-width:100% !important;" draggable="false" data-ratio="0.5622254758418741" data-w="1366"/>
</p>

出现此界面表示已经部署成功,并且已经生成评论插件ID,上图有箭头指示说明! **ID其实就是一个链接地址**,但是链接地址咱们不要,为什么呢? 太慢,如果配置到博客中,大概率评论会刷新不出来,就是因为ID链接是Vercel生成的,一般国内访问基本是GG(无法访问)的状态,所以自己有域名去更换即可~(**更换域名不做演示,自行百度**)

<p style="text-align: center; padding: 6px;"  align="center">
		<img src="http://nange666.test.upcdn.net/nangebj/hexowz/twikoo11.png" alt="" style="border: 1px solid #979899; border-radius: 19px; padding: 5px; box-shadow: #979899 0px 0px 6px; width: 100%;vertical-align:baseline;box-sizing:border-box;max-width:100% !important;" draggable="false" data-ratio="0.5622254758418741" data-w="1366"/>
</p>

### 3、配置 Hexo 博客评论

更换之后的**域名就是你自的环境ID**,只需要填写到Hexo 博客的代码中之后,打开博客底部查看在评论的界面, 选择点击 **小齿轮**, 首次需设置密码,再进行一些需要开启的配置即可~

<p style="text-align: center; padding: 6px;"  align="center">
		<img src="http://nange666.test.upcdn.net/nangebj/hexowz/Pasted%20Graphic%2026.png" alt="" style="border: 1px solid #979899; border-radius: 19px; padding: 5px; box-shadow: #979899 0px 0px 6px; width: 100%;vertical-align:baseline;box-sizing:border-box;max-width:100% !important;" draggable="false" data-ratio="0.5622254758418741" data-w="1366"/>
</p>