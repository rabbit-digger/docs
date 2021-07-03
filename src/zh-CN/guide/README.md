---
sidebarDepth: 2
---

## 介绍

`rabbit-digger` 是由 [Rust](https://www.rust-lang.org/) 编写的代理软件.

目前还处于快速开发阶段. 文档可能与实际用法不一致, 如果有发现不一致请 [提交issue](https://github.com/rabbit-digger/rabbit-digger.github.io/issues/new).

### 支持的代理协议

* Shadowsocks
* Trojan
* HTTP
* Socks5
* obfs(http_simple)

### 支持的服务器协议

* Socks5
* HTTP
* http+socks on the same port
* Shadowsocks


## 安装

前往 [Release页面](https://github.com/rabbit-digger/rabbit-digger-pro/releases) 下载二进制文件.

## 常见用法

### 普通模式

```
rabbit-digger-pro -c config.example.yaml
```

### 普通模式 + 控制端口 + AccessToken

```
rabbit-digger-pro -c config.example.yaml -b 127.0.0.1:8030 --access-token token
```

### 纯控制模式, 默认不载入配置

```
rabbit-digger-pro server -b 127.0.0.1:8030 --access-token token
```

## 命令行参数

```
rabbit-digger-pro 0.1.0

USAGE:
    rabbit-digger-pro [OPTIONS] [SUBCOMMAND]

FLAGS:
    -h, --help       Prints help information
    -V, --version    Prints version information

OPTIONS:
        --access-token <access-token>    Access token [env: RD_ACCESS_TOKEN=]
    -b, --bind <bind>                    HTTP endpoint bind address [env: RD_BIND=]
    -c, --config <config>                Path to config file [env: RD_CONFIG=]  [default: config.yaml]
        --userdata <userdata>            Userdata [env: RD_USERDATA=]
        --web-ui <web-ui>                Web UI. Folder path [env: RD_WEB_UI=]
        --write-config <write-config>    Write generated config to path

SUBCOMMANDS:
    generate-schema    Generate schema to path, if not present, output to stdout
    help               Prints this message or the help of the given subcommand(s)
    server             Run in server mode
```