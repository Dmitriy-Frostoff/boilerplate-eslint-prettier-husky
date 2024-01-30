# eslint-prettier-husky-boilerplate

It's a boilerplate for usage of `eslint`, `prettier` and `husky` (with `commit-msg and pre-commit hooks`) in a future project. Check out the docs below to be in `actual tune`!

`Important!!! Before usage, check the actuality of the scripts and settings by links below!!! The currents one could be outdated.`

### The boilerplate structure and brief descriptions:

- .husky - folder for husky's hooks (with hooks config);
- .vscode/settings.json - settings for appropraite work of the ESlint and Prettier VSCode extensions! There're scripts for usage of the configs (and ignore) files in the project (i.e. links to config files for extensions);
- configs/ - the folder includes config and ignore files for: ESlint, Prettier, Commitlint packages. Currently about ignore files: only node_modules are ignored;
- src/ - source folder for a future project;
- .gitignore - exlude node_modules from git watching;
- LICENSE - license file;
- package.json - the heart of all.
  Check the scripts (especially, the pathes for linting/prettier'ing. Currently: './src'). Scripts already have CLI prefixes to link with config and ignore files;

  With the new packages releases, the ones above can turn to pumpkin, so check'em out with official docs!!!

### Links:

- [Using Prettier and ESLint to automate formatting and fixing JavaScript by Rob O'Leary (Feb 11, 2022)](https://blog.logrocket.com/using-prettier-eslint-automate-formatting-fixing-javascript/)

- [ESlint official documentation](https://eslint.org/docs/latest/) Changes with ESlint v9.0.0 coming soon! (flat config, ES modules). TODO! Change the eslintrc.js => eslint.config.js and dig deeper!
- [VS Code ESLint extension by Microsoft](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

- [Prettier official documentation](https://prettier.io/docs/en/) TODO! Changes coming soon, check the prettier configs.
- [Prettier Formatter for Visual Studio Code by Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

- [Husky official documentation](https://typicode.github.io/husky/) Changes coming soon! New features will take place. TODO! Change the husky and commitlint configs!

- [Commitlint official documentation](https://commitlint.js.org/#/)

- [conventional-changelog official documentation for validating commit messages (code worldwide usaging keywords)](/https://github.com/conventional-changelog/commitlint)

#### created: January 30, 2024
