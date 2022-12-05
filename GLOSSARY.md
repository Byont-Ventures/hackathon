# Glossary For Crypto Dummies

This is a non-exhaustive list of blockchain related terms you might encounter, and their explanations in simple terms.

TODO: defi, dapp, decentralized, coin, dex, staking, mint, erc20, erc721, ether, faucet, ICO, IPFS, oracle, consensus mechanism, mining, validators, web2, web3, block, wagmi, dyor, fiat, exchange, ledger, NFT, fungible, non-fungible, rugpull, gas

- [Glossary For Crypto Dummies](#glossary-for-crypto-dummies)
  - [ABI (Application Binary Interface)](#abi-application-binary-interface)
  - [Account](#account)
  - [Address](#address)
  - [Airdrop](#airdrop)
  - [Altcoin](#altcoin)
  - [AML (Anti-Money Laundering)](#aml-anti-money-laundering)
  - [API (Application Programming Interface)](#api-application-programming-interface)
  - [Bitcoin / bitcoin (BTC)](#bitcoin--bitcoin-btc)
  - [Block](#block)
  - [Blockchain](#blockchain)
  - [Bytecode](#bytecode)
  - [Coin](#coin)
  - [Contract](#contract)
  - [Cryptocurrency / Crypto](#cryptocurrency--crypto)
  - [ERC-20 Token Standard](#erc-20-token-standard)
  - [ERC-721 Token Standard](#erc-721-token-standard)
  - [ether (ETH)](#ether-eth)
  - [Ethereum / ethereum](#ethereum--ethereum)
  - [EVM (Ethereum Virtual Machine)](#evm-ethereum-virtual-machine)
  - [Fork](#fork)
  - [Keystore File](#keystore-file)
  - [Mnemonic Phrase](#mnemonic-phrase)
  - [PoS (Proof of Stake)](#pos-proof-of-stake)
  - [PoW (Proof of Work)](#pow-proof-of-work)
  - [Seed (phrase) / Secret Recovery Phrase](#seed-phrase--secret-recovery-phrase)
  - [Smart Contract](#smart-contract)
  - [Solidity](#solidity)
  - [Turing Complete](#turing-complete)
  - [Token](#token)
  - [Virtual Machine](#virtual-machine)

## ABI (Application Binary Interface)

The Application Binary Interface (ABI) is an interpreter that facilitates communication with the EVM bytecode. The Solidity ABI is a human-readable list of methods on a smart contract for executing particular functions. You can use the ABI with a library like ethers.js to interact with smart contracts.

An ABI in Solidity is similar to, but also different from, an [API](#api-application-programming-interface) (Application Program Interface).

## Account

A public and private keypair that gives you access to, and control over, the tokens held under a specific address. The blockchain itself keeps track of what tokens are held in by each account; the tokens aren’t “in” the wallet or account, but we often talk that way because the metaphor makes sense.

In Ethereum-compatible blockchains, a Secret Recovery Phrase (SRP) can generate a number of accounts that approaches infinity. Each one of these accounts has its own keypair, but all of them can be controlled by the SRP.

Just like a GitHub account has a username (public) and password (private), so does an Ethereum account; the difference being that you are the custodian of your Ethereum keys, while usually GitHub holds your login information for their site. For additional security, you can use a password to encrypt your private key which would result in a username (public) and password (private) and password for that password (private + more secure). See also [‘keystore file’](#keystore-file), [‘Secret Recovery Phrase’](#seed-phrase--secret-recovery-phrase).

## Address

Used to send and receive transactions on a blockchain network, and to identify different users; also referred to as a ‘public key’. An address is an alphanumeric character string, which can also be represented as a scannable QR code. In Ethereum, the address begins with 0x. For example: 0x06A85356DCb5b307096726FB86A78c59D38e08ee

## Airdrop

A token distribution method used to send cryptocurrency or tokens to wallet addresses. Sometimes airdrops are used for marketing purposes in exchange for simple tasks like reshares, referrals, or app downloads.

## Altcoin

As Bitcoin was the first cryptocurrency, the term ‘altcoin’ was created to refer to ‘any cryptocurrency other than Bitcoin’. The term is less used in Ethereum or smart contract-enabled blockchain communities. Many altcoins are forks of Bitcoin with minor changes (e.g., Litecoin). See also [‘fork’](#fork).

## AML (Anti-Money Laundering)

A set of international laws enacted to diminish the potential for criminal organizations or individuals to launder money. These rules and laws are applied to cryptocurrencies with varying effects in different jurisdictions.

## API (Application Programming Interface)

A predefined set of requests that one program can make to another in order to transfer information between them. When you hear someone saying that an application is “getting information from” another source, it’s often doing so through an API. Not to be confused with [ABI](#abi-application-binary-interface).

## Bitcoin / bitcoin (BTC)

The first cryptocurrency based on a Proof of Work (PoW) blockchain. Bitcoin was created in 2009 by Satoshi Nakomoto — a pseudonym for an individual whose real identity is unknown — and the concept of cryptocurrency was outlined in a white paper titled “Bitcoin: A Peer-to-Peer Electronic Cash System.” Use “Bitcoin” for the blockchain/network; “bitcoin” for the cryptocurrency. The plural of bitcoin is just bitcoin; the abbreviation is BTC, with a space: I have 250 BTC.

## Block

Think of a blockchain as consisting of a ledger that is being constantly updated, and those changes synced between any number of different nodes (in fact, “distributed ledger technology” is another phrase used to describe it).

After a certain number of transactions have been added to the ledger and consensus has been reached among the nodes that the transactions are valid, they are then cryptographically locked into a “block” and officially recorded. This “block” forms the basis for the next one; in this way, they are all linked together in a chain, hence–blockchain.

## Blockchain

A digital ledger comprised of unchangeable, digitally recorded data in packages called blocks. Each block is ‘chained’ to the next block using a cryptographic signature. Ethereum is a public blockchain, open to the world; its digital ledger is distributed, or synced, between many nodes; these nodes arrive at consensus regarding whether a transaction is valid before encrypting it, along with a number of other valid transactions, into a block. See also [‘block’](#block).

## Bytecode

Bytecode is a “low-level” computer language, that is, meant to be processed by a computer, rather than a “high-level”, more human-readable, language. In Ethereum, higher-level Solidity is compiled into Ethereum bytecode, which is read by the Ethereum Virtual Machine (EVM).

## Coin

The term ‘coin’ has some nuances. Strictly speaking, a ‘coin’ could be defined as:

A fungible token (all of them identical) issued on a blockchain, either as the network’s transactional token, or through a smart contract deployed to that network.

Some people may use ‘coins’ as shorthand for ‘bitcoin’; the immortal aphorism ‘not your keys, not your coins’ refers to bitcoins. Another thing to keep in mind is that, while coins are put forward as some sort of representation of value, that value can vary wildly from one ‘coin’ to another. A coin may represent the value of the computational resources of the network, or it may be ‘pegged’ to represent fiat currency value, or it may float according to the value placed on immaterial resources like NFTs, membership, or digital goods, to name a few.

## Contract

See [`smart contract`](#smart-contract).

## Cryptocurrency / Crypto

Even though this prefix is originally Greek, our current usage comes from cryptography. Technologies that are referred to with the blanket term of “crypto” tech are underlain by cryptographic tools and processes (such as public/private key pairs) that enable innovative functionality and security. Of course, “cryptocurrency” often gets shortened to simply “crypto”, so this emerging field is full of instances where something “crypto” is being added to or shortened. With the emergence of the term “Web3”, arguably a distinction has begun to be made between “crypto”, referring to DeFi and other financial use cases of the technology, while “Web3” refers to the transition of Internet-based activities to more decentralized practices and platforms.

## ERC-20 Token Standard

ERC is the abbreviation for Ethereum Request for Comment and is followed by the assignment number of the standard. ERC-20 is a technical standard for smart contracts which is used to issue the majority of tokens (in particular, cryptocurrency tokens) extant on Ethereum. This list of rules states the requirements that a token must fulfill to be compliant and function within the Ethereum network.

## ERC-721 Token Standard

As stated above, this is another standard for Ethereum smart contracts, which allows for the issuance of a non-fungible token, also known as an NFT. This token standard is used to represent a unique digital asset that is not interchangeable.

## ether (ETH)

Ether is the native currency of the Ethereum blockchain network. Ether—also referred to as ETH (pronounced with a long “e”, like “teeth” without the “t”)—functions as a fuel of the Ethereum ecosystem by acting as a medium of incentive and form of payment for network participants to execute essential operations. The cryptocurrency of Ethereum has a lowercase e. The plural of ether is just ether; its abbreviation is ETH, with a space: I have 10 ETH.

## Ethereum / ethereum

At its core, Ethereum is a decentralized global software platform powered by blockchain technology. It is most commonly known for its native cryptocurrency, ether (ETH).

Ethereum can be used by anyone to create any secured digital technology. It has a token designed to pay for work done supporting the blockchain, but participants can also use it to pay for tangible goods and services if accepted.

Ethereum is designed to be scalable, programmable, secure, and decentralized. It is the blockchain of choice for developers and enterprises creating technology based upon it to change how many industries operate and how we go about our daily lives.

It natively supports smart contracts, an essential tool behind decentralized applications.

Many decentralized finance (DeFi) and other applications use smart contracts in conjunction with blockchain technology.

## EVM (Ethereum Virtual Machine)

The EVM is a virtual machine that operates on the Ethereum network. It is Turing complete and allows anyone, anywhere to execute arbitrary EVM bytecode. All Ethereum nodes run on the EVM. It is home for smart contracts based on the Ethereum blockchain.

## Fork

A fork creates an alternative version of a blockchain, and are often enacted intentionally to apply upgrades to a network. Soft Forks render two chains with some compatibility, while Hard Forks create a new version of the chain that must be adopted to continue participation. In the instance of a contentious Hard Fork, this can create two versions of a blockchain network.

## Keystore File

A keystore file is a special, encrypted version of a private key in JSON format. See also ‘private key’.

## Mnemonic Phrase

See [‘seed phrase / secret recovery phrase’](#seed-phrase--secret-recovery-phrase).

## PoS (Proof of Stake)

In a proof of stake system, staking serves a similar function to proof of work’s mining, in that it’s the process by which a network participant gets selected to add the latest batch of transactions to the blockchain and earn some crypto in exchange.

The exact details vary by project, but in general proof of stake blockchains employ a network of “validators” who contribute — or “stake” — their own crypto in exchange for a chance of getting to validate new transaction, update the blockchain, and earn a reward.

## PoW (Proof of Work)

Proof of work is the original crypto consensus mechanism, first used by Bitcoin. Proof of work and mining are closely related ideas. The reason it’s called “proof of work” is because the network requires a huge amount of processing power. Proof-of-work blockchains are secured and verified by virtual miners around the world racing to be the first to solve a math puzzle. The winner gets to update the blockchain with the latest verified transactions and is rewarded by the network with a predetermined amount of crypto.

## Seed (phrase) / Secret Recovery Phrase

The seed phrase, mnemonic, or Secret Recovery Phrase is a crucial part of public blockchain technology, originally created for Bitcoin, and goes by many names. However, they all refer to a set of ordered words which correspond to determined values. These values never change, and therefore the same string of words in the same order will always produce the same number–this is the underlying functionality that allows seed phrases to back up wallets. The Secret Recovery Phrase is exactly what it sounds like: something that is secret, and should be known only to the owner of the account. If the seed phrase is given to someone else, that person has complete control over the account; they can drain it of tokens and funds, execute transactions with it, etc.

## Smart Contract

Smart contracts are programs whose terms are recorded in computer code. While they often contain agreements or sets of actions between parties that emulate a traditional legal contract, they are not, in and of themselves, legal documents. Smart contracts are automated actions that can be coded and executed once a set of conditions is met, and are the dominant form of programming on the Ethereum Virtual Machine.

## Solidity

The programming language developers use to write smart contracts on the Ethereum network. See also [‘smart contract’](#smart-contract).

## Turing Complete

Any machine that can calculate on a level equal to a programmable computer is Turing Complete, or computationally universal. The EVM, despite not existing on a single physical computer, is Turing Complete.

## Token

A token represents an asset built on an existing blockchain. There are many types; see also [‘ERC-20’](#erc-20-token-standard) and [‘ERC-721’](#erc-721-token-standard) entries.

## Virtual Machine

A Virtual Machine (VM) is a compute resource that uses software instead of a physical computer to run programs and deploy apps. One or more virtual “guest” machines run on a physical “host” machine. Each virtual machine runs its own operating system and functions separately from the other VMs, even when they are all running on the same host. This means that, for example, a virtual MacOS virtual machine can run on a physical PC.
