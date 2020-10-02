# Developer guide

## 🚀 Start developing

1.  **Make sure to use the correct node version.**

    Assuming you already have `nvm` installed on your machine, this is installing the node version specified in `.nvmrc`.

    ```shell
    nvm install
    ```

    💡You can [configure your shell](https://github.com/nvm-sh/nvm#deeper-shell-integration) to automatically call `nvm use` when entering a directory with a `.nvmrc` file. That way you don't have to remember this step.

1.  **Install the dependencies.**

    This assumes that you already cloned the repository and have yarn installed globally on your machine.

    ```shell
    yarn install
    ```

1.  **Add the environment variables**

    Copy the `.env.example` file and add the secrets.

    ```shell
    # for use within yarn develop
    cp .env.example .env.development

    # for use within yarn build
    cp .env.example .env.production
    ```

1.  **Start developing.**

    ```shell
    yarn develop
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

## ✅ Quality assurance

### Formatting

This project uses [Prettier](https://prettier.io/docs/en/why-prettier.html) to standardise code formatting. This eliminates the need to discuss style in code review. The rules applied are configured in the [.prettierrc](.prettierrc) file. It is recommended to allow your editor to format on save.

You can run `yarn format` to apply the formatting rules to all files.

```shell
yarn format
```

### Linting

This project uses [ESLint](https://eslint.org/docs/user-guide/getting-started) for identifying and reporting on patterns found in ECMAScript/JavaScript code, with the goal of making code more consistent and avoiding bugs. The rules applied are configured in the [.eslintrc.js](.eslintrc.js) file.

You can run `yarn lint` to check for linting errors in all javascript files, or run `yarn lint:fix` to apply automatic fixes to the code.

```shell
yarn lint

# alternatively, to apply automatic fixes:
yarn lint:fix
```

### Testing

Our testing setup uses [jest](https://jestjs.io/) and [cypress](https://docs.cypress.io/guides/overview/why-cypress.html#In-a-nutshell).
You can run the test suits with `yarn test` and `yarn cy:run`, respectively.

```shell
yarn test
```

```shell
yarn cy:run
```

For more details see [../test/README.md](../test/README.md).
