# 介绍

## VitePress 是什么

VitePress 是一个用于快速生成内容网站的静态网站生成器(SSG, [Static Site Generator](https://en.wikipedia.org/wiki/Static_site_generator))。简而言之，VitePress 采用 [Markdown](https://en.wikipedia.org/wiki/Markdown) 语法编写文件，应用主题，生成可轻松部署在任意地方的静态的 HTML 页面。

> 想要试一试？点击[快速开始](#快速开始)

## 快速开始

### 在线上平台试一试

你可以直接在网站 [StackBlitz](https://vitepress.new/) 上尝试 VitePress

### 安装

#### 准备

* [Node.js](https://nodejs.org/en) >= 16
* 可在终端通过命令行指令访问 VitePress
* 文本编辑器支持 [Markdown](https://en.wikipedia.org/wiki/Markdown) 语法
  * 推荐使用 [VSCode](https://code.visualstudio.com/) 和[官方的 Vue 扩展](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

VitePress 可单独使用，也可以安装在一个已存在的项目中。这两种方案中，你可以按照以下方式安装：

::: code-group

```sh [npm]
$ npm install -D vitepress
```

```sh [pnpm]
$ pnpm add -D vitepress
```

```sh [yarn]
$ yarn add -D vitepress
```

:::

:::

::: details 收到缺少依赖警告?
如果使用 PNPM，你会注意到缺少依赖 `@docsearch/js` 的警告。这不会妨碍 VitePress 工作。如果你想屏蔽这个警告，可以在 `package.json` 文件中增加以下配置：

```json
"pnpm": {
  "peerDependencyRules": {
    "ignoreMissing": [
      "@algolia/client-search",
      "search-insights"
    ]
  }
}
```

:::

#### 安装向导

VitePress 提供一条命令行指令安装向导来搭建一个基础的工程。安装后，通过以下指令启动向导：

::: code-group

```sh [npm]
$ npx vitepress init
```

```sh [pnpm]
$ pnpm exec vitepress init
```

:::

你会看到几个简单的问题：

<p>
  <img src="https://vitepress.dev/assets/vitepress-init.dfe5638e.png" alt="vitepress init screenshot" style="border-radius:8px">
</p>

:::tip Vue 作为 Peer Dependency
如果你打算使用 Vue 组件或者 APIs 来展示自定义内容，你应该显示的安装 `Vue` 作为 peer 依赖。
:::

#### 文件结构

如果你正在构建一个独立的 VitePress 站点，你可以在当前目录(`./`)中构建。相反，如果是在一个已存在并且有其他源码的工程中，推荐新建一个目录(如`./docs`)进行构建，这样可以与工程的其他内容进行隔离。

假设你选择构建 VitePress 项目在 `./docs`，生成的文件目录结构如下：

```
.
├─ docs
│  ├─ .vitepress
│  │  └─ config.js
│  ├─ api-examples.md
│  ├─ markdown-examples.md
│  └─ index.md
└─ package.json
```

`./docs` 目录被认为是 VitePress 站点的**项目根目录**。`.vitepress` 目录是 VitePress 的配置文件、本地服务缓存、构建产物和自定义主题代码的保留位置

:::tip
默认情况下，VitePress 在 `.vitepress/cache` 存储开发服务缓存，在 `.vitepress/dist` 存储生产环境构建产物。如果使用 git，建议将他们添加到 `.gitignore` 文件。这些存储位置也可以进行[配置](../reference/site-config#outdir)
:::

#### 配置文件

#### 源文件

### 启动并运行

## 路由

## 部署

