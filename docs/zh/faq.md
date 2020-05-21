---
path: "/zh/faq"
date: "2019-05-04"
title: "ServerCat FAQ"
---

### ServerCat 是如何工作的，会在服务器上安装程序吗？

ServerCat 通过 SSH 直接读取 Linux 的 <code>/proc</code> 文件系统来获得系统的运行状态。
不依赖任何第三方工具，也不会在服务器上安装任何程序。

### 为何无法显示 macOS/FreeBSD/*** 的运行状态？

ServerCat 大部分数据依赖 Linux 内核的 <code>/proc</code> 子系统，在其它平台上由于没有同类的内核统计机制，暂时无法显示所有指标。


### 我的数据安全吗？

数据保存在本地的 App 沙盒中，敏感信息（Key 和 密码）会经 AES 加密保存。

### 数据同步安全吗？

数据同步使用 Apple iCloud 的服务，数据（敏感信息同样会经过 AES 加密）直接传到 iCloud 服务器上，不会经过任何第三方服务器。

### ServerCat 与 HyperApp 有何区别？

HyperApp 是作者开发的一个自动安装应用的 iOS App，主要定位是「Linux 的 AppStore」，
自带了预配置的一些应用（Docker 镜像），来帮助用户"一键"部署应用。
但由于某些不可抗力导致其在中国区 App Store（永远）不可用。

iOS 13 发布后，换用 Swift 语言和最新的 SwiftUI 完全重写开发了 ServerCat。
鉴于 HyperApp 的遭遇，ServerCat 不再提供预配置的应用部署服务，定位于专业的监控和运维工具。

### ServerCat 和 Ping 有和区别？

HyperApp 被下架后作者在中国区上架了一个精简版的应用叫做 Ping，只包含了监控功能。
ServerCat 的免费功能包含了 Ping 的所有功能，并更加强大。
