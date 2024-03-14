# eslint-prettier-husky-boilerplate

It's a boilerplate for usage of `eslint`, `prettier` and `husky` (with `commit-msg and pre-commit hooks`) in a future project that is turned to be implemented with `JavaScript(JS)` or `TypeScript(TS)`. Check out the docs below to be in an `actual tune`!

A future project is considered to use `ESM` (check the property `type: module` in the `package.json` file).

`ESLint` is turned to use `Airbnb-Base config` (for `TS`: `"eslint-config-airbnb-typescript"`, `"@typescript-eslint/eslint-plugin"`, `"@typescript-eslint/parser"`) and `Prettier config`. (check out the `./configs/eslint/.eslintrc.cjs` file.

Also take a glance at [Must use import to load ES Module .eslintrc.js](https://stackoverflow.com/questions/70487806/must-use-import-to-load-es-module-eslintrc-js) because `ESlint` is not fully support `ESM` now and pay attention to the method of resolving URL of the `tsconfig.json` (i.e. `project: path.resolve(__dirname, '../ts/tsconfig.json'`)).  
**For `ESM config` this will be going to be changed;**

`Prettier` is turned to use particularly default settings despite the `"singleQuote": true` (check out the `./configs/prettier/.prettierrc` file). For only `.html` files `"printWidth"` rule set to `160` (twice as default `80`) to prevent unnecessary splitting attributes onto multiple lines (check the [How do you stop Prettier in VS code splitting attributes onto multiple lines? stackoverflow.com](https://stackoverflow.com/questions/56291245/how-do-you-stop-prettier-in-vs-code-splitting-attributes-onto-multiple-lines) for details);

It's preffered to use `Visual Studio Code` with `ESlint`, `Prettier` and `Format Code Action` extensions (theirs settings are at `.vscode/settings.json` for a current project only. Check [Using Prettier and ESLint to automate formatting and fixing JavaScript by Rob O'Leary (Feb 11, 2022)](https://blog.logrocket.com/using-prettier-eslint-automate-formatting-fixing-javascript/) and [vscode-eslint github](https://github.com/microsoft/vscode-eslint/blob/main/README.md) for details);

`Commitlint` is turned to the `conventional` set usage, but `'header-max-length': [2, 'always', 200]` rule is set commit header length up to 200 characters max. Also the `'type-enum'` ruleset includes `init` type (check out the `./configs/commitlint/commitlint.config.js` file);

`TypeScript` is also supported by the stuff above. There's a `TS` config file (`configs/ts/tsconfig.json`) and types declaration for `TS` (`configs/ts/global.d.ts`) to handle imported assets files (e.g. `.svg`, `.html`, `scss`, `css` etc).

---

**!Important**
If you're out of tending to use the `TS` so step the following moves:

```bash
  npm uninstall typescript @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-airbnb-typescript
```

- delete the `configs/ts` folder;
- in the `configs/eslint/.eslintrc.cjs` remove the next strings:

  ```js
    {
      files: ['*.ts', '*.tsx'],
      extends: ['airbnb-base', 'airbnb-typescript/base', 'prettier'],
      parserOptions: {
        project: path.resolve(__dirname, '../ts/tsconfig.json'),
      },
    },

  ...

    parser: '@typescript-eslint/parser',

  ...

    plugins: ['@typescript-eslint'],
  ```

- delete `"tsc": "npx tsc -p configs/ts/tsconfig.json"` in the `package.json` => `scripts`.

---

<br>

**The common struture of the `tsconfig.json` is**

```ts
  {
    "compilerOptions": {...},
    "include": [...],
    "exclude": []
  }
```

`tsconfig.json` is containing particularly default settings despite the below ones:
in the `"compilerOptions"`:

- `"target": "ESNext"`,
- `"module": "ESNext"`,
- `"esModuleInterop": true`,
- `"forceConsistentCasingInFileNames": true`,
- `"strict": true`,
- `"noImplicitAny": true`,
- `"skipLibCheck": true`,

in the `"include"` (pathes are relative to the `tsconfig.json` file!):

```ts
[
  '../../src/**/*.ts',
  '../../src/**/*.js',
  '../../tests/**/*.ts',
  '../../tests/**/*.js',
  '../../*.ts',
  '../../*.js',
];
```

(check the [typescriptlang.org/tsconfig](https://www.typescriptlang.org/tsconfig) link for more).

So `TypeScipt` (and `ESlint` + `Prettier`) will work with the `(js|ts)` files inside the `src`, `tests` directories and on the top of the boilerplate (feel free to change the behaviour as you wish).

in the `"exclude"` (pathes are relative to the `tsconfig.json` file!):

```ts
['../../node_modules'];
```

so is that `node_modules` are excluded from the sight of the `TS`.

To transpile all the `.ts` files run the `npx tsc -p configs/ts/tsconfig.json`, where
`-p` (i.e. `--project`) means the path to the `TS` config file

or

```bash
  npm run tsc
```

(**note:** `tsc` in the command above is the name of the script in the `package.json`, feel free to rename it what ever you like).

If you want to have `TS => JS` transpiled files in their own folder (relative to the corrensponding `.ts` file) change the `tsconfig.json` => `compilerOptions` => `"outDir"`
(e.g `"outDir": "dist"` will emit `.js` files to the `dist` folder near the relative `.ts` file).

Check the file for details (descriptions are inside).

`Important!!! Before usage, check the actuality of the scripts and settings by links below!!! The currents one could be outdated.`

### The boilerplate structure and brief descriptions:

- `.husky` - folder for husky's hooks (with hooks config);
- `.vscode/settings.json` - settings for appropraite work of the `ESlint` and `Prettier` VSCode extensions in a project (with a help of `Format Code Action` extension). There're settings and scripts for a usage of the configs (and ignore) files in the project (i.e. links to ones config files);
- `configs/` - the folder includes config and ignore files for: `ESlint`, `Prettier`, `Commitlint` and `TypeScript` packages. Currently about ignore files: `node_modules` and a few more folders are ignored (check `.gitignore` file);
- `src/` - source folder for a future project;
- `.gitignore` - exlude `node_modules` and a few more folders from git watching (like `dist` etc, check the file for more);
- `LICENSE` - license file;
- `package.json` - the heart of all.
  Check the scripts (especially, the pathes for linting/prettier'ing. Currently: `'./src'`). Scripts already have CLI prefixes to link with config and ignore files;

  **With the new packages releases, the ones above can turn to pumpkin, so check'em out with official docs!!!**

### Links:

#### VSCode usage' links:

- [Using Prettier and ESLint to automate formatting and fixing JavaScript by Rob O'Leary (Feb 11, 2022)](https://blog.logrocket.com/using-prettier-eslint-automate-formatting-fixing-javascript/)

#### TypeScript:

- [The official website of the TypeScript](https://www.typescriptlang.org/)
- [The official github of the TypeScript](https://github.com/microsoft/TypeScript)
- [Linting in TypeScript using ESLint and Prettier by Paul Ccari (Sep 26, 2023)](https://blog.logrocket.com/linting-typescript-eslint-prettier/)
- [eslint-config-airbnb-typescript at npmjs.com](https://www.npmjs.com/package/eslint-config-airbnb-typescript)
- [The official github of the eslint-config-airbnb-typescript](https://github.com/iamturns/eslint-config-airbnb-typescript?tab=readme-ov-file)
- [Example of the .eslintrc.js by Matt Turnbull(iamturns)](https://github.com/iamturns/create-exposed-app/blob/master/.eslintrc.js)
- [VS Code ESLint extension](https://github.com/microsoft/vscode-eslint/blob/main/README.md#using-eslint-to-validate-typescript-files)
- ["parserOptions.project" has been set for @typescript-eslint/parser](https://stackoverflow.com/questions/58510287/parseroptions-project-has-been-set-for-typescript-eslint-parser)
- [About the TypeScript config options](https://www.typescriptlang.org/tsconfig)
- [About the TypeScript config options](https://www.typescriptlang.org/tsconfig)
- [About the TypeScript tsc CLI Options](https://www.typescriptlang.org/docs/handbook/compiler-options.html)

#### ESLint:

- [ESlint official documentation](https://eslint.org/docs/latest/)  
  Changes with ESlint v9.0.0 coming soon! (flat config, ES modules).  
   TODO! Change then the `eslintrc.cjs` => `eslint.config.js` and dig deeper using Docs!
- [VS Code ESLint extension by Microsoft](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [eslint-config-airbnb-base by airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base)
- [eslint-config-prettier by prettier](https://github.com/prettier/eslint-config-prettier)

#### Prettier:

- [Prettier official documentation](https://prettier.io/docs/en/)
  TODO! Changes coming soon, check the prettier configs.
- [Prettier Formatter for Visual Studio Code by Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

#### Husky:

- [Husky official documentation](https://typicode.github.io/husky/)  
  Changes coming soon! New features will take place.
  TODO! Change the husky and commitlint configs!

- [Commitlint official documentation](https://commitlint.js.org/#/)

- [conventional-changelog official documentation for validating commit messages (code worldwide usaging keywords)](/https://github.com/conventional-changelog/commitlint)

#### done: March 12, 2024
