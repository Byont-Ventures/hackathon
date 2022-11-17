# Backend Challenges

These challenges provide a way to get started with Foundry, Solidity, and NFTs. Usually, the goal is to fix an error / write a new function in a test file, solidity file, or both. Simultaneously, the challenges will be examples of how things work in Solidity, how NFT smart contracts are structured, how to test your files, and how smart contracts are deployed.

## Challenge 1 - Hello World!

Take a look at the `smart-contracts` folder. Here, the important sub-folders are

- `scripts` => Has a file that contains the logic that is called when you run tests with `forge test` (this will run all the files)
- `src` => Contains all the actual smart contracts.
- `tests` => In here, you can write your test files.

For this challenge, there is a smart contract called `Challenge_1.sol`. This contract has a `string message` and a function `showMessage()` that returns the message. There is also a test file called `Challenge_1.t.sol` (test files should always have the extension t.sol), and it initiates the `Challenge_1.sol` contract so we can call its functions. It runs the `setUp()` function from Foundry; this is run before every test you write in the file. For more information, check out the [Foundry book](https://book.getfoundry.sh/forge/writing-tests).

Whew, we did a lot of stuff, but yet so little! Take a sip of your coffee. Breathe in, breathe out. When you're ready, go ahead and run your first test by typing `forge test --match-contract Challenge1` (--match-contract is a flag that enables you to run a specific test contract). Sit back, and enjoy the dopamine of that green checkmark.

## Challenge 2 - Hello???

First things first - to make testing easier, from now on, stuff has been commented out. Otherwise, the compiler is going to complain about incomplete functions and the like. So take a look at the test files and the contracts, and uncomment them for this challenge!

The message in the contract `Challenge_2.sol` has not been initialized yet. The goal is to give it the value 'Hello World' using a setter function! Well, the function is not built yet, but don't worry; there are some valuable hints in the contract and test files to help you build.

## Challenge 3 - Hello + World

Once again, remember to uncomment the challenge code. You can leave the previous challenge code uncommented - provided everything works.

Let's add a tiny bit of spice. This time around, the goal is to write a function that adds a string to the incomplete message. The tests are also incomplete. Eventually, you should be able to add something to the message so that it becomes 'Hello World!'. Feel free to look back to other tests or the foundry books to see how it's done.

## Challenge 4 - Solidity versions

The goal of the challenge is the same. But what's going on here? If you run the test, Foundry will complain about compiler versions. Take a look at `foundry.toml` in the root folder. In the `profile.default` section, you will see that the solidity compiler is specified to be 0.8.17 - but the contracts in this challenge require a different compiler version!

Luckily, you can tell Foundry which compiler version to use. You can even have it auto-detect the compiler versions. Go ahead and comment out the line where it says `solc = ">=0.8.17"`. Below, we have added a new line that auto-detects the compiler version. Uncomment that and save the file. Now, Foundry will auto-detect your compiler version whenever you run a test.

But there is another problem. Why does `string.concat()` not work? It may have something to do with the compiler versions used in the contracts. Take a look [here](https://ethereum.stackexchange.com/questions/729/how-to-concatenate-strings-in-solidity) on how you are allowed to concatenate strings in different solidity versions and [here](https://docs.soliditylang.org/en/v0.8.17/080-breaking-changes.html) on how different solidity versions behave in general. **You will encounter a lot of different compiler versions in the wild, and it is, therefore, good to know where to check certain behaviors.**

## Challenge 5 - NFT Contract

From here on out, we will be building the NFT contract by adding a piece of functionality in every challenge!

Generally speaking, an NFT consists of following components:

- [imports](#solidity-libraries-and-openzeppelin)
- [constructor](#constructors)
- variables/constants/mappings to keep track of things
- [tokenURI](#tokenURI)
- [mint](#mint-functions)

The goal of this challenge is to flesh out the constructor, have it accept the arguments passed in the test, and make it set the max supply inside the constructor to what was passed as an argument.

### Constructors

A constructor is a special function that is used to initialize state variables. An ERC721 contract, for example, requires two constructor parameters called "Name" and "Symbol," i.e., "Ethereum" and "ETH." Also, in this case, we set our max allowed supply of NFTs via the constructor.

When you deploy a smart contract, you will pass these arguments to the constructor.

## Challenge 6 - BaseURI, TokenURI

Since `_baseURIextended` is private, we have implemented a getter function called `_baseURI()`. The ERC721 standard already has this function implementation, but we want it to behave differently for our use case so we have overridden it. Notice the `override` keyword added to the function.

In `Challenge_6.t.sol`, we want to get the token URI from the contract given a certain token ID. Your job is to:

- Implement a function `setBaseURI()` in `Challenge_6.sol` that sets the base URI given a certain string
  - The function should take a string parameter
  - The function should set \_baseUriExtended to that string
- Implement `setBaseURI()` in the `setUp()` function body of `Challenge_6.t.sol`
- Implement a function `tokenURI()` in `Challenge_6.sol` that constructs a token URI and returns it given a certain token ID
  - The function should take a uint parameter (this is the token ID)
  - The function should `override` the default ERC721 `tokenURI()`
  - The function should concatenate \_baseUriExtended and the passed token ID parameter
  - The function should return the token URI as a string

<details>
    <summary>HINT:</summary>
    Solidity will not accept string and uint concatenation. You can use the provided Strings library to turn uint into a string.
</details>

### Solidity libraries and openzeppelin

Solidity offers support to import libraries, both internal and external. More so than other languages, libraries play a key part in the development of smart contracts. This is because upgradability is quite a bit trickier, the environment is unforgiving for bugs, and then there's the all too common time pressure for software development. Put simply, libraries will make your life easier.
Openzeppelin is a company that provides free, standardized, and thoroughly tested/audited smart contract libraries to use, such as ERC721.

ERC721 is a standard for NFT smart contracts. There are others, such as ERC1155 by Enjin and ERC721A by Azuki, each with its own set of functionalities. For the workshop, ERC721 NFTs will suffice.

- https://eips.ethereum.org/EIPS/eip-721
- https://docs.openzeppelin.com/contracts/4.x/
- https://docs.openzeppelin.com/contracts/4.x/api/token/erc721

### Constructors

A constructor is a special function that is used to initialize state variables. An ERC721 contract, for example, requires two constructor parameters called "Name" and "Symbol," i.e., "Ethereum" and "ETH." Also, in this case, we set our max allowed supply of NFTs via the constructor.

When you deploy a smart contract, you will pass these arguments to the constructor.

### TokenURI

As on-chain storage is expensive, images are more often than not stored off-chain.

If you are familiar with [Opensea](https://opensea.io/), you might be wondering: how do they get the NFT images and metadata?

Your smart contract provides a way to tell Opensea which image belongs to which NFT and where the files are stored through a function called `tokenURI()`. Opensea simply looks for this function in your smart contract and parses the return value.

## Challenge 7 - Minting

The goal of this challenge is to create a minting function in `Challenge_7.sol`, so that the tests in `Challenge_7.t.sol` pass. The mint function should:

- Accept a uint parameter for the mint amount
- Increase the `totalSupply` by the mint amount
- Mint the NFTs to `msg.sender` by using ERC721's `_mint()` function.

### Mint Functions

Minting is the core of getting tokens out there on the blockchain. NFTs are Non-Fungible Tokens, and they have to be minted. In the past, these functions required a lot of [gas](https://cryptomarketpool.com/gas-in-solidity-smart-contracts), but more and more standards are being developed to make minting cost less ETH, such as ERC721A.

As you might have noticed, NFTs have a token id. Most of the time, when you deploy a fresh collection, the convention is to have the token ID start at 0 or 1. Then, every time an NFT is minted, the token id increases and is assigned to the minted NFT.

### Msg.sender and tx.origin

You may have come across `msg.sender` a couple of times already. As mentioned in this [Stackoverflow article](https://ethereum.stackexchange.com/questions/113962/what-does-msg-sender-tx-origin-actually-do-why), `msg.sender` is the address of the account of which the current call is coming from, and `tx.origin` is the very first address in the calling chain.

An example:

1. You -> Contract mint

- `tx.origin` == you
- `msg.sender` == you

2. You -> Contract A (calls contract B mint function) -> Contract B mint

- `tx.origin` == you
- `msg.sender` == Contract A

So, what can we conclude from this? If a caller is a contract, the `tx.origin` is always different from `msg.sender`!

Keeping track of `msg.sender` and `tx.origin` is a good idea when testing in Foundry. In our tests, for example:

Internal Foundry address `tx.origin` (deploys) => Testing contract `Challenge_7.t.sol` (deploys) => Challenge contract `Challenge_7.sol`.

## Challenge 8 - Adding some checks

The goal of this challenge is to add a couple of checks to the mint function. Right now, even though we have set a max supply, it doesn't actually do anything; we can easily mint more than the max supply. So let's fix that.

A way to do this, is to add an if-statement within the mint function that checks if the total supply + mint amount exceeds the max supply. If so, we revert the transaction and maybe we send out a little message so the user will know why the transaction reverted.

An easier way to do this though, is by adding a `require()` statement within the function. You can read more about `require()` [here](https://www.alchemy.com/overviews/solidity-require).

Take a look at `Challenge_8.t.sol`. As per usual, we have added some tests, and we need to pass those tests.

- `testMintOverMax()` => A fuzz test that tries to mint over the max allowed supply
- `testMintZero()` => A test that mints... zero NFTs
- `testMintCA()` => A test that simulates a CA (Contract Account) minting instead of a human (EOA or Externally Owned Account)

So, now let's improve the mint function to pass these checks. Our function should:

- `require()` that the mint amount > 0
- `require()` that the mints do not exceed the max allowed supply
- `require()` that the user minting is a human and not a contract

<details>
  <summary>HINT:</summary>
  For the third <code>require()</code>, you can make use of <code>msg.sender</code> and <code>tx.origin</code>
</details>

### Why are all these checks needed?

Besides the obvious ones such as not exceeding set mint amounts, these checks have come into place after the absence of these checks has led to abuse. In a lot of NFT contracts, a large chunk of the whole supply has been minted by "bots" (smart contracts) owned by people with a lot of money to blow (whales). The goal of these people is often to own a large chunk of the NFTs to manipulate the price, or sell them for a large profit if the NFTs are deemed valuable.

This is just one of the many use cases, and security in the NFT space and crypto in general is a huge rabbit hole mostly beyond the scope of this workshop.

## Challenge 9 - Modifiers and Ownable

If you noticed below the mint function of the contract `Challenge_9.sol`, the require statements have been moved over there into something called a `modifier`. Modifiers are code snippets that you can add to a function. When the function is called, these code snippets will run beforehand. Therefore, it makes sense to move your `require()` statements to a modifier. This makes your code a bit more reusable as well, since you now just need to put the modifier on any function you wish to apply the same logic to.

Click [here](https://medium.com/coinmonks/solidity-tutorial-all-about-modifiers-a86cf81c14cb) to read more about modifiers.

A nice example of modifiers is the [Ownable](https://docs.openzeppelin.com/contracts/3.x/access-control) library by Openzeppelin. After importing this library, you will have access to the `onlyOwner` modifier. By default, the deployer of the contract will initially be the owner of the contract. Therefore, `onlyOwner` is a great modifier to use on functions that need administrative privileges such as withdrawing funds or setting important variables such as base URI.

Take a look at `Challenge_9.t.sol`. Two tests have been added:

- `testFailSetBaseURI()` => Using Foundry's `testFail`, for the test to succeed, the function must fail. Not everyone should be allowed to just set the base URI! However, right now, this is not yet the case.
- `testSetBaseURI()` => The owner should still be able to set the base URI

So, the goal of this challenge is to add the appropriate modifiers to the contract so that only the owner can perform certain actions. And of course, your contract has to compile.

<details>
  <summary>HINT:</summary>
  You can make use of the Ownable library from Openzeppelin
</details>

## Challenge 10 - Keeping track of mints using mappings

Another method to restrict minting out the entire supply by one person is to restrict mint amounts per person. Of course, you could circumvent this mechanism by minting with another wallet once you've reached your maximum mint amount on one wallet. There are ways to semi-prevent this, such as whitelisting, but we won't go into that now.

The goal of this challenge is to:

- Create a mapping `userMintCount` that tracks how many mints a user has made.
- Then, add a `require()` statement to the `mintCompliance()` modifier so that if the user is trying to mint more than allowed `maxPerUser`, the mint will revert with `Not allowed to mint this many`.
- Of course, also do not forget to update the `userMintCount` for a user within the `mint()` function.

In `Challenge_10.t.sol`, we have set up scenarios where users will try to eventually mint more than they are allowed.

## Challenge 11 - Upload data to IPFS

In this challenge, we will be uploading images to IPFS. Then, write a test that updates your `baseURI` so that it points to the image folder on IPFS.

### IPFS, Opensea, and Metadata

Previously, as a test, we pasted an IPFS link to an NFT image of a Bored Ape into our browser. We know that IPFS is used for decentralized storage and that we can store metadata and images on IPFS. Then, we can construct the IPFS token URIs in our smart contracts. When Opensea looks at your NFT smart contract, it will retrieve the data using `tokenUri()`. Usually, the first thing returned is the metadata.

For example, paste this link into your browser: `ipfs://QmeSjSinHpPnmXmspMjwiXyN6zS4E9zccariGR3jxcaWtq/2369`

You will see a JSON object with some values. This is the NFT metadata. It contains:

- image => the IPFS URI to the actual NFT image
- attributes => array containing a list of objects with key-value pairs corresponding to the trait type and the values.

Feel free to compare it to the [metadata displayed on Opensea](https://opensea.io/assets/ethereum/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d/2369).

For more information on how to structure your metadata, check out the [Opensea metadata standards](https://docs.opensea.io/docs/metadata-standards).

### Create a Pinata account

1. For convenience, we will be using [Pinata](https://www.pinata.cloud/). They will take care of pinning your data on IPFS (if you upload something to IPFS it won't stay on there forever unless it is pinned to a local node or a node that a third party such as Pinata is running)
2. Create an account on [Pinata](https://app.pinata.cloud/register) and log in

### Upload images to IPFS

1. When logged in, select Upload > Upload Folder, select the [images](./metadata/images/) folder. The metadata and images here were generated by using the [Hashlips Art Engine](https://github.com/HashLips/hashlips_art_engine).
2. Give your folder a name
3. Wait for the upload to finish
4. Copy the folder CID. To manually construct a token URI, prepend `ipfs://` and append the filename like so: `ipfs://someCID/1.png`.

### Add images to metadata

1. Before we upload our metadata to IPFS, we need to add the IPFS URIs of the images we uploaded, to the metadata files.
2. The metadata files are located in the [json](./metadata/json/) folder. In every `.json` file, you can see that the `description` and `image` fields have not been properly set yet. Usually, this is done through a script, but since we have 5 files, it is also doable manually. Go ahead and update the `image` fields in every file to the corresponding IPFS URIs. You could also change the description if you'd like.
3. It is a good idea to verify that the images are matching the metadata attributes at this point.

<details>
  <summary>General tip</summary>
  Make sure there is no confusion on the attributes. For example, let's take the trait type <code>Background</code>. In every metadata file, this has the value <code>Black</code>. But in the images, one might argue that the background is actually <code>Purple</code>. It is a good idea to communicate with your artist on what the intention was here and if this is actually correct. Perhaps it was the black shading around the eyes? Often times though, the artist will supply you with the layers and you will have to generate the NFT images first, so you can verify it for yourself.
</details>

### Upload metadata

1. Now that we are pointing to the images on IPFS in our metadata, we are ready to upload the metadata! Go to Pinata, and click on Upload > Upload Folder > select the [json](./metadata/json/) folder.
2. Give your folder a name
3. Wait for the upload to finish
4. Copy the folder CID, construct the IPFS URI, and paste it in your browser. For example: `ipfs://someCID/1`
5. Test that the metadata has been uploaded correctly, so for example:

- The image URIs work
- The images match with the attributes
- The numeration is correct

### Change token URI

So, now we have our metadata in place. It's now up to you to update the smart contract, so that it points to the correct token URI!

- Update `tokenURI()` in `Challenge_11.sol` so that it returns the correct token URI corresponding to the images you uploaded to IPFS
- Now, some tests won't pass anymore. Update the tests in `Challenge_11.t.sol` so that they now pass.

## Challenge 12 - Deploying, verifying smart contracts and Etherscan

We have done a lot of things so far! We have created our own basic NFT contract, with a dynamic token URI based on a token ID that is generated when users mint NFTs! We have also uploaded metadata and images to IPFS. All that is left, is to deploy our contract, set things up through Etherscan, and we will be able to view our NFT collection on Opensea! Let's get started.

For the complete reference on how to deploy and verify smart contracts on Foundry, go [here](https://book.getfoundry.sh/forge/deploying)

### Etherscan

You might recall that, earlier on, we supplied you with the metadata link of a Bored Ape. But how did we get this metadata link? We could, just like Opensea, call the `tokenURI()` function on the contract. But then, how do we know the contract address of an NFT? There are multiple ways to go about this. Let's try to get the contract address of [Bored Ape Yacht Club](https://opensea.io/assets/ethereum/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d/2369) first. There are two ways to get the contract address:

- Through the URL => `opensea.io/ethereum/contractAddress/tokenId`
- Through "Details" => Dropdown on the left side, below the metadata and "About Bored Ape Yacht Club" sections.

Let's click on the [contract address](https://etherscan.io/address/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d).

We have landed on a website with a lot of data. Welcome to Etherscan. Etherscan is a block explorer for the Ethereum blockchain. It allows users to search and browse transactions and blocks easily. It also provides information about each transaction and block, such as the hash and timestamp.

The average person doesn't have the time to read through an entire blockchain to find out what's going on.
A block explorer solves this problem by making it easy for people to search and browse the blockchain. They can see all the transactions that have taken place and how much crypto is owned by specific wallet addresses.

Additionally, most explorers will display the addresses of both the sender and receiver and the amount of “gas” used in each transaction. Gas is simply the amount of ETH used to pay for a transaction.

You can think of Etherscan as the Google of Ethereum. Just as you would use Google to search the internet, you can use Etherscan to search the Ethereum blockchain.

If you paste a contract address in the top right search bar, you will land on the smart contract page, and you will be able to see all kinds of data and even interact with the smart contract by connecting your wallet.

Now, go ahead and click on the `Contract` tab. Below that, you will see three tabs called `Code,` `Read Contract,` and `Write Contract.`

- Code => All the smart contract code. Here, you can also get an idea of how NFTs were made back in the day if you look at old contracts such as Bored Ape Yacht Club.
- Read Contract => Interact with all the read-only functions of the smart contract, for example, `tokenUri()`.
- Write Contract => Interact with all the write functions of the smart contract (Requires wallet connection), for example, minting.

### Deploying the contract

Now that you know what Etherscan is, it is time to deploy and verify our smart contract. If a smart contract is not verified, you cannot click on the functions to interact with them, nor see them directly. An unverified smart contract [will look like this](https://etherscan.io/address/0x6c830acd0b1610f547f568abd9500012cffd5208#code).

As per the [Foundry documentation](https://book.getfoundry.sh/forge/deploying#deploying), we can verify and deploy our contracts at the same time!

Here is a format you can copy and paste into your terminal to deploy and verify the contract.

`forge create --rpc-url <alchemy_api_key> --private-key <wallet_private_key> smart-contracts/src/Challenge_12.sol:Challenge12 --constructor-args "NFT Example" "NFTEX" 100 --etherscan-api-key <etherscan_api_key> --verify`

Below are the steps to acquire the necessary API keys:

1. Head over to [Etherscan](https://etherscan.io/register) and create an account.
2. Login and go to `API keys`.
3. Click `Add`
4. Give your app a name
5. Copy and paste your Etherscan API key into the format
6. Head over to [Alchemy](https://www.alchemy.com/) and create an account
7. Login and click on `Create App` (top right)
8. Give it a name, and select `Goerli` as network. Then, `Create App`
9. Next to your app, click on `View Key`
10. Copy and paste your Alchemy API key (HTTPS) into the format

After populating the command with your private key and api keys, you can paste it into the terminal and run it! The smart contract will now be deployed via the wallet of which you have provided the private key, and after some time, also verified!

🎉🎉🎉 **Congratulations!!!** 🎉🎉🎉
You have just built, deployed and verified an NFT smart contract! Take note of the contract address in the terminal output, for example: `Deployed to: 0x.....` , and let's proceed to the next step!

### Smart contract initialization through Etherscan

Once you have your contract address, let's move on to the [Goerli Etherscan](https://goerli.etherscan.io/).

1. Paste in your contract address
2. Click on `Contract` > `Read Contract`
3. Click on `tokenURI` and put 0 for `_id`

It will return `0.json`. As you can see, the base URI still needs to be set! Let's fix that.

1. Get your base URI from Pinata for the metadata folder
2. On Etherscan, click on the next tab `Write Contract`
3. Click on `Connect to Web3` and follow the steps
4. Once you're connected, click on `setBaseURI`
5. Paste in your URI in the `_uri` field (i.e. `ipfs://yourURI/`) and click on `Write`
6. Your wallet will pop up, asking you to pay a small gas fee for the transaction. Confirm your transaction.
7. After a while, your transaction will complete. You can view your transaction status by clicking on `View Transaction`
8. When your transaction is completed, go back to `Read Contract` and check the token URI again. Feel free to paste it into your browser to check out your metadata!

### Minting on Etherscan

Right now, we still have to create the NFTs themselves by minting, so let's go ahead and do that! Of course, since we have only uploaded five metadata files, if you mint more than five, those will not have any metadata.

1. Click on `Write Contract`
2. Click on `Mint`
3. Put 0 in the payable amount (Our mints are free)
4. Put an amount between 0 and 5 (remember, max mint defaults to 5 in the contract)
5. Click on `Write` and wait for the transaction to complete

### Viewing your NFTs on Opensea

Once you have minted your NFTs, you should be able to view them on Opensea!

1. Let's head over to the [Testnet Opensea](https://testnets.opensea.io/)
2. In the search bar, paste your contract address
3. Your collection should appear with the minted NFTs!

If you have managed to make it this far, **give yourself a pat on the back, you've earned it!** Of course, these challenges were just the tip of the iceberg. The NFTs can be extended with loads of functionalities, you can create an Opensea account and edit your collection, you can optimize your smart contracts so the gas fees are less and there are a lot of security measures you could take to make your contract safer, and the list goes on and on.

🎉🎉🎉 **You have completed the Backend Coding Challenges!!!** 🎉🎉🎉
