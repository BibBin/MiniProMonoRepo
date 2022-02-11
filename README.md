
### 创建子项目可以使用lerna的命令来创建（或者其他脚手架）
```
lerna create <name>

```

#### yarn workspace
开启yarn workspace 会检查每个子项目里面依赖及其版本，如果版本不一样则会留在子项目自己的node_modules里面，只有完全一样的依赖才会提升到顶层。

```

// 顶层package.json
{
  "workspaces": [
    "packages/*"
  ]
}

```

#### 然后在lerna.json里面指定npmClient为yarn，并将useWorkspaces设置为true
```
// lerna.json
{
  "npmClient": "yarn",
  "useWorkspaces": true
}
```

### project1 引用 components的内容

```

lerna add @miniprogrammonorepo/components --scope @miniprogrammonorepo/project1

import {something} from '@miniprogrammonorepo/components'

```

### .gitignore忽略子项目的node_modules,dist

```

....
packages/components/node_modules
packages/project1/node_modules
packages/components/dist
packages/project1/dist

```


### [Vetur需要配置mono-repo](https://vuejs.github.io/vetur/guide/setup.html#advanced)

```

// vetur.config.js
/** @type {import('vls').VeturConfig} */
module.exports = {
  // **optional** default: `{}`
  // override vscode settings
  // Notice: It only affects the settings used by Vetur.
  settings: {
    "vetur.useWorkspaceDependencies": true,
    "vetur.experimental.templateInterpolationService": true,
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true,
    },
  },
  // **optional** default: `[{ root: './' }]`
  // support monorepos
  projects: [
    {
      root: "./packages/components",
      package: "./package.json",
      tsconfig: "./tsconfig.json",
    },
    {
      root: "./packages/project1",
      package: "./package.json",
      tsconfig: "./tsconfig.json",
    },
  ],
};


```


### 相关文档

[Lerna的Monorepo实战](https://juejin.cn/post/6866748110644822023#heading-14)  
[Lerna指令总览 (Commands)](http://www.febeacon.com/lerna-docs-zh-cn/routes/commands/)  
[排忧解难](http://www.febeacon.com/lerna-docs-zh-cn/routes/basic/troubleshooting.html)  
[GitLab CI流水线配置文件.gitlab-ci.yml详解](https://meigit.readthedocs.io/en/latest/gitlab_ci_.gitlab-ci.yml_detail.html)