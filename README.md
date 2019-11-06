# sgxq-mini-ui

> 一套高质量的微信小程序 UI 组件库

## 快速上手
### 如何使用

到 GIT 下载 sgxq-mini-program 的代码，将 dist 文件夹拷贝到自己的项目根目录上。删除 dist/page 目录和移动 dist/static 目录到根目录上。然后按照如下的方式使用组件，以 Button 为例，其它组件在对应的文档页查看：

1. 添加需要的组件。在页面的 json 中配置（路径根据自己项目位置配置）：
```json
"usingComponents": {
  "sgxq-button": "/dist/components/button/button"
}
```
2. 在 wxml 中使用组件：
```html
<sgxq-button type="primary" bind:click="handleClick">primary</sgxq-button>
```

### 预览所有组件
我们内置了所有组件的示例，您可以扫描下方的二维码，申请体验。

![二维码](https://raw.githubusercontent.com/Teacher-Li/sgxq-mini-ui/document/src/assets/wx-code.jpg)