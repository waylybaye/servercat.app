---
slug: "/zh/docs/servers"
date: "2019-05-04"
title: "群晖服务器的连接和监控"
---


## 如何连接群晖？

1. 打开「控制面板」「终端机和 SNMP」
2. 选中「启动 SSH 功能」
3. 点击「应用」

现在您将可以通过 SSH 远程访问了。


## ServerCat 如何支持 群晖的 Docker ？

群晖的 sshd 配置需要修改后才能直接使用 docker 命令

```shell script
# 1. 将用户添加到 docker 组
sudo synogroup --add docker 你的用户名

# 2. 更改 docker socket 的 owner 为 docker 用户组
# 否则无权 docker 进程
sudo chown root:docker /var/run/docker.sock

# 3. 修复用户主目录不存在的问题
sudo vi /etc/passwd

# 将 (baye) 代表你的用户名
# baye:x:1026:100::/var/services/homes/baye:/bin/sh
# 改成 
# baye:x:1026:100::/:/bin/sh

# 4. 修改 docker 不在 $PATH 中的问题
sudo ln -s /usr/local/bin/docker /usr/bin/docker
```
