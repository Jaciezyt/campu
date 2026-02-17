---
slug: redpacket-ctf-2026-writeup
title: Red Packet CTF 2026 Write-up
description: 一年一度的 红包 CTF 的 Write-up~ 新年快乐！
cover: /assets/img/blogs/redpacket-ctf-2026-writeup/cover.webp
author:
  name: Jaciezyt
tags: [ctf, writeup, redpacket-ctf, celebration]
category: Misc
pinned: 3
created: 2026-02-16T17:31:32.000Z
updated: 2026-02-16T17:31:32.000Z
---

首先祝大家新春快乐！马到成功~  
游戏圆满结束！一共收到了 48 份提交，其中 44 份有效并获得了红包~

## 题目

题目在网站 [redpacket.zzzz.yt](https://redpacket.zzzz.yt) 上 （也可以通过 [jaciezyt.github.io](https://jaciezyt.github.io/redpacket-ctf-2026) 访问）  
看起来是一个平平无奇的伪 Webshell

## 题解

### 0x00

首先 `help` 看看有哪些命令

```shell
guest@ctf:~$ help
Available commands: ls, cd, cat, pwd, clear, whoami, su
```

看看当前目录下有什么文件

```shell
guest@ctf:~$ ls
readme.txt
```

`cat` 这个文件看看

```shell
guest@ctf:~$ cat readme.txt
Welcome to the challenge!
Try to find the flag hidden in the system.
And send your flag to Telegram bot @jacie_red_packet_bot to verify.
If you do not use Telegram, plaease email the flag and social profile(X, QQ, etc..) link to jaciezyt@gmail.com.
Please submit your flag by 2026-02-16T04:00:00Z

Is this all?
```
~~有两个typo但不重要~~

注意到最后一句了么？
> Is this all?
这句话很明显是在暗示我们还有其他的东西没有发现。

### 0x01

我们可以尝试 `ls -a` 看看隐藏文件

```shell
guest@ctf:~$ ls -a
readme.txt  .bash_history  .config
```

发现了一个隐藏文件 `.bash_history` 和一个隐藏目录 `.config`，我们先看看 `.bash_history`

```shell
guest@ctf:~$ cat .bash_history
ls
cd /var/www
cat index.html
# I stored part 1 of the flag in .config/settings.json
exit
```

从 `.bash_history` 中我们得知，flag 的第一部分被存储在了 `.config/settings.json` 中。  
我们继续查看 `.config/settings.json`

```shell
guest@ctf:~$ cat .config/settings.json
{
  "theme": "dark",
  "flag_part_1": "flag{fr0n73nd_"
}
```
我们得到了 flag 的第一部分 `flag{fr0n73nd_`，接下来我们需要找到 flag 的第二部分。

### 0x02

看看根目录下还有什么

```shell
guest@ctf:~$ ls /
home  var  etc  root
```

然后挨个看，你会发现 `var` `etc` 里啥也没有，`home` 只有 `guest`，`root` 无法访问

聪明孩子应该在 0x00 之前就已经打开 F12 看到了一大段注释

```html
<!-- 
    TODO: Remove this comment before deploying to production!
    Dev Note: Part of the super secret flag is located in /root/flag.txt
    but only the admin user can access it. 
    Remember the admin password is: "w3b_sh3ll_r00t_4cc3ss"
-->
```

看起来是一段忘了删的注释（  

我们可以尝试 `su` 切换到 root 用户

```shell
guest@ctf:~$ su root
su: Authentication failure
```

错误是因为做了命令简化，实际上 `su` 是不能通过除了 TTY 以外的任何方式输入密码的  
如果加大难度可以强制用 `echo passwd | sudo -S "cmd"` 这种方式  
但是前端实现有点过于困难（）

```shell
guest@ctf:~$ su root w3b_sh3ll_r00t_4cc3ss
Logged in as root.
```

成功切换到 root 用户后，我们就可以访问 `/root/flag.txt` 来获取 flag 的第二部分了

```shell
root@ctf:~$ cat /root/flag.txt
Congratulations!
Here is the rest part of the flag: m4573r_0f_d0m}
```

最终我们得到了完整的 flag：`flag{fr0n73nd_m4573r_0f_d0m}`