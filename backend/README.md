# Backend Challenges

These challenges provide a way to start with Foundry, Solidity, and NFTs. Usually, the goal is to fix an error / write a new function in a test file, solidity file, or both. Simultaneously, the challenges will be examples of how things work in Solidity, how to structure NFT smart contracts, test your files, and deploy smart contracts.

- [Backend Challenges](#backend-challenges)
  - [Challenge 1 - Hello World!](#challenge-1---hello-world)
    - [Foundry flags](#foundry-flags)
    - [Memory and other data locations](#memory-and-other-data-locations)
  - [Challenge 2 - Hello???](#challenge-2---hello)
    - [What do `public`, `view`, etc. mean](#what-do-public-view-etc-mean)
  - [Challenge 3 - Hello + World](#challenge-3---hello--world)
  - [Challenge 4 - Solidity versions](#challenge-4---solidity-versions)
  - [Challenge 5 - NFT Contract](#challenge-5---nft-contract)
    - [Constructors](#constructors)
    - [Solidity libraries and openzeppelin](#solidity-libraries-and-openzeppelin)
  - [Challenge 6 - BaseURI, TokenURI](#challenge-6---baseuri-tokenuri)
  - [Challenge 7 - Minting](#challenge-7---minting)
    - [Mint Functions](#mint-functions)
    - [`msg.sender` and `tx.origin`](#msgsender-and-txorigin)
    - [Vm.startPrank() and others](#vmstartprank-and-others)
  - [Challenge 8 - Adding some checks](#challenge-8---adding-some-checks)
  - [Challenge 9 - Modifiers and Ownable](#challenge-9---modifiers-and-ownable)
  - [Challenge 10 - Keeping track of mints using mappings](#challenge-10---keeping-track-of-mints-using-mappings)
  - [Challenge 11 - Upload data to IPFS](#challenge-11---upload-data-to-ipfs)
    - [IPFS, Opensea, and Metadata](#ipfs-opensea-and-metadata)
    - [Create a Pinata account](#create-a-pinata-account)
    - [Upload images to IPFS](#upload-images-to-ipfs)
    - [Add images to metadata](#add-images-to-metadata)
    - [Upload metadata](#upload-metadata)
    - [Change token URI](#change-token-uri)
  - [Challenge 12 - Deploying and verifying smart contracts and Etherscan](#challenge-12---deploying-and-verifying-smart-contracts-and-etherscan)
    - [Getting the Token URI](#getting-the-token-uri)
    - [Etherscan](#etherscan)
    - [Deploying the contract](#deploying-the-contract)
    - [Obtaining the required keys](#obtaining-the-required-keys)
    - [Smart contract initialization through Etherscan](#smart-contract-initialization-through-etherscan)
    - [Minting on Etherscan](#minting-on-etherscan)
    - [Viewing your NFTs on Opensea](#viewing-your-nfts-on-opensea)

## Challenge 1 - Hello World!

Take a look at the `contracts` folder. Here, you will see a folder for every challenge. Within each folder, you will find two sub-folders:

- `src` => Contains all the actual smart contracts
- `tests` => Contains the test files for those contracts

For this challenge, there is a smart contract called `Challenge_1.sol`. This contract has a `string message` and a function `getMessage()` that returns the message. There is also a test file called `Challenge_1.t.sol` (test files should always have the extension `t.sol`), and it initiates the `Challenge_1.sol` contract so we can call its functions.

The `setUp()` function in Foundry is similar to other testing frameworks; the code in this function runs before every test you write in the file. For more information, check out the [Foundry book](https://book.getfoundry.sh/forge/writing-tests).

We covered many things already but yet did so little! Take a sip of your coffee, and when ready, run your first test by running the following command:

```sh
FOUNDRY_PROFILE=challenge-1 forge test --match-contract Challenge1
```

Sit back, and enjoy the dopamine of that green checkmark.

### Foundry flags

- `--match-contract` => enables you to run a specific test contract.
- `FOUNDRY_PROFILE=` => tells Foundry which profiles to run. Every challenge has a profile, from `challenge-1` to `challenge-12`, defined in the [Foundry.toml](/baackend/foundry.toml).

### Memory and other data locations

You might have noticed the `memory` keyword in the return statement of `getMessage()`. This `memory` is a keyword that indicates the location of a data type within Solidity.

> **Note**: For more information on location specifiers, refer to the docs [here](https://docs.soliditylang.org/en/v0.8.17/types.html?highlight=location%20specifier#data-location).

> **Note**: For more information on types in Solidity, refer to the docs [here](https://docs.soliditylang.org/en/v0.8.17/types.html).

## Challenge 2 - Hello???

The message in the contract `Challenge_2.sol` has not been initialized yet. The goal is to give it the value 'Hello World' using a setter function. The function needs to be built, but don't worry; there are some valuable hints in the contract and test files to help you.

Remember, to run the test for challenge 2:

```sh
FOUNDRY_PROFILE=challenge-2 forge test --match-contract Challenge2
```

### What do `public`, `view`, etc. mean

You might have noticed keywords in the function definition, such as `public` and `view`. They specify function types, but while `public` refers to [visibility](https://docs.soliditylang.org/en/v0.8.17/contracts.html#function-visibility), `view` shows the function [state mutability](https://docs.soliditylang.org/en/v0.8.17/contracts.html#state-mutability)") but there are also others, such as `payable`. If you do not include `payable`, the function will reject all ether sent with it.

## Challenge 3 - Hello + World

Let's increase the complexity. This time, the goal is to write a function that adds a string to the incomplete message. The tests also need to be improved. Eventually, you should be able to add something to the message so that it becomes 'Hello World!'. Feel free to look at other tests or the Foundry books, and refer to the concatenation docs [here](https://docs.soliditylang.org/en/v0.8.17/types.html?highlight=string.concat#the-functions-bytes-concat-and-string-concat).

## Challenge 4 - Solidity versions

The goal of the challenge is the same. But what's going on here? If you run the test, Foundry will complain about compiler versions. Take a look at `foundry.toml` in the root folder. In the `profile.challenge-4` section, you will see that the solidity compiler is specified to be 0.8.17 - but the contracts in this challenge require a different compiler version!

Luckily, you can tell Foundry which compiler version to use. You can even have it auto-detect the compiler versions. Go ahead and comment out the line where it says `solc = "=0.8.17"`.

Below that line, we have added a new line that auto-detects the compiler version. Uncomment that and save the file. Foundry will now auto-detect your compiler version whenever you run a test for that profile.

But there is another problem. Why does **_not_** `string.concat()` work? It may have something to do with the compiler versions used in the contracts. Take a look [here](https://ethereum.stackexchange.com/questions/729/how-to-concatenate-strings-in-solidity) on how you are allowed to concatenate strings in different solidity versions and [here](https://docs.soliditylang.org/en/v0.8.17/080-breaking-changes.html) on how different solidity versions behave in general.

> **Note**: You will encounter a lot of varying compiler versions in the wild, and it is, therefore, good to know where to check certain behaviors.

## Challenge 5 - NFT Contract

From here on out, we will build the NFT contract by adding functionality during every challenge!

Generally speaking, an NFT consists of the following components:

- [imports](#solidity-libraries-and-openzeppelin)
- [constructor](#constructors)
- [variables/constants/mappings to keep track of things](#challenge-10---keeping-track-of-mints-using-mappings)
- [tokenURI](#tokenURI)
- [mint](#mint-functions)

In this challenge, we will aim to:

- Make the contract [ERC721](#solidity-libraries-and-openzeppelin) compatible;
- Pass arguments to the constructor (See `Challenge_5.t.sol`);
- Set the max supply to what we pass as an argument in the constructor;
- Write a test that checks that the max supply equals 100 (or what we put in).

### Constructors

A constructor is a particular function we can use to initialize state variables. An `ERC721` contract, for example, requires two constructor parameters called "Name" and "Symbol," i.e., "Ethereum" and "ETH." Also, in this case, we set our max allowed supply of NFTs via the constructor.

When you deploy a smart contract, you can pass arguments to the constructor, and the constructor will initialize your contract with those arguments depending on the logic you wrote.

### Solidity libraries and openzeppelin

Solidity offers support to import libraries, both internal and external. More so than other languages, libraries play a crucial part in developing smart contracts because upgradability is quite a bit trickier, and the blockchain environment is unforgiving for bugs.

> **Note**: all smart contract code is visible on the blockchain as byte code, and most developers also submit the source code or at least the contract's interface.

[OpenZeppelin](https://docs.openzeppelin.com/) provides free, standardized, and thoroughly tested/audited smart contract libraries that implement ERC specifications, such as ERC721.

> **Note**: OpenZeppelin is a very popular library, and it is used by many smart contract developers. It is also a very good library to use, but it is not the only one. There are many other libraries out there, and you can even write your own.

ERC721 is the primary standard for NFT smart contracts; see [Workshop Preparaton](/PREPARATION.md#what-are-nfts-and-how-do-they-work). There are variants, such as ERC1155 by Enjin and ERC721A by Azuki, each with its functionalities. For the workshop, ERC721 NFTs will suffice.

- https://eips.ethereum.org/EIPS/eip-721
- https://docs.openzeppelin.com/contracts/4.x/
- https://docs.openzeppelin.com/contracts/4.x/api/token/erc721

## Challenge 6 - BaseURI, TokenURI

As on-chain storage is expensive, images are often stored off-chain.

If you are familiar with [Opensea](https://opensea.io/), you might be wondering: how do they get the NFT images and metadata?

Your smart contract provides a way to tell Opensea which image belongs to which NFT and where it stored the metadata files through a function called `tokenURI()`. Opensea looks for this function in your smart contract and parses the return value.

Since `_baseURIextended` is private, we have implemented a getter function called `_baseURI()`. The ERC721 standard already has this function implementation, but we want it to behave differently for our use case, so we have overridden it. Notice the `override` keyword added to the function.

> **Note**: Refer to [function overriding](https://docs.soliditylang.org/en/v0.8.17/contracts.html#function-overriding) to learn how overriding functions works in Solidity.

You may also have noticed the line `using Strings for uint256`: here, we are using the `Strings` library. You do not need to import this library in this file, though, since the ERC721 contract imports it, and we will be importing the ERC721 contract.

> **Note**: You can read how the strings library works [here](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/utils/Strings.sol).
> For example, uint to string => `someUint.toString()`

In `Challenge_6.t.sol`, we want to get the token URI from the contract given a specific token ID. Your job is to:

- Implement a function `setBaseURI()` in `Challenge_6.sol` that sets the base URI given a certain string;
  - The function should take a string parameter;
  - The function should set `_baseURIExtended` to that string;
- Implement `setBaseURI()` in the `setUp()` function body of `Challenge_6.t.sol`;
- Implement a function `tokenURI()` in `Challenge_6.sol` that constructs a token URI and returns it given a certain token ID;
  - The function should take a uint parameter (this is the token ID);
  - The function should `override` the default ERC721 `tokenURI()`;
  - The function should concatenate `_baseUriExtended` and the passed token ID parameter;
  - The function should return the token URI as a string.

<details>
    <summary>HINT:</summary>
    Solidity will not accept `string` and `uint` concatenation. You can use the provided `Strings` library to turn `uint` into a `string`.
</details>

## Challenge 7 - Minting

In this challenge, we will aim to create a minting function in `Challenge_7.sol` so that the tests in `Challenge_7.t.sol` pass. The mint function should:

- Accept a `uint` parameter for the mint amount
- Increase the `totalSupply` by the mint amount
- Mint the NFTs to `msg.sender` using ERC721's `_safeMint()` function

### Mint Functions

Minting is the core of getting tokens out there on the blockchain. NFTs are Non-Fungible Tokens, and people must mint them. In the past, these functions required a lot of [gas](https://cryptomarketpool.com/gas-in-solidity-smart-contracts), but developers are creating more and more standards to make minting cost less Eth, such as ERC721A, ERC721Psi.

As you might have noticed, NFTs have a token id. When you deploy a fresh collection, the convention is to have the token ID start at 0 or 1. Then, every time someone mints an NFT, the token id increases and gets assigned to the minted NFT.

If you take a look at the [ERC721 documentation](https://docs.openzeppelin.com/contracts/4.x/api/token/erc721), you will see that the `_safeMint()` function takes two arguments; the target address, and the token ID that we will assign. Because you cannot set the number of tokens to mint in ERC721's `_safeMint()` function, it is common practice (but not mandatory) to mint one at a time using a for-loop.

### `msg.sender` and `tx.origin`

You may have come across `msg.sender` a couple of times already. As mentioned in this [Stackoverflow article](https://ethereum.stackexchange.com/questions/113962/what-does-msg-sender-tx-origin-actually-do-why), `msg.sender` is the address of the account of which the current call is coming from, and `tx.origin` is the very first address in the calling chain.

> **Note** `msg.sender` and `tx.origin` are addresses. To learn more about the address type, check out the docs [here](https://docs.soliditylang.org/en/v0.8.17/types.html#address).

An example:

1. You call the contract mint function

   - `tx.origin` == you
   - `msg.sender` == you

2. You call `contractA`'s mint function, which calls the NFT mint function

- `tx.origin` == you
- `msg.sender` == `contractA`

So, what can we conclude from this? If a caller is a contract, the `tx.origin` is always different from `msg.sender`!

Keeping track of `msg.sender` and `tx.origin` is a good idea when testing in Foundry. In our tests, for example:

Internal Foundry address `tx.origin` (deploys) => Testing contract `Challenge_7.t.sol` (deploys) => Challenge contract `Challenge_7.sol`.

### Vm.startPrank() and others

`vm.startPrank()` and the like are [Foundry cheat codes](https://book.getfoundry.sh/cheatcodes/), manipulating the virtual machine (`vm`) for easier testing. For example, `vm.startPrank(sender, origin)` sets the `msg.sender` and `tx.origin`.

## Challenge 8 - Adding some checks

This challenge aims to add a couple of checks to the mint function. Because even though we have set a max supply, it doesn't do anything; we can easily mint more than the max supply. So let's fix that.

A way to do this is to add an if-statement within the mint function that checks if the total supply + mint amount exceeds the max supply. If so, we revert the transaction and may provide a little message, so the user will know why the transaction reverted.

An easier way to do this is by adding a `require()` statement within the function. You can read more about `require()` [here](https://www.alchemy.com/overviews/solidity-require).

So why are all these checks needed?

Besides the obvious ones, such as not exceeding set mint amounts, these checks have come into place after the absence of these checks has led to abuse. In a lot of NFT contracts, a large chunk of the whole supply has been minted by "bots" (most of the time, but not always, other smart contracts) owned by people with a lot of money (whales). The goal of these people is often to own a large chunk of the NFTs to manipulate the price or sell them for a significant profit if the NFTs are deemed valuable.

> **Note**: Bots are not always smart contracts; sometimes, it is just an [externally owned account + program](https://ethereum.stackexchange.com/questions/94410/why-contract-are-used-for-bot-purpose-instead-of-use-their-eth-address-directly).

This complexity is merely the Tip of the iceberg. Security in the NFT space and crypto, in general, is a giant rabbit hole, mainly beyond the scope of these challenges.

Take a look at `Challenge_8.t.sol`. As usual, we have added some tests, and we need to pass those tests.

- `testMintOverMax()`, a fuzz test that tries to mint over the max allowed supply;
- `testMintZero()`, a test that mints zero NFTs;
- `testMintCA()`, a test that simulates a `CA` (Contract Account) minting instead of a human (`EOA` or `Externally Owned Account`).

So, now let's improve the mint function to pass these checks. Our function should:

- `require()` that the mint amount > 0;
- `require()` that the mints do not exceed the max allowed supply;
- `require()` that the user minting is a human and not a contract.

<details>
  <summary>HINT:</summary>
  For the third `require()`, you can make use of `msg.sender` and `tx.origin`
</details>

## Challenge 9 - Modifiers and Ownable

You might have noticed that the `require()` statements have been moved below the `mint()` function into a `modifier`. Modifiers are code snippets that you can add to a function. When someone calls the function, these code snippets will run beforehand. Therefore, moving your `require()` statements to a modifier makes sense. It makes your code a bit more reusable, too, since you can now just put the modifier on any function to which you wish to apply the same logic.

> **Note**: Modifiers are not mandatory, but they are a good practice. Read more about modifiers [here](https://medium.com/coinmonks/solidity-tutorial-all-about-modifiers-a86cf81c14cb).

An example of modifiers is the [Ownable](https://docs.openzeppelin.com/contracts/4.x/access-control) library by OpenZeppelin. After importing this library, you can access the `onlyOwner` modifier. By default, the deployer of the contract will initially be the owner. Therefore, `onlyOwner` is an excellent modifier for functions that need administrative privileges, such as withdrawing funds or setting essential variables such as base URI.

Take a look at `Challenge_9.t.sol`. We've added two tests:

- `testFailSetBaseURI()`, using Foundry's `testFail`, the function must fail for the test to succeed. Not everyone should be allowed to set the base URI. Only the owner should be able to do so.
- `testSetBaseURI()`, the owner should still be able to set the base URI.

So, the goal of this challenge is to add the appropriate modifiers to the contract so that only the owner can perform specific actions. And, of course, your contract has to compile.

<details>
  <summary>HINT:</summary>
  You can make use of the Ownable library from Openzeppelin
</details>

## Challenge 10 - Keeping track of mints using mappings

Another method to restrict minting out the entire supply by one person is to limit mint amounts per person. Of course, you could circumvent this mechanism by minting with another wallet once you've reached your maximum mint amount on one wallet. There are ways to semi-prevent this, such as maintaining an allowlist, but we won't go into that now.

For this challenge, it's helpful to know what a [mapping](https://docs.soliditylang.org/en/v0.8.17/types.html?highlight=mapping#mapping-types) is.

The goal of this challenge is to:

- Create a mapping `userMintCount` that tracks how many mints a user has made;
- Then, add a `require()` statement to the `mintCompliance()` modifier so that if the user is trying to mint more than the allowed `maxPerUser`, the mint will revert with `Not allowed to mint this many`;
- Of course, do not forget to update the `userMintCount` for a user within the `mint()` function.

In `Challenge_10.t.sol`, we have set up scenarios where users will eventually try to mint more than they are allowed.

## Challenge 11 - Upload data to IPFS

In this challenge, we will be uploading images to IPFS. Then, write a test that updates your `baseURI` to point to the image folder on IPFS.

### IPFS, Opensea, and Metadata

In the [Preparation Guide](/PREPARATION.md#what-are-nfts-and-how-do-they-work), we demonstrated how to paste an IPFS link of a Bored Ape NFT into our browser as a test. We also explained that you can use IPFS for decentralized storage and that we can store metadata and images on IPFS.

> **Note**: The metadata is not stored on the blockchain. It is stored on IPFS, and the smart contract points to the metadata on IPFS.

We can construct the IPFS token URIs in our smart contracts that point to these images on IPFS. When Opensea looks at your NFT smart contract, it will retrieve the data using `tokenURI()`. Usually, the first thing returned is the metadata.

For example, paste this link into your browser: `ipfs://QmeSjSinHpPnmXmspMjwiXyN6zS4E9zccariGR3jxcaWtq/2369`

You will see a JSON object with some values, the NFT metadata. It contains:

- `image` => the IPFS URI to the actual NFT image
- `attributes` => array containing a list of objects with key-value pairs corresponding to the trait type and the values.

> **Note**: Feel free to compare it to the [metadata displayed on Opensea](https://opensea.io/assets/ethereum/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d/2369).

> **Note**: For more information on how to structure your metadata, check out the [Opensea metadata standards](https://docs.opensea.io/docs/metadata-standards).

### Create a Pinata account

For convenience, we will use [Pinata](https://www.pinata.cloud/). They will take care of pinning your data on IPFS.

> **Note**: if you upload something onto IPFS, it won't stay on there forever unless you pin it with a local or a third-party node such as Pinata.

Now, create a free account on [Pinata](https://app.pinata.cloud/register) and log in.

### Upload images to IPFS

1. When logged in, select Upload > Upload Folder, and select the [images](./metadata/images/) folder. We generated the metadata and images here using the [Hashlips Art Engine](https://github.com/HashLips/hashlips_art_engine).
2. Give your folder a name
3. Wait for the upload to finish
4. Copy the folder CID. To manually construct a token URI, prepend `ipfs://` and append the filename like so: `ipfs://someCID/1.png`.

### Add images to metadata

1. Before we upload our metadata to IPFS, we need to add the IPFS URIs of the images we uploaded to the metadata files.
2. The metadata files are in the [json](./metadata/JSON/) folder. Every `.json` file shows that we have not appropriately set the `description` and `image` fields. Usually, you can do this with a script, but since we have five files, we can do it manually. Go ahead and update the `image` fields in every file to the corresponding IPFS URIs. You could also change the description if you'd like.
3. At this point, verifying that the images match the metadata attributes is a good idea.

> **Note**: Make sure everything is clear on the attributes. For example, let's take the trait type `Background`. In every metadata file, this has the value `Black`. But in the images, one might argue that the background is actually `Purple`. It is a good idea to communicate with your artist what the intention was here and if this is correct. Perhaps it was the black shading around the eyes? The artist will often supply you with the layers, though, and you will have to generate the NFT images first so that you can verify them for yourself.

### Upload metadata

1. Now that we are pointing to the images on IPFS in our metadata, we are ready to upload the metadata! Go to Pinata, and click on "Upload" > "Upload Folder" > select the [JSON](./metadata/JSON/) folder.
2. Give your folder a name
3. Wait for the upload to finish
4. Copy the folder CID, construct the IPFS URI, and paste it into your browser. For example, `ipfs://someCID/1.png`
5. Test that the metadata has been uploaded correctly, so for example:

- The image URIs work
- The images match the attributes
- The enumeration is correct

### Change token URI

Now that we have uploaded our metadata to IPFS, we can change the `baseURI` in our smart contract to point to CID's folders.

It's now up to you to update the smart contract to point to the correct token URI!

- Update `tokenURI()` in `Challenge_11.sol` so that it returns the correct token URI corresponding to the images you uploaded to IPFS
- Now, some tests won't pass anymore. Update the tests in `Challenge_11.t.sol` so that they now pass.

## Challenge 12 - Deploying and verifying smart contracts and Etherscan

We have done many things so far! We have created our primary NFT contract with a dynamic token URI based on a token ID generated when users mint NFTs! We have also uploaded metadata and images to IPFS. All that is left is to deploy our contract and set things up through Etherscan, and we will be able to view our NFT collection on Opensea! Let's get started.

For a complete reference on how to deploy and verify smart contracts on Foundry, go [here](https://book.getfoundry.sh/forge/deploying)

### Getting the Token URI

You might recall that, earlier on, we supplied you with the metadata link of a Bored Ape. But how did we get this metadata link? We could, just like Opensea, call the `tokenURI()` function on the contract. But then, how do we know the contract address of an NFT? There are multiple ways to go about this. Let's try to get the contract address of [Bored Ape Yacht Club](https://opensea.io/assets/ethereum/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d/2369) first. There are two ways to get the contract address:

- Through the URL => `opensea.io/{ethereum}/{contractAddress}/{tokenId}`.
- Through "Details" (dropdown on the left side, below the metadata and "About Bored Ape Yacht Club" sections).

Let's click on the [contract address](https://etherscan.io/address/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d).

### Etherscan

We have landed on a website with a lot of data. Welcome to Etherscan. Etherscan is a block explorer for the Ethereum blockchain. It allows users to search and browse transactions and blocks easily. It also provides information about each transaction and block, such as the hash and timestamp.

The average person needs unreasonable time to read through an entire blockchain to find out what's happening. A block explorer solves this problem by making it easy for people to search and browse the blockchain. They can see all the transactions that have taken place and how much crypto is owned by specific wallet addresses.

Additionally, most explorers will display the addresses of both the sender and receiver and the amount of "gas" used in each transaction. Gas is the amount of ETH used to pay for a transaction.

You can think of Etherscan as the Google of Ethereum. Just as you would use Google to search the internet, you can use Etherscan to search the Ethereum blockchain.

If you paste a contract address in the top right search bar, you will land on the smart contract page, and you will be able to see all kinds of data and even interact with the smart contract by connecting your wallet.

Now, go ahead and click on the `Contract` tab. Below that, you will see three tabs called `Code,` `Read Contract,` and `Write Contract.`

- `Code` => All the smart contract code. With old contracts such as Bored Ape Yacht Club, you can understand how developers back in the day created NFTs;
- `Read Contract` => Interact with all the read-only functions of the smart contract, for example, `tokenURI()`;
- `Write Contract` => Interact with all the write functions of the smart contract, for example, when minting.

### Deploying the contract

Now that you know Etherscan, it is time to deploy and verify our smart contract. If a smart contract is not verified, you cannot click on the functions to interact with them or see them directly — an unverified smart contract [will look like this](https://etherscan.io/address/0x6c830acd0b1610f547f568abd9500012cffd5208#code).

As per the [Foundry documentation](https://book.getfoundry.sh/forge/deploying#deploying), we can verify and deploy our contracts simultaneously!

You can copy and paste the following format into your terminal to deploy and verify the contract:

> **Nodt:** Make sure you have enough test Eth in your wallet. 0.1 should be enough, but we recommend about 0.3 test Eth to be safe. Smart contract deployment can be expensive sometimes, e.g., [Bored Ape Yacht Club contract deployment](https://etherscan.io/tx/0x22199329b0aa1aa68902a78e3b32ca327c872fab166c7a2838273de6ad383eba).

```sh
FOUNDRY_PROFILE=challenge-12 forge create \
  --rpc-url <alchemy_api_key> \
  --private-key <wallet_private_key> \
  --etherscan-api-key <etherscan_api_key> \
  --verify \
  smart-contracts/challenge-12/src/Challenge_12.sol:Challenge12 \
  --constructor-args "NFT Example" "NFTEX" 100
```

> **Note**: For a reminder on how to get test Eth, please refer to [this section in the preparation guide](/PREPARATION.md#testnets--faucets).

> **Note**: The documentation needs to be more accurate here; you must include the constructor args flag at the end, or the verification might fail

### Obtaining the required keys

Below are the steps to acquire the necessary API keys:

- Head over to [Etherscan](https://etherscan.io/register) and create an account;
- Login and go to `API keys`;
- Click `Add`;
- Give your app a name;
- Copy and paste your Etherscan API key into the format;
- Head over to [Alchemy](https://www.alchemy.com/) and create an account;
- Login and click on `Create App` (top right);
- Give your app a name, and select the `Goerli` network. Then, `Create App`;
- Next to your app, click on `View Key`;
- Copy and paste your Alchemy API key (HTTPS) into the format.

If you are using Metamask and you need to get your private key:

- Open Metamask;
- Click on the three dots;
- Click on `Account Details`;
- Click on `Export Private Key`;
- Enter your password;
- Copy your private key.

After populating the command with your private and API keys, you can paste it into the terminal and run it. You are now deploying and verifying the smart contract using your provided wallet. Give the verification some time to complete.

> **Note**: If deployment succeeds but verification fails, please refer to [this section in the Foundry docs](https://book.getfoundry.sh/forge/deploying#verifying-a-pre-existing-contract).

🎉🎉🎉 **Congratulations!!!** 🎉🎉🎉
You have just built, deployed, and verified an NFT smart contract! Take note of the contract address in the terminal output, e.g., `Deployed to: 0x.....`, and let's proceed to the next step!

### Smart contract initialization through Etherscan

Once you have your contract address, let's move on to the [Goerli Etherscan](https://goerli.etherscan.io/).

- Paste in your contract address.;
- Click on `Contract` > `Read Contract`;
- Click on `tokenURI` and put 0 for `_id`.

It will return `0.json`. As you can see, the base URI still needs to be set! Let's fix that.

- Get your base URI from Pinata for the metadata folder;
- On Etherscan, click on the next tab `Write Contract`;
- Click on `Connect to Web3` and follow the steps;
- Once you're connected, click on `setBaseURI`;
- Paste in your URI in the `_uri` field (i.e., `ipfs://yourURI/`) and click on `Write`;
- Your wallet will pop up, asking you to pay a small gas fee for the transaction. Confirm your transaction;
- After a while, your transaction will be complete. You can view your transaction status by clicking on `View Transaction`;
- After completing your transaction, go back to `Read Contract` and recheck the token URI. Feel free to paste it into your browser to check out your metadata.

### Minting on Etherscan

Right now, we still have to create the NFTs by minting, so let's go ahead and do that! Of course, since we have only uploaded five metadata files, if you mint more than five, those will not have any metadata.

- Click on `Write Contract`;
- Click on `Mint`;
- Put 0 in the payable amount (Our mints are free);
- Put an amount between 0 and 5 (remember, max mint defaults to 5 in the contract);
- Click on `Write` and wait for the transaction to complete.

### Viewing your NFTs on Opensea

Once you have minted your NFTs, you should be able to view them on Opensea!

- Let's head over to the [Testnet Opensea](https://testnets.opensea.io/);
- In the search bar, paste your contract address;
- Your collection should appear with the minted NFTs!

If you have managed to make it this far, **pat yourself on the back, you've earned it!** Of course, these challenges were just the Tip of the iceberg. You can extend the NFTs with loads of functionalities, create an Opensea account, and edit your collection. You could optimize your smart contracts so that the gas fees are lower. You could take many security measures to make your contract safer, and the list goes on and on.

**Next up:** Stretch challenges. During the workshop, we will supply you with a non-exhaustive list of stretch challenges you can work on to refine your skills from here on or work on an idea of your own. You can also take a look at the [frontend challenges](/FRONTEND.md) to learn how to build a frontend for your NFTs.

🎉🎉🎉 **You have completed the Backend Coding Challenges!!!** 🎉🎉🎉
