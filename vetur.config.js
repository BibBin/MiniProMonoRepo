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
