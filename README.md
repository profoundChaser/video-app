# Quasar App (my-youku)

A Quasar Project

## Install the dependencies
```bash
yarn
# or
npm install
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)
```bash
quasar dev
```


### Lint the files
```bash
yarn lint
# or
npm run lint
```


### Format the files
```bash
yarn format
# or
npm run format
```



### Build the app for production
```bash
quasar build
```

### Customize the configuration
See [Configuring quasar.config.js](https://v2.quasar.dev/quasar-cli-vite/quasar-config-js).

### introduction

1. quasar2 + vue3 + vite + ts

cmd: yarn create quasar

2. 引入 tailwindcss

yarn add tailwindcss最新版本
可能需要一下 postcss 和autofix的版本号, 参考package.json
其余参考tailwindcss官网步骤

3. 引入 element-plus 按需载入,无需注册
yarn add element-plus unplugin-auto-import unplugin-vue-components

quasar.config.js中需要进行如下配置

 vitePlugins: [
        [
          "unplugin-auto-import/vite",
          {
            resolvers: [
              require("unplugin-vue-components/resolvers").ElementPlusResolver(),
            ],
          },
        ],
        [
          "unplugin-vue-components/vite",
          {
            resolvers: [
              require("unplugin-vue-components/resolvers").ElementPlusResolver(),
            ],
        },
        ]
]


4. 开启使用electron模式

cmd: quasar add mode electron
electron淘宝镜像 npm config set electron_mirror https://npm.taobao.org/mirrors/electron/
可能会出错误,使用淘宝镜像后，再次使用上述命令
生成src-electron文件
package.json配置命令如下：
"electron dev": "quasar dev -m electron",
"electron build": "quasar build -m electron"