---
slug: "/zh/faq"
date: "2019-05-04"
title: "ServerCat FAQ"
---

### ServerCat 是如何工作的，会在服务器上安装程序吗？

ServerCat 通过 SSH 直接读取 Linux 的 <code>/proc</code> 文件系统来获得系统的运行状态。

不依赖任何第三方工具，也不会在服务器上安装任何程序。


### 为何 macOS/FreeBSD/Unix 的部分运行状态无法获取？

ServerCat 大部分数据依赖 Linux 内核的 <code>/proc</code> 子系统，在其它平台上由于没有同类的内核统计机制，所以无法显示所有指标。


### 我的数据安全吗？

数据保存在本地的 App 沙盒中，敏感信息（Key 和密码）会用 AES 加密保存。


### 数据同步安全吗？

数据同步使用 iCloud 的服务，数据直接传到 iCloud 服务器上，不会经过任何第三方服务器。


---- 


### macOS 如何使用 Docker？

docker 和 homebrew 安装的应用一般都在 `/usr/local/bin` 下面（你可以运行 which docker 来验证），但 SSH 登录时的默认环境变量 PATH 并不包含此路径，所以需要改下 sshd 的配置。

1. sudo vi /etc/ssh/sshd_config
2. 找到 PermitUserEnvironment 这一行，删掉前面的注释# 并且改成 PermitUserEnvironment yes
3. vi ~/.ssh/environment 添加一行 PATH=/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin 设置 PATH 变量
4. sudo launchctl unload /System/Library/LaunchDaemons/ssh.plist 关闭 sshd
5. sudo launchctl load -w /System/Library/LaunchDaemons/ssh.plist 重新开启 sshd


----


### ServerCat 与 HyperApp 有何区别？

HyperApp 是作者开发的一个自动安装应用的 iOS App，主要定位是「Linux 的 AppStore」，
自带了预配置的一些应用（Docker 镜像），来帮助用户"一键"部署应用。
但由于某些不可抗力导致其在中国区 App Store（永远）不可用。

iOS 13 发布后，换用 Swift 语言和最新的 SwiftUI 完全重写开发了 ServerCat。
鉴于 HyperApp 的遭遇，ServerCat 不再提供预配置的应用部署服务，定位于专业的监控和运维工具。
