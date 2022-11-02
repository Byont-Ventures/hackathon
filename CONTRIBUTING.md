# How to contribute

We want to make it as easy and transparent as possible to contribute. If you feel like we can make this proces any easier make sure to file [an issue](https://github.com/Byont-Ventures/web3-template/issues/new).

## Code style

We use an automatic code formatter called [Prettier](https://github.com/prettier/prettier). Run `yarn format` after making any changes to the code. Most formatting errors can be automatically fixed by running `yarn format:fix`.

Linting will catch common issues that may exist in your code. You can check the status of your code styling by running `yarn lint`.

Our code editor of choice is VS Code which has integrations with Prettier and our linting tools which make this automatic. If you choose to use VS Code, these integrations will be listed as recommended extensions (or search for `@recommended`) in the extensions panel.

## Pull requests

We'll review your pull request and either merge it, request changes to it, or close it with an explanation. We'll do our best to provide updates and feedback throughout the process.

Before submitting a pull request, please:

- Install the project dependencies, see our [installation instructions](/README.md#installation) for more information;
- If you’ve fixed a bug or added code to a component, make sure to add tests;
- Ensure the test suite passes with yarn test (protip: `yarn test:watch` is helpful in development);
- Format your code with `yarn format`;
- Make sure your code lints with `yarn lint`.

Earn a free 💯 emoji if you:

- Publish the results of the bundle sizes using `NEXT_ANALYZE_BUNDLE=true yarn build`;
- Include a list of browsers and screens tested.

## Conventional Commits

We use the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) conventions as much as possible based on the [Angular commit guidelines](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines).

These look like `chore: creates ci configuration`, and `feat(button): adds default aria-label`.

If haven't used Conventional Commits before you can start by using the [Conventional Commits VS Code plugin](https://marketplace.visualstudio.com/items?itemName=vivaxy.vscode-conventional-commits). You can run the plugin by looking for `> Conventional Commits` in the VS Code Command Palette (`cmd+p`). Alternatively you can use the command `yarn commit`. This will prompt a CLI interface which helps you create your first conventional commit.

## Browser support

We support the latest two versions of all major browsers unless otherwise noted. Most notably we **don't** support Internet Explorer. Some browsers that are frequently used to access the Byont website include:

- Google Chrome
- Mozilla Firefox
- Apple Safari for MacOS
- Microsoft Edge
- Opera
- Apple Safari for iOS
- Google Chrome for Android

> Tailwind might contain features that are not supported by all modern browsers yet (e.g, `:focus-visible`). Whenever using modern browser APIs we recommended checking support for it using [Can I Use](caniuse.com). See [Tailwind - Browser Support](https://tailwindcss.com/docs/browser-support) for more information.

## Manual visual regression testing

When performing a manual visual regression test you might want to test the website on your device. Most office networks don't support accessing servers running on personal IP addresses. You can still test the website on your device by setting up a [ngrok](https://ngrok.com/) tunnel.

We suggest following the installation guide on the [ngrok website](https://ngrok.com/docs/). You might be prompted to create a free account. You can start a tunnel by running the following commands:

```sh
yarn dev
ngrok http 3000 -region eu
```

You can also run the ngrok tunnel directly from VS Code using [this extension](https://marketplace.visualstudio.com/items?itemName=philnash.ngrok-for-vscode).

## Building the application

We try to keep the intial load bundle size of the production version of the application as low as possible. A good practice to follow, especially when adding packages, is by looking at the [Webpack Bundle Analyzer](https://github.com/vercel/next.js/tree/canary/packages/next-bundle-analyzer).

You can execute the bundle analyzer by running the following command:

```sh
NEXT_ANALYZE_BUNDLE=true yarn build
```

## Writing tests

TODO: https://github.com/Byont-Ventures/web3-template/issues/8

- https://testing-library.com/docs/react-testing-library/setup

## Coding standards

TODO: https://github.com/Byont-Ventures/web3-template/issues/9
