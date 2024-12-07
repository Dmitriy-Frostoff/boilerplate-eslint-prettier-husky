# eslint-prettier-husky-boilerplate

It's a boilerplate for usage of `eslint`, `prettier` and `husky` (with `commit-msg and pre-commit hooks`) in a future project that is turned to be implemented with `JavaScript(JS)` or `TypeScript(TS)`. Check out the docs below to be in an `actual tune`!

A future project is considered to use `ESM` (check the property `type: module` in the `package.json` file).

`ESLint` is turned to use `eslint:recommended` (as default recommended),  
`Airbnb-Base config` (`eslint-config-airbnb-base`) as primary (for `TS`: `"eslint-config-airbnb-typescript"`, `"@typescript-eslint/eslint-plugin"`, `"@typescript-eslint/parser"`, `'plugin:@typescript-eslint/recommended'`),  
`eslint-plugin-import` (`eslint-config-airbnb` require it) and  
`Prettier config`. (check out the `./configs/eslint/.eslintrc.cjs` file.

Also take a glance at [Must use import to load ES Module .eslintrc.js](https://stackoverflow.com/questions/70487806/must-use-import-to-load-es-module-eslintrc-js) because `ESlint` is not fully support `ESM` now and pay attention to the method of resolving URL of the `tsconfig.json` (i.e. `project: path.resolve(__dirname, '../ts/tsconfig.json'`)).  
**For `ESM config` this will be going to be changed;**

`Prettier` is turned to use particularly default settings despite the `"singleQuote": true` (check out the `./configs/prettier/prettier.config.js` file). For only `.html` files `"printWidth"` rule set to `160` (twice as default `80`) to prevent unnecessary splitting attributes onto multiple lines (check the [How do you stop Prettier in VS code splitting attributes onto multiple lines? stackoverflow.com](https://stackoverflow.com/questions/56291245/how-do-you-stop-prettier-in-vs-code-splitting-attributes-onto-multiple-lines) for details);

It's preffered to use `Visual Studio Code` with `ESlint`, `Prettier` and `Format Code Action` extensions (theirs settings are at `.vscode/settings.json` for a current project only. Check [Using Prettier and ESLint to automate formatting and fixing JavaScript by Rob O'Leary (Feb 11, 2022)](https://blog.logrocket.com/using-prettier-eslint-automate-formatting-fixing-javascript/) and [vscode-eslint github](https://github.com/microsoft/vscode-eslint/blob/main/README.md) for details);

`Commitlint` is turned to the `conventional` set usage, but `'header-max-length': [2, 'always', 200]` rule is set commit header length up to 200 characters max. Also the `'type-enum'` ruleset includes `init` type (check out the `./configs/commitlint/commitlint.config.js` file);

`TypeScript` is also supported by the stuff above. There's a `TS` config file (`configs/ts/tsconfig.json`) and types declaration for `TS` (`configs/ts/global.d.ts`) to handle imported assets files (e.g. `.svg`, `.html`, `scss`, `css` etc).

---

### !Important

If you're out of tending to use the `TS` so step the following moves:

```bash
npm uninstall typescript @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-airbnb-typescript
```

- delete the `configs/ts` folder;
- in the `configs/eslint/.eslintrc.cjs` remove the next strings:

  ```js
    {
      files: ['*.ts'],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'airbnb-base',
        'airbnb-typescript/base',
        'prettier',
      ],
      plugins: ['@typescript-eslint'],
      parserOptions: {
        parser: '@typescript-eslint/parser',
        project: path.resolve(__dirname, '../ts/tsconfig.json'),
        ecmaVersion: 'latest',
      },
    },
    ...

    {
      env: {
        mocha: true,
        jest: true,
      },
      files: ['**/*.test.ts'],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'airbnb-base',
        'airbnb-typescript/base',
        'prettier',
      ],
      plugins: ['@typescript-eslint'],
      parserOptions: {
        parser: '@typescript-eslint/parser',
        project: path.resolve(__dirname, '../ts/tsconfig.json'),
        ecmaVersion: 'latest',
      },
    },

  ...

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

`tsconfig.json` is containing particularly default settings despite the chosen ones (check the file for more).

in the `"include"` (pathes are relative to the `tsconfig.json` file!):

```ts
[
  './',
  '../../src/**/*.ts',
  '../../src/**/*.js',
  '../../projectName/src/**/*.ts',
  '../../projectName/src/**/*.js',
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
- `.vscode/settings.json` - settings for appropraite work of the `ESlint` and `Prettier` VSCode extensions in a project (with a help of `Format Code Action` extension). There're settings and scripts for a usage of the configs (and ignore) files in the project (i.e. links to ones config files) and there's `end-of-line(EOF)` property that is set to `LF` (i.e. `"files.eol": "\n"`);
- `configs/` - the folder includes config and ignore files for: `ESlint`, `Prettier`, `Commitlint` and `TypeScript` packages. Currently about ignore files: `node_modules` and a few more folders are ignored (check `.gitignore` file);
- `.editorconfig` - the project common settings (as for now it's as in RSSchool recommended check the [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig) for more.  
  **notice**: `EditorConfig` IDE extension required!);
- `src/` - source folder for a future project;
- `.gitignore` - exlude `node_modules` and a few more folders from git watching (like `dist` etc, check the file for more);
- `LICENSE` - license file;
- `package.json` - the heart of all.
  Check the scripts (especially, the pathes for linting/prettier'ing. Currently: `'./src'`). Scripts already have CLI prefixes to link with config and ignore files;

### Execa usage:

`Execa` is a powerful tool for `NodeJS` based projects. it gives possibility to create `CI/CD` processes and to automate routine actions (like updating and regression testing of the boilerplate / project).

To install `Execa` run (as devDependencies)

```bash
npm i -D execa
```

Check the `configs/execa/main.js` script for details (it update's the boilerplate's packages and create `configs/execa/update-error.log` with result of the process).

for ease of use add the command to the `package.json/scripts`:

```json
"scripts": {
    "update:packages": "node ./configs/execa/main.js"
  },
```

---

**suggestion**:  
one can automate process even more by creating script that update and run regression tesing of all the projects / boilerplates.

e.g. the directory of all projects / boilerplates is `E:/Code learning`. Then create script, let's name it `update_all_packages.mjs` with this logic (**pay attention**: `E:/Code learning` doesn't contain any npm packages! `update_all_packages.mjs` just `import`s `Execa` from the closest existing repo to prevent catalog pollution and bloating!):

<details>
  <summary><b>E:/Code learning/update_all_packages.mjs</b> example (click to view)</summary>

```javascript
import {
  execaNode,
  ExecaError,
} from './boilerplate-eslint-prettier-husky/node_modules/execa/index.js';
import fs from 'fs/promises';
import path from 'path';

/**
 * Write log file with date and `No errors logged.` inner.
 * If `update-error.log` doesn't exist one will be created beside the script
 *
 * @param {string} pathToLogFile - path (absolute is prefered) to the log file
 * @param {string} logMessage - log message for writing into the log file
 *
 * @returns {Promise<void>}
 * @throws Error writing log: ${error.message}
 */
async function writeSuccessLogFile(pathToLogFile, logMessage) {
  try {
    // write logfile beside the script
    await fs.appendFile(
      pathToLogFile,
      `[${new Date().toLocaleString()}]\n No errors logged.\n\n${logMessage}`,
    );
    console.log(`Log has been written to the ${pathToLogFile}`);
  } catch (error) {
    console.error(`Error writing log: ${error.message}`);
  }
}

/**
 * Write log file with date and error message inside.
 * If `update-error.log` doesn't exist one will be created beside the script
 *
 * @param {string} pathToLogFile - path (absolute is prefered) to the log file
 * @param {Error | ExecaError} error - object Error
 *
 * @returns {Promise<void>}
 * @throws Error writing log: ${error.message}
 */
async function writeErrorLogFile(pathToLogFile, error) {
  try {
    // write logfile beside the script
    await fs.appendFile(
      pathToLogFile,
      `[${new Date().toLocaleString()}] ${error.message}${
        (error instanceof ExecaError ? error.stderr : error) ??
        'No stderr available.'
      }\n`,
    );
    console.log(`Log has been written to the ${pathToLogFile}`);
  } catch (error) {
    console.error(`Error writing log: ${error.message}`);
  }
}

/**
 * Execute NodeJS command `node path/to/script.js` for every path in the {@link array}.
 * P.S. independantly to OS.
 *
 * @param {string[]} array - array of pathes (strings)
 *    to boilerplate's / project ' s `configs/execa/main(js|ts)`
 * @returns {Promise<string[]>}
 * @throws ExecaError occur: ${error.message} - if error was thrown from the Execa
 * @throws ${error.message} - if error happend in another one case
 */
async function runNodeScript(array) {
  /** @type {string[]} */
  const arrOfLogs = [];

  for (const pathToScript of array) {
    /** @type {string} */
    const pathToScriptNormalized = path.resolve(pathToScript);
    // configs/execa/main.(j|t)s is a folder with execa script (JavaScript or TypeScript one)
    // this sctructure is the same (and must be the same!) in every project / boilerplate
    /** @type {string} */
    const currentScriptCWD = pathToScript.replace(
      /\/configs\/execa\/main\.(j|t)s$/gi,
      '',
    );
    // use `cwd` option to prevent pathes problems!!!
    try {
      /**
       * @type {import("./boilerplate-eslint-prettier-husky/node_modules/execa/index.d.ts").Result}
       * @example
       *    string like this:
       *    'start checking for outdated packages...
       *    All packages are up-to-date. Skipping npm update.
       *    Log has been written to the
       *      E:\Code learning\integration-playground__webpack-react-ts\configs\execa\update-error.log'
       */
      const { stdout } = await execaNode(pathToScriptNormalized, {
        cwd: currentScriptCWD,
        verbose: 'full',
        cleanup: true,
      });

      arrOfLogs.push(stdout ?? 'empty stdout');

      console.log(`${currentScriptCWD}: successfully executed!`);
    } catch (error) {
      if (error instanceof ExecaError) {
        console.error(`ExecaError occur: ${error.message}`);
      } else {
        console.error(error.message);
      }
    }
  }

  return arrOfLogs;
}

/**
 * Update the project's | bolerplate's packages and run commands / tests
 * for regression testing and compatibility. If errors occur check the `update-projects-packages.log`
 * or `update-error.log` in the boilerplate's / project's configs/execa/update-error.log
 *
 * @returns {Promise<void>}
 * @throws An error occured: ${error.message}
 */
async function main() {
  const currentDir = path.resolve();

  const logFile = path.resolve(currentDir, `./update-projects-packages.log`);

  /** @type {string[]} */
  const arrOfScriptPathes = [
    './integration-playground__webpack-react-ts/configs/execa/main.js',
    './integration-playground__webpack-react-js/configs/execa/main.js',
    './boilerplate-webpack-gulp-html-scss-ts-components/configs/execa/main.js',
    './boilerplate-webpack-gulp-html-scss-js-components/configs/execa/main.js',
    './design-patterns/configs/execa/main.js',
    './boilerplate-codewars/configs/execa/main.js',
    './boilerplate-eslint-prettier-husky/configs/execa/main.js',
    './boilerplate-jest/configs/execa/main.js',
    './boilerplate-webpack-react-js/configs/execa/main.js',
    './boilerplate-webpack-react-ts/configs/execa/main.js',
    './rs_school/rsschool-cv/configs/execa/main.js',
    './youtube-dl_utility/configs/execa/main.js',
  ];

  // clean up the log file
  await fs.writeFile(logFile, '');

  console.log(`start running updating scripts...`);

  try {
    /** @type {string[]} */
    const logMessage = await runNodeScript(arrOfScriptPathes);

    // write logfile beside the script
    await writeSuccessLogFile(logFile, logMessage.join('\n\n'));
  } catch (error) {
    console.error(`An error occured: ${error.message}`);

    // write logfile beside the script
    await writeErrorLogFile(logFile, error);
  }
}

main();
```

</details>
<br/>

then just run `node update_all_packages.mjs` from the `E:/Code learning` and check logs in the terminal and `E:/Code learning/update-projects-packages.log` for details.

---

`Execa` contains all the necessary types annotations and it's scripts can be written in `TypeScript` ([Execa and TypeScript](https://github.com/sindresorhus/execa/blob/main/docs/typescript.md)). In a next coming releases of `NodeJS` that will support `TypeScript` as native one it will be pretty sweet for usage)

### Integration with [`Connections`](#Connections) links:

To integrate the boilerplate do the following steps (**note**: copy the project structure as is!!!):

- add the following lines to the `package.json`:

```json
...
"type": "module",
"scripts": {
  "lint": "npx eslint ./src --ignore-path ./configs/eslint/.eslintignore --config ./configs/eslint/.eslintrc.cjs",
  "lint:fix": "npx eslint ./src --ignore-path ./configs/eslint/.eslintignore --config ./configs/eslint/.eslintrc.cjs --fix",
  "prettier": "npx prettier ./src --check --ignore-path ./configs/prettier/.prettierignore --config ./configs/prettier/prettier.config.js",
  "prettier:fix": "npx prettier ./src --write --ignore-path ./configs/prettier/.prettierignore --config ./configs/prettier/prettier.config.js",
  "format": "npm run prettier:fix && npm run lint:fix",
  "prepare": "husky",
  "tsc": "npx tsc -p configs/ts/tsconfig.json"
},
...
```

- copy the `.husky`, `.vscode`, `configs`, `.editorconfig`, `.gitignore` (optionally);

- install current packages as `devDependencies` via bash command below:

```bash
npm i -D @commitlint/cli @commitlint/config-conventional @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-config-airbnb-base eslint-config-airbnb-typescript eslint-config-prettier eslint-plugin-import husky prettier typescript
```

- do all the steps from the top of the document's [# !Important](#!Important) (i.e. rename `projectName`, delete unnecessary files, check and correct the `tsconfig.json` 's property `"include": []` to have actual(!) right passes not to be like `'../../projectName/src/**/*.ts','../../projectName/src/**/*.js'` (!!!));

**With the new packages releases, the ones above can turn to pumpkin, so check'em out with official docs!!!**

### Links:

#### VSCode usage' links:

- [Using Prettier and ESLint to automate formatting and fixing JavaScript by Rob O'Leary (Feb 11, 2022)](https://blog.logrocket.com/using-prettier-eslint-automate-formatting-fixing-javascript/);

#### TypeScript:

- [The official website of the TypeScript](https://www.typescriptlang.org/);
- [The official github of the TypeScript](https://github.com/microsoft/TypeScript);
- [Linting in TypeScript using ESLint and Prettier by Paul Ccari (Sep 26, 2023)](https://blog.logrocket.com/linting-typescript-eslint-prettier/);
- [Example of the .eslintrc.js by Matt Turnbull(iamturns)](https://github.com/iamturns/create-exposed-app/blob/master/.eslintrc.js);
- [VS Code ESLint extension](https://github.com/microsoft/vscode-eslint/blob/main/README.md#using-eslint-to-validate-typescript-files);
- ["parserOptions.project" has been set for @typescript-eslint/parser](https://stackoverflow.com/questions/58510287/parseroptions-project-has-been-set-for-typescript-eslint-parser);
- [About the TypeScript config options](https://www.typescriptlang.org/tsconfig);
- [About the TypeScript tsc CLI Options](https://www.typescriptlang.org/docs/handbook/compiler-options.html);
- [Files with the same name (without extensions) are not parsable](https://github.com/typescript-eslint/typescript-eslint/issues/955);
- [The official page of tsx at npmjs.com](https://www.npmjs.com/package/tsx);
- [The official GitHub repository of tsx](https://github.com/privatenumber/tsx);

#### ESLint:

- [ESlint official documentation](https://eslint.org/docs/latest/);  
  Changes with ESlint v9.0.0 coming soon! (flat config, ES modules).  
   TODO! Change then the `eslintrc.cjs` => `eslint.config.js` and dig deeper using Docs!
- [VS Code ESLint extension by Microsoft](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint);
- [eslint rules recommended](https://eslint.org/docs/latest/rules/);
- [eslint-config-airbnb-base by airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base);
- [eslint-config-airbnb-typescript at npmjs.com](https://www.npmjs.com/package/eslint-config-airbnb-typescript);
- [The official github of the eslint-config-airbnb-typescript](https://github.com/iamturns/eslint-config-airbnb-typescript?tab=readme-ov-file);
- [The official website of typescript-eslint](https://typescript-eslint.io/);
- [The official github of the typescript-eslint](https://github.com/typescript-eslint/typescript-eslint);
- [@typescript-eslint/eslint-plugin at npmjs.com](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin);  
  **note**: deprecated now! Check the typescript-eslint Setup for actual one.
- [@typescript-eslint/parser at npmjs.com](https://www.npmjs.com/package/@typescript-eslint/parser);  
  **note**: deprecated now! Check the typescript-eslint Setup for actual one.
- [Actual typescript-eslint Setup](https://typescript-eslint.io/getting-started/);
- [Legacy typescript-eslint Setup](https://typescript-eslint.io/getting-started/legacy-eslint-setup/);
- [plugin:@typescript-eslint/recommended rules](https://typescript-eslint.io/rules/);
- [the official page of eslint-plugin-import at npmjs.com](https://www.npmjs.com/package/eslint-plugin-import);
- [the official github repo of eslint-plugin-import](https://github.com/import-js/eslint-plugin-import);
- [eslint-config-prettier by prettier](https://github.com/prettier/eslint-config-prettier);
- [In an eslint config, do 'extends' in an 'overrides' replace or do they merge with 'extends' up in the main section?](https://github.com/eslint/eslint/discussions/17174);

#### Prettier:

- [Prettier official documentation](https://prettier.io/docs/en/);
  TODO! Changes coming soon, check the prettier configs;
- [Prettier Formatter for Visual Studio Code by Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode);

#### Husky:

- [Husky official documentation](https://typicode.github.io/husky/);  
  Changes coming soon! New features will take place.
  TODO! Change the husky and commitlint configs!

- [Commitlint official documentation](https://commitlint.js.org/#/);

- [conventional-changelog official documentation for validating commit messages (code worldwide usaging keywords)](/https://github.com/conventional-changelog/commitlint);

#### Execa:

- [Execa at npmjs.com](https://www.npmjs.com/package/execa);
- [Execa official GitHub repo](https://github.com/sindresorhus/execa);
- [Execa official documentation](https://github.com/sindresorhus/execa/blob/main/readme.md#documentation);
- [Execa guide at jsdocs.io](https://www.jsdocs.io/package/execa);
- [Execa tutorial at blog.logrocket.com](https://blog.logrocket.com/running-commands-with-execa-in-node-js/);

#### Connections:

- [boilerplate-jest](https://github.com/Dmitriy-Frostoff/boilerplate-jest);
- [boilerplate-webpack-gulp-html-scss-js-components](https://github.com/Dmitriy-Frostoff/boilerplate-webpack-gulp-html-scss-js-components);
- [boilerplate-webpack-gulp-html-scss-ts-components](https://github.com/Dmitriy-Frostoff/boilerplate-webpack-gulp-html-scss-ts-components);

#### done: December 05, 2024
