# Stretch Challenges

Stretch challenges are for those who are already familiar with web3 development or want a more significant challenge. You may also start with the stretch challenges immediately if you are working in teams. In that case, try the challenges of your respective track before the workshop.

- [Stretch Challenges](#stretch-challenges)
  - [Stretch Challenge 1: Reentrancy Attacks 👾](#stretch-challenge-1-reentrancy-attacks-)
  - [Stretch Challenge 2: Testing the Frontend 👷‍♂️](#stretch-challenge-2-testing-the-frontend-️)
  - [Stretch Challenge 3: Minting Dapp without Wagmi / RainbowKit 🤓](#stretch-challenge-3-minting-dapp-without-wagmi--rainbowkit-)
  - [Stretch Challenge 4: NFT Pokemon Clone 😼](#stretch-challenge-4-nft-pokemon-clone-)
  - [Stretch Challenge 5: Dice Game 🎲](#stretch-challenge-5-dice-game-)
  - [Stretch Challenge 6: Blockchain Tic-Tac-Toe ❎](#stretch-challenge-6-blockchain-tic-tac-toe-)
  - [Stretch Challenge 7: Payable mint, royalties, and withdrawing 💸](#stretch-challenge-7-payable-mint-royalties-and-withdrawing-)
  - [Stretch Challenge 8: Staking 💰](#stretch-challenge-8-staking-)
  - [Stretch Challenge 9: Gas Optimization 🤖](#stretch-challenge-9-gas-optimization-)
  - [Stretch Challenge 10: Allowlisting with Merkle Trees ✅](#stretch-challenge-10-allowlisting-with-merkle-trees-)
  - [Stretch Challenge 11: Meta Transactions 🧾](#stretch-challenge-11-meta-transactions-)
  - [Stretch Challenge 12: Rentable NFTs 🫴](#stretch-challenge-12-rentable-nfts-)
  - [Stretch Challenge 13: NFT Gated Access 👮‍♀️](#stretch-challenge-13-nft-gated-access-️)

## Stretch Challenge 1: Reentrancy Attacks 👾

Smart contracts often deal with money. Where money is involved, parties look to take that money for themselves by exploiting smart contract vulnerabilities (Think of flaws in the code or logic).

One of these exploits/attacks is the "reentrancy attack," explained [here](https://www.certik.com/resources/blog/3K7ZUAKpOr1GW75J2i0VHh-what-is-a-reentracy-attack).

NFT projects are only safe against this attack if they are careful and implement countermeasures. There have been cases where malicious actors could mint the entire supply in one go, whereas they should only have been allowed to mint a couple.

This challenge aims to write an NFT contract that you have safeguarded against reentrancy attacks. The contract should only allow five mints max per wallet.

## Stretch Challenge 2: Testing the Frontend 👷‍♂️

How you test smart contracts using frameworks such as Foundry, you should also test your frontend code. This challenge aims to test a Dapp you have written using, for example, Jest or Mocha. If you still need to write a frontend code, we recommend you do the [Frontend Challenges](./frontend/README.md), although you may feel free to create your own Dapp!

> **NOTE**: If you are looking to mock ethers.js behavior, have a look at [Mocketh](https://github.com/Byont-Ventures/mocketh), a typed ethers.js mocking library for mocking Ethereum calls. It works by implementing a custom provider that intercepts and impersonates Ethereum calls.

## Stretch Challenge 3: Minting Dapp without Wagmi / RainbowKit 🤓

Wagmi and RainbowKit are excellent if you want to create a Dapp quickly, but it is also good to understand what is happening under the hood. So, let's make the minting Dapp from the [Frontend Challenges](/frontend/README.md), but without libraries such as Wagmi or RainbowKit! You are only allowed to use EthersJS or Web3JS.

Of course, feel free of the Dapp requirements, it can be something other than a minting Dapp, but it is an excellent place to start.

## Stretch Challenge 4: NFT Pokemon Clone 😼

Let's create a battle simulator using NFTs, Pokemon style! You can make it however you like; the only constraints are as follows:

- Players can battle using their own NFTs;
- The NFTs have specific stats (metadata); you may choose for these to be on-chain or off-chain;
- The NFTs have HP (HitPoints). When their HP reaches 0, the NFT has lost the battle, and the opposing NFT wins;
- The NFTs have certain battle moves they can use to damage their opponent.

## Stretch Challenge 5: Dice Game 🎲

The goal of this challenge is to create a game using randomness to determine a winner, for example, a dice game:

- Players roll the dice to try and win a prize. Players who roll either a 0, 1, or 2 will win the current prize amount. The initial prize is 10% of the contract's balance, which starts at .05 Eth.
- Every time players roll the dice, they must send .002 Eth. Forty percent of this value is added to the current prize amount, while the other 60 percent stays in the contract to fund future prizes.
- Once a player wins a prize, the new prize amount is set to 10% of the total balance of the dice game contract.

> **NOTE**: Feel free to create your version of this game. Bonus points if you make sure players are unable to predict and exploit the randomness introduced.

## Stretch Challenge 6: Blockchain Tic-Tac-Toe ❎

The goal of this challenge is to create an on-chain version of [Tic-Tac-Toe](https://en.wikipedia.org/wiki/Tic-tac-toe)!

For example:

- The game should be for two players;
- Player 1 has the "X" symbol and starts;
- Player 2 has the "O" symbol and goes second;
- The grid size is 3x3;
- The player with 3 in a row of their symbol, either vertically, horizontally, or diagonally, wins the game!

> **NOTE**: Of course, these are just guidelines. Feel free to expand upon these rules, such as a custom grid size, custom symbols, or additional rules, such as playing for Eth.

## Stretch Challenge 7: Payable mint, royalties, and withdrawing 💸

Often, NFT projects would like to make a little money themselves. So, they introduce minting costs and royalties to their project. This challenge aims to create an NFT smart contract that includes both!

- The mint should cost at least .05 Eth per NFT;
- The royalties should be configured for trading on Opensea;
- The funds in the contract should be withdrawable;
- Only the contract owner should be able to withdraw the funds.

> **TIP**: Opensea has recently written a [blog post](https://opensea.io/blog/announcements/on-creator-fees/) on royalties for new tokens that they will be enforcing around December. You can find the GitHub repository [here](https://github.com/ProjectOpenSea/operator-filter-registry).

## Stretch Challenge 8: Staking 💰

A keyword that you will often encounter is staking. Many NFT projects use staking to incentivize users to keep their NFTs instead of selling them and generate passive income by receiving tokens. In the context of NFTs, this often boils down to the following:

- A user stakes their NFT(s);
- Every staked NFT generates some tokens per x amount of time;
- After a certain amount of time, users can get their NFTs back by claiming them;
- The generated tokens can also be claimed and used for whatever intended utility the NFT project created.

Create staking functionality for an already existing smart contract, or create a new NFT project that has staking functionality.

> **TIP**: You can use the NFT smart contract from the [Backend Challenges](./backend/README.md).

## Stretch Challenge 9: Gas Optimization 🤖

Gas makes the Ethereum network [turing complete](https://academy.binance.com/en/glossary/turing-complete). However, as the network becomes more and more congested, the gas prices rise, increasing smart contract deployment cost and also cost for users that want to, for example, mint NFTs.

There are a lot of techniques and applications, however, that you can use to optimize gas usage within Ethereum. This challenge aims to create an NFT smart contract that uses some form of gas optimization.

- You should at least use the [ERC1155](https://ethereum.org/en/developers/docs/standards/tokens/erc-1155/), [ERC721A](https://www.erc721a.org/) or [ERC721Psi](https://github.com/estarriolvetch/ERC721Psi) standard.

## Stretch Challenge 10: Allowlisting with Merkle Trees ✅

Sometimes, the demand for the NFTs within a project outweighs the supply. In this case, users need a guarantee to mint such NFTs. If a project wants to reward the most supportive and early community members, they may opt to put them on a allowlist. Users included in the allowlist are guaranteed to mint x amount of NFTs, usually in a private mint phase during which only allow-listed members can mint. After that, the mint goes public, and the public is also allowed to mint.

Keeping a transparent record of a list of users is quite tricky, but blockchain easily solves this issue. However, storing the entire list of addresses on-chain can be very expensive. Luckily, a data structure that the blockchain uses exists that we can use: Merkle Trees.

By using Merkle Trees for your allowlist, you only need to store one value on the blockchain; the Merkle Root.

The requirements for this challenge are as follows:

- Create an NFT smart contract that has two phases;
- The initial phase should be private mint;
- The second phase should be public mint;
- During private mint, only allow listed users should be allowed to mint;
- During public mint, everyone should be allowed to mint;
- Create the allowlist using Merkle Trees;
- Only the owner should be able to set the Merkle Root and mint phases;
- Create a Dapp that returns a Merkle Proof if a user is on the allowlist.

## Stretch Challenge 11: Meta Transactions 🧾

Create a Dapp that decouples senders of a transaction and payers of gas. This type of transaction is called a [Meta Transaction](https://wiki.polygon.technology/docs/develop/meta-transactions/meta-transactions/)

## Stretch Challenge 12: Rentable NFTs 🫴

To access a particular service, such as staking, a website, or a real-life event, users may require ownership of an NFT. For example, an exciting use case arises from such requirements: [Rentable NFTs](https://eips.ethereum.org/EIPS/eip-4907).

The goal of this challenge is to create a rentable NFT collection! Of course, feel free to build things around it to make it more interesting.

## Stretch Challenge 13: NFT Gated Access 👮‍♀️

The goal of this challenge is relatively straightforward; create a Dapp that only allows users to use it if they own a certain NFT!
