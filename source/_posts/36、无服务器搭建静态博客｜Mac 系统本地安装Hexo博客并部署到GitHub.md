---
title: 无服务器搭建静态博客｜Mac 系统本地安装Hexo博客并部署到GitHub-南盟笔记
cover: 'http://nange666.test.upcdn.net/nangebj/xcx_bizhi/2/WechatlMG869.jpg'
categories: Hexo
tags: 笔记
ai: 暂无介绍请自行查看~
main_color: '#303ABE'
abbrlink: fc6b5872
date: 2024-08-09 13:08:50
---

## 一、首先搭建Hexo 的环境，需要安装Node.js 

1、Node.js 官方下载地址：[Node.js — Download Node.js® (nodejs.org)](https://nodejs.org/en/download/prebuilt-installer)

* 如下图：（**着重看标记红色框**）

<p style="text-align: center; padding: 6px;"  align="center">
		<img src="http://nange666.test.upcdn.net/hexowznr/wznr0047.png" alt="" style="border: 1px solid #979899; border-radius: 19px; padding: 5px; box-shadow: #979899 0px 0px 6px; width: 100%;vertical-align:baseline;box-sizing:border-box;max-width:100% !important;" draggable="false" data-ratio="0.5622254758418741" data-w="1366"/>
</p>

2、打开Mac电脑中自带的 **「终端」** 软件，输入以下代码，检测Node.js是否安装成功，显示版本则表示安装成功！

``` bash
node -v
npm -v
```
如下图：（注意显示的版本号，是根据你下载的Node.js的版本决定的，只要显示版本就代表安装成功）

<p style="text-align: center; padding: 6px;"  align="center">
		<img src="http://nange666.test.upcdn.net/hexowznr/wznr0048.png" alt="" style="border: 1px solid #979899; border-radius: 19px; padding: 5px; box-shadow: #979899 0px 0px 6px; width: 100%;vertical-align:baseline;box-sizing:border-box;max-width:100% !important;" draggable="false" data-ratio="0.5622254758418741" data-w="1366"/>
</p>


3、安装git （**注意Mac电脑是自带git，所以不用安装**），检测是否安装git，请输入以下命令！（出现版本号则表示有git）

``` bash
git -v
```
如下图：每台电脑中的git版本不同，只要git版本号即可！

<p style="text-align: center; padding: 6px;"  align="center">
		<img src="http://nange666.test.upcdn.net/hexowznr/wznr0049.png" alt="" style="border: 1px solid #979899; border-radius: 19px; padding: 5px; box-shadow: #979899 0px 0px 6px; width: 100%;vertical-align:baseline;box-sizing:border-box;max-width:100% !important;" draggable="false" data-ratio="0.5622254758418741" data-w="1366"/>
</p>

## 二、本地安装Hexo

1、新建一个“**文件夹**”，名称随意但“**不能有中文字符**”，（列如我的文件名称是nange）并在文件夹中运行终端，分别运行以下命令。

``` bash
sudo npm install -g hexo-cli #（命令注释：全局安装 Hexo） 
#注意：此命令需要输入自己电脑的锁屏密码，输入锁屏密码是不显示的！
```

<p style="text-align: center; padding: 6px;"  align="center">
		<img src="http://nange666.test.upcdn.net/hexowznr/wznr0050.png" alt="" style="border: 1px solid #979899; border-radius: 19px; padding: 5px; box-shadow: #979899 0px 0px 6px; width: 100%;vertical-align:baseline;box-sizing:border-box;max-width:100% !important;" draggable="false" data-ratio="0.5622254758418741" data-w="1366"/>
</p>

``` bash
hexo -v #注：检查Hexo 是否安装成功，出现版本号即可
```

<p style="text-align: center; padding: 6px;"  align="center">
		<img src="http://nange666.test.upcdn.net/hexowznr/wznr0051.png" alt="" style="border: 1px solid #979899; border-radius: 19px; padding: 5px; box-shadow: #979899 0px 0px 6px; width: 100%;vertical-align:baseline;box-sizing:border-box;max-width:100% !important;" draggable="false" data-ratio="0.5622254758418741" data-w="1366"/>
</p>

``` bash
hexo init #注释：当前目录文件下，生成hexo的配置文件
```
``` bash
sudo npm install #注释：当前项目的目录中，安装项目所需依赖的包
```
``` bash
hexo cl && hexo g && hexo s #注释：即可看到“本地”的访问链接
```

<p style="text-align: center; padding: 6px;"  align="center">
		<img src="http://nange666.test.upcdn.net/hexowznr/wznr0052.png" alt="" style="border: 1px solid #979899; border-radius: 19px; padding: 5px; box-shadow: #979899 0px 0px 6px; width: 100%;vertical-align:baseline;box-sizing:border-box;max-width:100% !important;" draggable="false" data-ratio="0.5622254758418741" data-w="1366"/>
</p>

**Hexo默认主题**

<p style="text-align: center; padding: 6px;"  align="center">
		<img src="http://nange666.test.upcdn.net/hexowznr/wznr0053.png" alt="" style="border: 1px solid #979899; border-radius: 19px; padding: 5px; box-shadow: #979899 0px 0px 6px; width: 100%;vertical-align:baseline;box-sizing:border-box;max-width:100% !important;" draggable="false" data-ratio="0.5622254758418741" data-w="1366"/>
</p>

终端**停止Hexo运行**，请按住键盘上的按键，如下图

<p style="text-align: center; padding: 6px;"  align="center">
		<img src="http://nange666.test.upcdn.net/hexowznr/wznr0054.png" alt="" style="border: 1px solid #979899; border-radius: 19px; padding: 5px; box-shadow: #979899 0px 0px 6px; width: 100%;vertical-align:baseline;box-sizing:border-box;max-width:100% !important;" draggable="false" data-ratio="0.5622254758418741" data-w="1366"/>
</p>


## 三、更换Hexo的主题

以此主题界面为列，如下图

<p style="text-align: center; padding: 6px;"  align="center">
		<img src="http://nange666.test.upcdn.net/hexowznr/wznr0055.png" alt="" style="border: 1px solid #979899; border-radius: 19px; padding: 5px; box-shadow: #979899 0px 0px 6px; width: 100%;vertical-align:baseline;box-sizing:border-box;max-width:100% !important;" draggable="false" data-ratio="0.5622254758418741" data-w="1366"/>
</p>

**主题获取地址**：[安知鱼主题](https://github.com/anzhiyu-c/hexo-theme-anzhiyu)

1、主题安装方法
第一种 代码安装：（**非常慢**）
``` bash
git clone -b main https://github.com/anzhiyu-c/hexo-theme-anzhiyu.git themes/anzhiyu
```

第二种 下载软件包直接安装：（**非常快，推荐**）
**下载地址**：[https://github.com/anzhiyu-c/hexo-theme-anzhiyu/archive/refs/tags/1.6.12.zip](https://github.com/anzhiyu-c/hexo-theme-anzhiyu/archive/refs/tags/1.6.12.zip)

下载之后是一个zip的压缩包，解压出来之后修改文件夹名称 **anzhiyu** 复制到，如下图的文件夹中即可～

<p style="text-align: center; padding: 6px;"  align="center">
		<img src="http://nange666.test.upcdn.net/hexowznr/wznr0056.png" alt="" style="border: 1px solid #979899; border-radius: 19px; padding: 5px; box-shadow: #979899 0px 0px 6px; width: 100%;vertical-align:baseline;box-sizing:border-box;max-width:100% !important;" draggable="false" data-ratio="0.5622254758418741" data-w="1366"/>
</p>

2、修改`_config.yml`文件

<p style="text-align: center; padding: 6px;"  align="center">
		<img src="http://nange666.test.upcdn.net/hexowznr/wznr0057.png" alt="" style="border: 1px solid #979899; border-radius: 19px; padding: 5px; box-shadow: #979899 0px 0px 6px; width: 100%;vertical-align:baseline;box-sizing:border-box;max-width:100% !important;" draggable="false" data-ratio="0.5622254758418741" data-w="1366"/>
</p>

用记事本方式或者其它可以打开的工具，小编这里用的是**HBuilder x**工具，如下图中的landscape 修改为 anzhiyu，注意修改时前边要留空格！最后保存即可（保存快捷键：**command+s**）

<p style="text-align: center; padding: 6px;"  align="center">
		<img src="http://nange666.test.upcdn.net/hexowznr/wznr0058.png" alt="" style="border: 1px solid #979899; border-radius: 19px; padding: 5px; box-shadow: #979899 0px 0px 6px; width: 100%;vertical-align:baseline;box-sizing:border-box;max-width:100% !important;" draggable="false" data-ratio="0.5622254758418741" data-w="1366"/>
</p>

`覆盖配置`

覆盖配置可以使主题配置放置在 anzhiyu 目录之外，避免在更新主题时丢失自定义的配置

``` bash
cp -rf ./themes/anzhiyu/_config.yml ./_config.anzhiyu.yml
```

<p style="text-align: center; padding: 6px;"  align="center">
		<img src="http://nange666.test.upcdn.net/hexowznr/wznr0059.png" alt="" style="border: 1px solid #979899; border-radius: 19px; padding: 5px; box-shadow: #979899 0px 0px 6px; width: 100%;vertical-align:baseline;box-sizing:border-box;max-width:100% !important;" draggable="false" data-ratio="0.5622254758418741" data-w="1366"/>
</p>

3、运行Hexo 必要的插件安装

安装之前输入以下代码，检测是否已安装插件
``` bash
npm ls --depth 0
```

如下图，可以看到缺失四个插件

<p style="text-align: center; padding: 6px;"  align="center">
		<img src="http://nange666.test.upcdn.net/hexowznr/wznr0060.png" alt="" style="border: 1px solid #979899; border-radius: 19px; padding: 5px; box-shadow: #979899 0px 0px 6px; width: 100%;vertical-align:baseline;box-sizing:border-box;max-width:100% !important;" draggable="false" data-ratio="0.5622254758418741" data-w="1366"/>
</p>

**安装插件**：（如出现错误请在代码前加**sudo** 命令运行）
``` bash
npm install hexo-deployer-git hexo-renderer-pug hexo-renderer-stylus --save
```

如下图，三个插件安装成功

<p style="text-align: center; padding: 6px;"  align="center">
		<img src="http://nange666.test.upcdn.net/hexowznr/wznr0061.png" alt="" style="border: 1px solid #979899; border-radius: 19px; padding: 5px; box-shadow: #979899 0px 0px 6px; width: 100%;vertical-align:baseline;box-sizing:border-box;max-width:100% !important;" draggable="false" data-ratio="0.5622254758418741" data-w="1366"/>
</p>


运行全部代码即可看到已经更换了主题～
``` bash
hexo cl #（全称：hexo clean）该命令用于“清除”生成的缓存静态文件
hexo g #（全称：hexo generate）此命令用于“生成”静态文件
hexo s #（全称：hexo server）此命令用于“启动”本地服务器，本地预览博客
```

`浏览器输入`：http://localhost:4000/

<p style="text-align: center; padding: 6px;"  align="center">
		<img src="http://nange666.test.upcdn.net/hexowznr/wznr0062.png" alt="" style="border: 1px solid #979899; border-radius: 19px; padding: 5px; box-shadow: #979899 0px 0px 6px; width: 100%;vertical-align:baseline;box-sizing:border-box;max-width:100% !important;" draggable="false" data-ratio="0.5622254758418741" data-w="1366"/>
</p>

<p style="text-align: center; padding: 6px;"  align="center">
		<img src="http://nange666.test.upcdn.net/hexowznr/wznr0063.png" alt="" style="border: 1px solid #979899; border-radius: 19px; padding: 5px; box-shadow: #979899 0px 0px 6px; width: 100%;vertical-align:baseline;box-sizing:border-box;max-width:100% !important;" draggable="false" data-ratio="0.5622254758418741" data-w="1366"/>
</p>

## 四、通过GitHub托管Hexo博客

以上Hexo 博客是在本地部署，只能自己看见，别人是看不到的，所以咱们通过GitHub部署上线即可～

1、注册GitHub很简单，所以不作演示～ （需要梯子访问，请自行解决）

注册登录之后，**“新建仓库”**，点击此链接直达：[新建仓库](https://github.com/new)

注册的名称：**用户名.github.io** (必须按照此格式填写)，如下图

<p style="text-align: center; padding: 6px;"  align="center">
		<img src="http://nange666.test.upcdn.net/hexowznr/wznr0064.png" alt="" style="border: 1px solid #979899; border-radius: 19px; padding: 5px; box-shadow: #979899 0px 0px 6px; width: 100%;vertical-align:baseline;box-sizing:border-box;max-width:100% !important;" draggable="false" data-ratio="0.5622254758418741" data-w="1366"/>
</p>

2、配置GitHub用户名与邮箱

打开电脑终端软件工具，输入以下代码，一直按回车键，出现Y/N的选择Y即可！

``` bash
ssh-keygen -t rsa -C "你的 GitHub 邮箱"
#注释：将生成一个RSA类型的SSH密钥（下图表示，生成的密钥存放在箭头所指处～）
```
<p style="text-align: center; padding: 6px;"  align="center">
		<img src="http://nange666.test.upcdn.net/hexowznr/wznr0065.png" alt="" style="border: 1px solid #979899; border-radius: 19px; padding: 5px; box-shadow: #979899 0px 0px 6px; width: 100%;vertical-align:baseline;box-sizing:border-box;max-width:100% !important;" draggable="false" data-ratio="0.5622254758418741" data-w="1366"/>
</p>

``` bash
cat ~/.ssh/id_rsa.pub
#注释：查看当前文件的密钥（复制ssh开头到邮箱结尾的全部密钥，保存好！）
```

<p style="text-align: center; padding: 6px;"  align="center">
		<img src="http://nange666.test.upcdn.net/hexowznr/wznr0066.png" alt="" style="border: 1px solid #979899; border-radius: 19px; padding: 5px; box-shadow: #979899 0px 0px 6px; width: 100%;vertical-align:baseline;box-sizing:border-box;max-width:100% !important;" draggable="false" data-ratio="0.5622254758418741" data-w="1366"/>
</p>

**添加密钥到GitHub**

直达链接：[Add new SSH key](https://github.com/settings/ssh/new)

把生成的密钥填入，按照下图流程填入即可～

<p style="text-align: center; padding: 6px;"  align="center">
		<img src="http://nange666.test.upcdn.net/hexowznr/wznr0067.png" alt="" style="border: 1px solid #979899; border-radius: 19px; padding: 5px; box-shadow: #979899 0px 0px 6px; width: 100%;vertical-align:baseline;box-sizing:border-box;max-width:100% !important;" draggable="false" data-ratio="0.5622254758418741" data-w="1366"/>
</p>


检测是否连接成功，输入以下代码
``` bash
ssh -T git@github.com
```

如下图表示连接成功～

<p style="text-align: center; padding: 6px;"  align="center">
		<img src="http://nange666.test.upcdn.net/hexowznr/wznr0068.png" alt="" style="border: 1px solid #979899; border-radius: 19px; padding: 5px; box-shadow: #979899 0px 0px 6px; width: 100%;vertical-align:baseline;box-sizing:border-box;max-width:100% !important;" draggable="false" data-ratio="0.5622254758418741" data-w="1366"/>
</p>

上传Hexo代码 到GitHub托管

GitHub打开新建的（**名称后缀为github.io**）仓库，找到如下图ssh 的代码，复制保存备用～

<p style="text-align: center; padding: 6px;"  align="center">
		<img src="http://nange666.test.upcdn.net/hexowznr/wznr0069.png" alt="" style="border: 1px solid #979899; border-radius: 19px; padding: 5px; box-shadow: #979899 0px 0px 6px; width: 100%;vertical-align:baseline;box-sizing:border-box;max-width:100% !important;" draggable="false" data-ratio="0.5622254758418741" data-w="1366"/>
</p>


打开本地Hexo生成的文件夹，（列如我的文件名称是nange ），同样的找到`_config.yml`文件

<p style="text-align: center; padding: 6px;"  align="center">
		<img src="http://nange666.test.upcdn.net/hexowznr/wznr0070.png" alt="" style="border: 1px solid #979899; border-radius: 19px; padding: 5px; box-shadow: #979899 0px 0px 6px; width: 100%;vertical-align:baseline;box-sizing:border-box;max-width:100% !important;" draggable="false" data-ratio="0.5622254758418741" data-w="1366"/>
</p>

用记事本方式或者其它可以打开的工具，小编这里用的是HBuilder x工具

``` bash
type: git
repo: 填写刚才复制GitHub的ssh 链接
branch: main
```
如下图 格式填写，最后保存即可（保存快捷键：**command+s**）

<p style="text-align: center; padding: 6px;"  align="center">
		<img src="http://nange666.test.upcdn.net/hexowznr/wznr0071.png" alt="" style="border: 1px solid #979899; border-radius: 19px; padding: 5px; box-shadow: #979899 0px 0px 6px; width: 100%;vertical-align:baseline;box-sizing:border-box;max-width:100% !important;" draggable="false" data-ratio="0.5622254758418741" data-w="1366"/>
</p>


上传到GitHub
``` bash
hexo cl
hexo g
hexo d
#注释：hexo cl和hexo g已经解释过啦～hexo d （全称：hexo deploy）部署博客到远程服务器
```

如下图上传到GitHub成功

<p style="text-align: center; padding: 6px;"  align="center">
		<img src="http://nange666.test.upcdn.net/hexowznr/wznr0072.png" alt="" style="border: 1px solid #979899; border-radius: 19px; padding: 5px; box-shadow: #979899 0px 0px 6px; width: 100%;vertical-align:baseline;box-sizing:border-box;max-width:100% !important;" draggable="false" data-ratio="0.5622254758418741" data-w="1366"/>
</p>

GitHub修改配置，按照下图中文字修改即可～
<p style="text-align: center; padding: 6px;"  align="center">
		<img src="http://nange666.test.upcdn.net/hexowznr/wznr0073.png" alt="" style="border: 1px solid #979899; border-radius: 19px; padding: 5px; box-shadow: #979899 0px 0px 6px; width: 100%;vertical-align:baseline;box-sizing:border-box;max-width:100% !important;" draggable="false" data-ratio="0.5622254758418741" data-w="1366"/>
</p>

看到这里之后，你的GitHub部署就擦不多完成啦，你的地址：**https://用户名.github.io/** 即可访问，如上图中也会出现你的访问地址～