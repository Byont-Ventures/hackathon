# Hackathon preparation

## 1. Get a test wallet

For the hackathon, we recommend using Metamask. This is a crypto wallet that can be added as a [browser extension.] (https://metamask.io/)

You can use this wallet for testing during the hackathon. Do not store real funds on this wallet!

### Wallet password

At some point, the wallet will ask you to configure a password. This is to unlock your wallet in your browser, but this is **not** the real key to your wallet!

### Seed phrase

Metamask will generate a seed phrase for you. Write down this seed phrase and keep it secure. If someone has access to your seed phrase, they will be able to access your wallet, all the accounts within the wallet, and therefore all the funds! It is therefore best to get rid of this wallet after the hackathon, and create a new wallet in a more secure environment if you wish. Only use this one for testing purposes.

### Private key

Metamask holds your private key in the browser's data store. A private key is a string of letters and numbers and provides access to an account. In a wallet with multiple accounts, every account has a different private key. Never share your private key with anyone as they will be able to access your account and all the funds!

# Web3 template

- [Web3 template](#web3-template)
- [Smart contract](#smart-contract)
  - [1. Install packages](#1-install-packages)
  - [2. Install foundry](#2-install-foundry)
  - [3. Smart contract style guide](#3-smart-contract-style-guide)
    - [A few highlights](#a-few-highlights)
      - [Error messages for `requires()`](#error-messages-for-requires)
      - [Development](#development)
      - [Add a smart contract to the project](#add-a-smart-contract-to-the-project)
- [Frontend](#frontend)
  - [Installation](#installation)
  - [Development](#development-1)
    - [Running locally](#running-locally)
    - [Running a server](#running-a-server)
    - [Testing](#testing)
  - [Contributing](#contributing)

# Smart contract

## 1. Install packages

```
npm install --global yarn@1.22.19
```

Then in the root of this repo:

```
FONTAWESOME_NPM_AUTH_TOKEN=XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX yarn install
```

## 2. Install foundry

See the [docs](https://book.getfoundry.sh/getting-started/installation.html).

## 3. Smart contract style guide

For solidity smart code, solidity.org has published its [standard](https://docs.soliditylang.org/en/develop/style-guide.html) which is similar to python’s [pep8](https://www.python.org/dev/peps/pep-0008/#a-foolish-consistency-is-the-hobgoblin-of-little-minds).

Also, the project has configured automatic formatter for [visual code](https://code.visualstudio.com/), which enables the auto-format in `.vscode/settings.json`.

Solhint is enabled with plugin [prettier](https://github.com/prettier-solidity/prettier-plugin-solidity) to alert possible coding style mistake.

To configure/exclude certain rules reported by solhint, `.solhint.json` should be edited. for more details please refer solhint config documentation [here](https://github.com/protofire/solhint/blob/master/docs/rules.md#best-practise-rules).

### A few highlights

#### Error messages for `requires()`

```solidity
require(<statement>, "<contract name> (<function name>): <error message>");
```

#### Implementing an interface

When a contract implements an interface add the interface which you are implementing above the set of function.

Additionally, all functions in an interface should have [natspec](https://docs.soliditylang.org/en/develop/natspec-format.html) comments. When implementing the function from the interface make sure to inherit the comments.

```solidity
interface IMyInterface {
  /// @notice Does the important thing
  /// @dev Should only be called on Tuesdays
  /// @param value The value to process
  function a(uint256 value) external;
}

contract MyContract is IMyInterface, IOtherInterface {
  //--------------------------------------------------
  // IMyInterface
  //--------------------------------------------------

  /// @inheritdoc IMyInterface
  function a(uint256 value) external override {
    uint256 b = value * 2;
  }

  //--------------------------------------------------
  // IOtherInterface
  //--------------------------------------------------
  ...
}
```

#### Development

Changing the used solc version can be done in [foundry.toml](./foundry.toml).

#### Add a smart contract to the project

A new smart contract can be created in this project by simply making a new file in the `/src/smart-contracts` and `/test/smart-contracts` folder. Scripts can be placed in scripts/smart-contracts/

# Frontend

[![Production](https://github.com/Byont-Ventures/web3-template/actions/workflows/production.yml/badge.svg?branch=main)](https://github.com/Byont-Ventures/web3-template/actions/workflows/production.yml)

The Byont website repository holds all the source code for the website. This repository is largely based on the [Shopify Polaris (`polaris-react`)](https://github.com/Shopify/polaris/tree/main/polaris-react).

## Installation

**Prerequisites**: `yarn > 1.22.x`, and `node > 16.x.x`.

```sh
cp .env.example .env.local

FONTAWESOME_NPM_AUTH_TOKEN=XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX yarn install

# Generate boilerplate code for gRPC
yarn buf:generate
```

## Development

Before getting started we suggest reading our [Contributing Guidelines](/CONTRIBUTING.md).

### Running locally

```sh
# Run the entire website locally
yarn dev
```

### Running a server

We've included a small webserver that implements the gRPC services for local testing. See the [server documentation](/.server/README.md) for more information.

### Testing

We use [Jest](https://jestjs.io/) to test all components of our application. You can test these components using `yarn test`. Alternatively you can run Jest in watch mode using `yarn test:watch`. Watch mode also enables to specify the name or path to a file to focus on a specific set of tests.

```sh
# Run all tests
yarn test

# Run all tests and watch for changes
yarn test:watch
```

## Contributing

Pull requests are welcome. See the [contribution guidelines](/CONTRIBUTING.md) for more information.

- https://github.com/tmm/testing-wagmi
- https://github.com/httptoolkit/mockthereum
