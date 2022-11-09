# Backend Challenges

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

## Challenge 5 - NFT Contract

From here on outward it might feel you are being thrown into the deep end a bit - but that's ok. Don't be intimidated by the somewhat larger contracts and tests. They contain some new things, but they are documented for you to review at your own pace, with some useful links. You don't have to immediately understand everything. The goal here is to get your hands dirty with the main functionalities of an NFT smart contract.

We will be listing the NFT challenges first. Below them are useful pieces of information that will help you better understand NFT smart contracts, IPFS and solidity.

Take a look at `Challenge_5.sol`. Roughly speaking, you can make out the following components:

- [imports](#solidity-libraries-and-openzeppelin)
- [constructor](#constructors)
- variables / constants / mappings to keep track of things
- [tokenURI](#tokenURI)
- [mint](#mint-functions)

Once you have skimmed through the contract and gotten a general idea for yourself, let's continue on to the test file. Go ahead and open up `Challenge_5.t.sol`

Generally, the structure here is as follows:

- setup
- specific tests with some new cool things like cheat codes
- fuzz tests

Once you've wrapped your head around the structure, let's go ahead and run the test to see what happens.

`forge test --match-contract Challenge5 -vv`

You might have noticed the console.log() statements appearing, this has to do with the -vv flag (for verbosity). If you'd like, try decreasing / increasing the amount of v's and see what happens.

### Solidity libraries and openzeppelin
In solidity, you can import libraries that will make life easier. OpenZeppelin is a company that provides free standardized contract libraries to use, such as ERC721. These contracts are firmly audited, meaning they are generally secure to implement in your contracts.

ERC721 a standard for NFT smart contracts. There are others, such as ERC1155 by Enjin, and ERC721A by Azuki, each with their own set of functionalities. For the workshop, ERC721 NFT's will suffice.

* https://docs.openzeppelin.com/contracts/3.x/
* https://docs.openzeppelin.com/contracts/3.x/api/token/erc721

### Constructors
A constructor is a special function that is used to initialize state variables. An ERC721 contract, for example, requires two constructor parameters called "Name" and "Symbol", i.e. "Ethereum" and "ETH". Also, in this case, we set our max allowed supply of NFT's via the constructor. 

When you deploy a smart contract, you will pass these arguments to the constructor.

### TokenURI
If you are familiar with [Opensea](https://opensea.io/), you might be wondering: how on earth do they get the NFT images and metadata? Well, often times these images are stored on chain, on IPFS, or even in the cloud. As on-chain storage is expensive, images are more often than not stored off chain. 

Your smart contract provides a way to tell Opensea which image belongs to which NFT, and where the files are stored through a function called ```tokenURI()```. Opensea simply looks for this function in your smart contract, and parses the return value.

### Mint Functions
Minting is the core of getting tokens out there on the blockchain. NFT's are Non Fungible Tokens, and they have to be minted. In the past, these functions required a lot of [gas](https://cryptomarketpool.com/gas-in-solidity-smart-contracts), but more and more standards are being developed to make minting cost less ETH, such as ERC721A.