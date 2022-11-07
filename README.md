<div align="center">
  <img src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" width="100"/>
  <h1 style="border-bottom:0">
    <p>light-design-react组件库</p>
    <p style="font-size:20px">一套适合开发者使用的轻量级UI组件库，完美支持React18+TS+Vite</p>
  </h1>
</div>
<br/>

官网主页: [light-design-react 使用文档](https://lightd.19ba.cn/)

---

### 快速使用

```
npm install  lightd
cnpm install  lightd
yarn add lightd
```

### 引入使用

```
import React from 'react';
import { Space, Button } from 'lightd';

export default function Demo() {
  return (
    <Space>
      <Button round>圆角按钮</Button>
      <Button type="primary" round>圆角按钮</Button>
    </Space>
  )
}
```

### 愉快开始

```
<Button>默认按钮</Button>
<Button type="primary">主要按钮</Button>
```

## lightd 贡献指南

首先非常感谢您能选择使用 _lightd_，_lightd_ 是基于 _React+Ts_ 开发，并集成 vite 构建；_lightd_ 旨在秉承数据驱动视图，力求更小的体积、更快的相应、更强的拓展性、更完美的支持、更友好的渲染。任何一个开源库都离不开大家的共同贡献和维护，如果您愿意参与贡献，请阅读以下内容。

### 问题反馈

- 如果您在使用中存在 _bug_ 或者有更超前的思想及解决方案，不限于新的组件、新的模式、新的思想、新的方案，您可以在 _Issue_ 提交问题，我们会定时进行维护并回复。
- 或您可发送邮件至 _djonce.qq.com_ 来反馈或参与贡献。

### 分支规范

- 贡献代码请保持在 _dev_ 分支，禁止操作 _main_ 分支。
- 组件文档暂时需要提供 _md_ 文件，包括（使用方式、演示、配置项、事件 API、插槽说明...）。
- 提交代码前请先 _rebase_。
- git 提交流程示例：

```javascript
git add .
git commit -m"add component:button"   //示例
git pull --rebase origin dev
git push origin dev
```

### 文档集成规范

- _src/pages/packages/_ 下创建组件文档文件，使用公用组件 _Title_ 和 _InstanceView_ 完成文档可视化集成。
- _src/demo/_ 下创建对应组件 _demo_ 文件，用来传递给 _InstanceView_ 组件渲染。
- _src/pages/packages/_ 下组件文档文件首行必须包含组件注释信息，用来自动生成路由配置。具体参考 _/src/pages/packages/button.tsx_ 文件。
- _InstanceView_ 组件所需参数及说明请阅读 _/src/layout/instanceView.tsx_ 文件。
- _API_ 集成请使用 _Table_ 组件完成，具体请参考 _Button_ 组件的实现方式。

### Issue 规范

- 在提交 _issue_ 之前，请搜索相关内容是否已被提出。
- 请说明 _lightd_ 和 _React_ 或者 _TS_ 的版本号，并提供操作系统和浏览器信息。推荐使用 _JSFiddle_ 生成在线 _demo_，这能够更直观地重现问题。

### Pull Request 规范

- 请先 _fork_ 一份到自己的项目下，不要直接在仓库下建分支。
- _commit_ 信息要以[组件名]: 描述信息 的形式填写，例如 Button: fix xxx bug。
- 执行 _build_ 后可以正确打包文件。
- 提交 _PR_ 前请 _rebase_，确保 _commit_ 记录的整洁。
- 确保 _PR_ 是提交到 dev 分支，而不是 main 分支。
- 如果是修复 _bug_，请在 _PR_ 中给出描述信息。
- 合并代码会有专人审核，避免滥用植入等，审核通过后即可合并。
- 打包测试组件命令为 _yarn build_ 或 _npm run build_
- 打包网页文件包命令为 _yarn build:html_ 或 _npm run build:html_

### 开发环境

- 你需要 _Node.js 14+_，_yarn 1.1+_，_react 18+_，_typescript 4+_ 和 _npm 6+_ 及 _vite 3+_。
- 如果您在使用 yarn 安装依赖的过程中出现 _eslint_ 检查不通过，请执行：

```
yarn config set ignore-engines true
```

#### 项目启动

```javascript
yarn dev
```

#### 项目打包

```javascript
yarn build
```

### 代码规范

- 避免过多的 _html_ 代码累赘，秉承数据驱动视图思想，简化使用繁琐度，提供更强的拓展性。
- 其他请参考 eslint [standard](https://github.com/standard/standard/blob/master/RULES.md#javascript-standard-style)
  <br/>
