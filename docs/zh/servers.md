---
path: "/zh/docs/servers"
date: "2019-05-04"
title: "服务器问题"
---

## 群晖如何支持 Docker ？

```shell script
# 1. 将用户添加到 docker
sudo synogroup --add docker 你的用户名

# 2. 更改 docker socket 的 owner 为 docker 用户组
sudo chown root:docker /var/run/docker.sock

# 3. 修复用户主目录不存在的问题
sudo vi /etc/passwd

# 将 
# baye:x:1026:100::/var/services/homes/baye:/bin/sh
# 改成 
# baye:x:1026:100::/:/bin/sh

# 4. 修改 docker 不在 $PATH 中的问题
sudo ln -s /usr/local/bin/docker /usr/bin/docker
```
