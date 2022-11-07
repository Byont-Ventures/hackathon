# Hackathon preparation

This readme file is a WIP and the coding challenges will be updated regularly up until the hackathon.

During the hackathon you will get started on developing your (first) NFT! But before that, we ask you to do perform some initial steps so we can get started to developing right away!

## 1. Get a test crypto wallet

For the hackathon, we recommend using Metamask. This is a crypto wallet that can be added as a [browser extension.] (https://metamask.io/)

You can use this wallet for testing during the hackathon. Do not store real funds on this wallet!

### Wallet password

At some point, the wallet will ask you to configure a password. This is to unlock your wallet in your browser, but this is **not** the real key to your wallet!

### Seed phrase

Metamask will generate a seed phrase for you. Write down this seed phrase and keep it secure. If someone has access to your seed phrase, they will be able to access your wallet, all the accounts within the wallet, and therefore all the funds! It is therefore best to get rid of this wallet after the hackathon, and create a new wallet in a more secure environment if you wish. Only use this one for testing purposes.

### Private key

Metamask holds your private key in the browser's data store. A private key is a string of letters and numbers and provides access to an account. In a wallet with multiple accounts, every account has a different private key. Never share your private key with anyone as they will be able to access your account and all the funds!

## 2. Clone this repo
 
## 3. Install Foundry

Foundry is a smart contract development toolchain. Foundry manages your dependencies, compiles your project, runs tests, deploys, and lets you interact with the chain from the command-line and via Solidity scripts.

### Why Foundry?

There are other frameworks like Hardhat and Truffle if you wish to use them the main drawbacks here are that you will have to write your tests in Javascript, and you will have to communicate with your smart contracts using libraries. Using Foundry, you can write tests directly in Solidity. Furthermore, you can easily implement fuzz testing and traces that will give you exact information on what happens during a function call.

### How to set up Foundry

Foundry has excellent [documentation](https://book.getfoundry.sh/getting-started/installation) available on how to get started, should you want to explore for yourself.

**Note:** To see if Foundry has been installed correctly, type `forge` in your terminal. If the command is not recognized, try it in a new terminal.

## 4. Install other packages
Run ```yarn install``` and wait for the process to complete.
Then, you're all set to start building your first Web3 Dapp during the hackathon!

If the following commands are working for you, you won't have to do anything else!

```forge```
```anvil```
```yarn run fe:dev``` (This will give you an error in the browser if you don't have anvil running simultaneously in a separate terminal but that's ok)

If you are having any issues or if you have any questions, please don't hesitate to contact us!

# Coding Challenges

This is a collection of coding challenges to get you warmed up. The end goal is to eventually build an NFT! The coding challenges will help you get a bit of an understanding of things. Remember that sometimes there are multiple ways to get to a solution, and do not feel ashamed to look things up online or ask questions if you are lost.

The challenges will be divided into three categories:

- [Backend](#backend) => Solidity, testing with Foundry
- [Frontend](#frontend) => Build components around given web3 hooks
- [Stretch](#stretch) => More advanced

# Backend

These challenges provide a way to get started with foundry, solidity and NFT's. Usually the goal is to fix an error / write a new function in a test file, solidity file, or both. Simultaneously, the challenges will be examples of how things work in Solidity, how NFT smart contracts are structured, how to test your files, and how smart contracts are deployed.

## Challenge 1 - Hello World!

Take a look at the `smart-contracts` folder. Here, the important sub-folders are

- `scripts` => Has a file that contains the logic that is called when you run tests with `forge test` (this will run all the files)
- `src` => Contains all the actual smart contracts.
- `tests` => In here, you can write your test files.

For this challenge, there is a smart contract called `Challenge_1.sol`. This contract has a `string message`, and a function `showMessage()` that returns the message. There is also a test file called `Challenge_1.t.sol` (test files should always have the extension t.sol), and it initiates the `Challenge_1.sol` contract so we can call its functions. It runs the `setUp()` function from Foundry, this is ran before every test you write in the file. For more information, check out the [Foundry book](https://book.getfoundry.sh/forge/writing-tests).

Whew, we did a lot of stuff, but yet so little! Take a sip of your coffee. Breathe in, breathe out. When you're ready, go ahead and run your first test by typing `forge test --match-contract Challenge1` (--match-contract is a flag that enables you to run a specific test contract). Sit back, and enjoy the dopamine of that green checkmark.

## Challenge 2 - Hello???

First things first - to make testing easier, from now on, stuff has been commented out. Otherwise the compiler is going to complain about incomplete functions and the like. So take a look at the test files and the contracts, and uncomment it!

The message in the contract `Challenge_2.sol` has not been initialized yet. The goal give it the value 'Hello World' using a setter function! Well... The function is not built yet, but don't worry, there are some useful hints in the contract and test files to help you build.

## Challenge 3 - Hello + World

Once again, don't forget to uncomment the challenge code. You can leave the previous challenge code uncommented - provided everything works, of course.

Let's add a tiny bit of spice. This time around, the goal is to write a function that adds a string to the incomplete message. The tests are also incomplete. Eventually, you should be able to add something to the message so that it becomes 'Hello World!'. Feel free to look back to other tests or the foundry books to see how it's done.

## Challenge 4 - Solidity versions

The goal of the challenge is the same. But what's going on here? If you run the test, Foundry will complain about compiler versions. Take a look at `foundry.toml` in the root folder. In the `profile.default` section, you will see that the solidity compiler is specified to be 0.8.17 - but the contracts in this challenge require a different compiler version!

Luckily, you can tell Foundry which compiler version to use. You can even have it auto-detect the compiler versions. Go ahead and comment out the line where it says `solc = ">=0.8.17"`. Below, we have added a new line that auto detects the compiler version. Uncomment that and save the file. Now, whenever you run a test, Foundry will auto-detect your compiler version.

But there is another problem. Why does `string.concat()` not work? Perhaps it has something to do with the compiler versions used in the contracts. Take a look [here](https://ethereum.stackexchange.com/questions/729/how-to-concatenate-strings-in-solidity) on how you are allowed to concatenate strings in different solidity versions, and [here](https://docs.soliditylang.org/en/v0.8.17/080-breaking-changes.html) on how different solidity versions behave in general. **You will encounter a lot of different compiler versions in the wild, and it is therefore good to know where to check certain behaviors.**

# Web3 template

If you are here for the hackathon, you won't have to do anything below this point - all set!

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
