# Testing

#### Unit testing

[jest](https://jestjs.io/) is set up and ready to write and run unit tests. The test suit can be run with `yarn test`. In order to run the tests in watch mode for test driven development, run `yarn tdd`.

```shell
yarn test

# alternatively, to run tests in watch mode:
yarn tdd
```

#### Integration testing

> The more your tests resemble the way your software is used, the more confidence they can give you. https://twitter.com/kentcdodds/status/977018512689455106

The recent advice is towards a more integrated approach in testing.
You want your tests to avoid including implementation details so refactors of your components (changes to implementation but not functionality) don't break your tests and slow you and your team down. For React components, this means to avoid shallow rendering. And in general, to stop mocking so much stuff.

Read more here: https://kentcdodds.com/blog/write-tests or https://testingjavascript.com/

#### End-to-end testing

End-to-end (e2e) tests are functional tests for automated click-testing of critical paths. It is better to automate this rather than relying on the users to do the testing.
This project is using [Cypress](https://docs.cypress.io/guides/overview/why-cypress.html#In-a-nutshell) as end-to-end testing framework. [cypress-axe](https://github.com/avanslaars/cypress-axe) is used to uncover accessibility issues.

To run the tests locally, start the development server and run `yarn cy:open`, which opens the interactive test runner.

```
yarn cy:open
```

You can watch tests run in real time as you develop your applications. TDD FTW 🤩!

It is also possible to run the tests and get the results in the command line only with `yarn cy:run`.

Some **testing strategies** with Cypress:

- write specs that will solely test a single behavior
- each spec should be written in isolation and avoid coupling
- avoid brittle selectors, use `data-*` attributes instead (e.g. `data-cy="my-div"`)
- set state directly/programmatically before testing (e.g. use the endpoint to [request](https://docs.cypress.io/api/commands/request.html) a login token instead of making cypress click the login button)

Read more on best practices here: https://docs.cypress.io/guides/references/best-practices.html
