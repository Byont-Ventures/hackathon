# Glossary For Crypto Dummies

The glossary is a non-exhaustive list of blockchain-related terms you might encounter and their explanations.

- [Glossary For Crypto Dummies](#glossary-for-crypto-dummies)
  - [ABI (Application Binary Interface)](#abi-application-binary-interface)
  - [Account](#account)
  - [Address](#address)
  - [Airdrop](#airdrop)
  - [Altcoin](#altcoin)
  - [AML (Anti-Money Laundering)](#aml-anti-money-laundering)
  - [AMM (Automated Market Maker)](#amm-automated-market-maker)
  - [API (Application Programming Interface)](#api-application-programming-interface)
  - [Audit](#audit)
  - [Beacon Chain](#beacon-chain)
  - [Bitcoin/bitcoin (BTC)](#bitcoinbitcoin-btc)
  - [Block](#block)
  - [Blockchain](#blockchain)
  - [Bytecode](#bytecode)
  - [Client (Ethereum or other compatible blockchains)](#client-ethereum-or-other-compatible-blockchains)
  - [Cold Wallet / Cold Storage](#cold-wallet--cold-storage)
  - [Coin](#coin)
  - [Consensus (mechanism)](#consensus-mechanism)
  - [Contract](#contract)
  - [Cryptocurrency / Crypto](#cryptocurrency--crypto)
  - [DAO](#dao)
  - [Decentralization](#decentralization)
  - [Decentralized Application (Dapp)](#decentralized-application-dapp)
  - [DeFi](#defi)
  - [Decentralized exchange (DEX)](#decentralized-exchange-dex)
  - [Distributed Leger](#distributed-leger)
  - [DYOR (Do Your Own Research)](#dyor-do-your-own-research)
  - [EIP (Ethereum Improvement Proposal)](#eip-ethereum-improvement-proposal)
  - [ERC-20 Token Standard](#erc-20-token-standard)
  - [ERC-721 Token Standard](#erc-721-token-standard)
  - [ether (ETH)](#ether-eth)
  - [Ethereum / ethereum](#ethereum--ethereum)
  - [ENS](#ens)
  - [EVM (Ethereum Virtual Machine)](#evm-ethereum-virtual-machine)
  - [Exchange](#exchange)
  - [Faucet](#faucet)
  - [Fiat Currency](#fiat-currency)
  - [Fungible](#fungible)
  - [Fork](#fork)
  - [Gas](#gas)
  - [Gas Limit](#gas-limit)
  - [Gas Price](#gas-price)
  - [Gwei](#gwei)
  - [Hash](#hash)
  - [HD Wallet](#hd-wallet)
  - [Hexadecimal](#hexadecimal)
  - [Hot Wallet / Hot Storage](#hot-wallet--hot-storage)
  - [Hyperledger](#hyperledger)
  - [ICO](#ico)
  - [InterPlanetary File System (IPFS)](#interplanetary-file-system-ipfs)
  - [Keystore File](#keystore-file)
  - [Know Your Customer (KYC)](#know-your-customer-kyc)
  - [Layer 0 (L0)](#layer-0-l0)
  - [Layer 1 (L1)](#layer-1-l1)
  - [Layer 2 (L2)](#layer-2-l2)
  - [Liquidity](#liquidity)
  - [Liquidity Pool](#liquidity-pool)
  - [Mainnet](#mainnet)
  - [Market Cap](#market-cap)
  - [Merkle Tree / Merkle Trie](#merkle-tree--merkle-trie)
  - [MetaMask](#metamask)
  - [Mining](#mining)
  - [Mint / Minting](#mint--minting)
  - [Mnemonic Phrase](#mnemonic-phrase)
  - [NFT](#nft)
  - [Multi Signature (MultiSig)](#multi-signature-multisig)
  - [Node](#node)
  - [Nonce](#nonce)
  - [Non-Fungible](#non-fungible)
  - [Optimistic rollup](#optimistic-rollup)
  - [Oracle](#oracle)
  - [Permissionless](#permissionless)
  - [PoS (Proof of Stake)](#pos-proof-of-stake)
  - [PoW (Proof of Work)](#pow-proof-of-work)
  - [Private Key](#private-key)
  - [Protocol](#protocol)
  - [Public Key](#public-key)
  - [Rollup](#rollup)
  - [RPC](#rpc)
  - [Rug pull](#rug-pull)
  - [Seed (phrase) / Secret Recovery Phrase](#seed-phrase--secret-recovery-phrase)
  - [Sidechains](#sidechains)
  - [Smart Contract](#smart-contract)
  - [Solidity](#solidity)
  - [Stablecoin](#stablecoin)
  - [Staking](#staking)
  - [Testnet](#testnet)
  - [Trustless](#trustless)
  - [Turing Complete](#turing-complete)
  - [Token](#token)
  - [Validator](#validator)
  - [Virtual Machine](#virtual-machine)
  - [WAGMI](#wagmi)
  - [Wallet](#wallet)
  - [Web1 / Web 1.0](#web1--web-10)
  - [Web2 / Web 2.0](#web2--web-20)
  - [Web3 / Web 3.0](#web3--web-30)
  - [Web4 / Web 4.0](#web4--web-40)
  - [Web5 / Web 5.0](#web5--web-50)
  - [Zero Address](#zero-address)
  - [Zero Knowledge Proof (ZK-proof)](#zero-knowledge-proof-zk-proof)

## ABI (Application Binary Interface)

The Application Binary Interface (ABI) is an interpreter that facilitates communication with the EVM bytecode. The Solidity ABI is a human-readable list of methods on a smart contract for executing particular functions. You can use the ABI with a library like ethers.js to interact with smart contracts.

An ABI in Solidity is similar to, but also different from, an [API](#api-application-programming-interface) (Application Program Interface).

## Account

A public and private key pair that gives you access to, and control over, the tokens held under a specific address. The blockchain keeps track of what tokens are held in by each account; the tokens aren't "in" the wallet or account, but we often talk that way because the metaphor makes sense.

In Ethereum-compatible blockchains, a Secret Recovery Phrase (SRP) can generate several accounts that approach infinity. Each account has its key pair, but the SRP can control them all.

Just like a GitHub account has a username (public) and password (private), so does an Ethereum account; the difference is that you are the custodian of your Ethereum keys, while usually, GitHub holds your login information for their site. For additional security, you can use a password to encrypt your private key, which would result in a username (public) and password (private) and password for that password (private + more secure). See also [‘keystore file’](#keystore-file), [‘Secret Recovery Phrase’](#seed-phrase--secret-recovery-phrase).

## Address

Used to send and receive transactions on a blockchain network and to identify different users; also referred to as a 'public key.' An address is an alphanumeric character string, which can also be represented as a scannable QR code. In Ethereum, the address begins with 0x. For example 0x06A85356DCb5b307096726FB86A78c59D38e08ee

## Airdrop

Airdrops are token distribution methods to send cryptocurrency or tokens to wallet addresses. Sometimes airdrops are used for marketing purposes in exchange for simple tasks like reshares, referrals, or app downloads.

## Altcoin

As Bitcoin was the first cryptocurrency, the community created the term 'altcoin' to refer to 'any cryptocurrency other than Bitcoin.' Ethereum or smart-contract-enabled blockchain communities use the word less. Many altcoins are forks of Bitcoin with minor changes (e.g., Litecoin). See also ['fork'](#fork).

## AML (Anti-Money Laundering)

A set of international laws enacted to diminish the potential for criminal organizations or individuals to launder money. The government applies these rules and regulations to cryptocurrencies with varying effects in different jurisdictions.

## AMM (Automated Market Maker)

Automated market makers (AMM) enable unstoppable, automated, and decentralized trading using algorithms to price assets in liquidity pools. Traditional exchanges require buyers, sellers, and a central reserve of assets. In contrast, AMM exchanges crowdsource liquidity and use smart contracts to execute trades.

## API (Application Programming Interface)

A predefined set of requests that one program can make to another to transfer information. When you hear someone saying that an application is "getting information from" another source, it's often doing so through an API. Not to be confused with [ABI](#abi-application-binary-interface).

## Audit

A smart contract audit involves a detailed analysis of the contract's code to identify security issues and incorrect and inefficient coding and to determine ways to resolve the problems. The audit process is essential to ensuring blockchain applications' security and reliability.

With a smart contract, the code is the law, meaning there is no room for error. The contract can run only as the coding dictates. And once deployed, developers can't fix them. They must create a new version and deploy that, which can be costly and time-consuming. Smart contract auditors can help to ensure that coding is safe and secure.

## Beacon Chain

The Beacon Chain was one element built into the infrastructure to scale Ethereum. It was the foundation for transitioning from a Proof of Work (PoW) consensus mechanism to Proof of Stake (PoS).

## Bitcoin/bitcoin (BTC)

The first cryptocurrency based on a Proof of Work (PoW) blockchain. Bitcoin was created in 2009 by Satoshi Nakomoto — a pseudonym for an individual whose real identity is unknown — and a white paper titled "Bitcoin: A Peer-to-Peer Electronic Cash System" outlined the concept of cryptocurrency. Use "Bitcoin" for the blockchain/network; "bitcoin" for the cryptocurrency. The plural of bitcoin is just bitcoin; the abbreviation is BTC, with a space: I have 250 BTC.

## Block

Think of a blockchain as consisting of a ledger that is constantly updated, and those changes synced between any number of different nodes (in fact, "distributed ledger technology" is another phrase used to describe it).

After a certain number of transactions have been added to the ledger and consensus has been reached among the nodes that the transactions are valid, they are then cryptographically locked into a "block" and officially recorded. This "block" forms the basis for the next one; in this way, they are all linked together in a chain, hence–blockchain.

## Blockchain

A digital ledger comprised of unchangeable, digitally recorded data in packages called blocks. Each block is 'chained' to the next using a cryptographic signature. Ethereum is a public blockchain, open to the world; its digital ledger is distributed, or synced, between many nodes; these nodes arrive at a consensus regarding whether a transaction is valid before encrypting it, along with several other valid transactions, into a block. See also ['block'](#block).

## Bytecode

Bytecode is a "low-level" computer language, that is, meant to be processed by a computer rather than a "high-level," more human-readable, language. In Ethereum, higher-level Solidity is compiled into Ethereum bytecode that the Ethereum Virtual Machine (EVM) reads.

## Client (Ethereum or other compatible blockchains)

In computing, in general, a 'client' is a program running on a local computer that is accessing data made available by a remote computer. In public blockchain networks, a 'client' is the software that does the work of syncing block data, confirming transactions, and participating in the network consensus. A client usually includes a cryptocurrency software wallet.

## Cold Wallet / Cold Storage

An offline wallet that never connects to the internet. These wallets protect cryptocurrencies from getting hacked online.

## Coin

The term 'coin' has some nuances. Strictly speaking, a 'coin' could be defined as:

A fungible token (all identical) issued on a blockchain, either as the network's transactional token or through a smart contract deployed to that network.

Some people may use 'coins' as shorthand for 'bitcoin'; the immortal aphorism 'not your keys, not your coins' refers to bitcoins. Another thing to remember is that, while coins are put forward as a representation of value, that value can vary wildly from one 'coin' to another. A coin may represent the value of the computational resources of the network, or it may be 'pegged' to represent fiat currency value, or it may float according to the value placed on immaterial resources like NFTs, membership, or digital goods, to name a few.

## Consensus (mechanism)

The process used by a group of peers, or nodes, on a blockchain network to agree on the validity of transactions submitted to the network. Dominant consensus mechanisms are Proof of Work (PoW) and Proof of Stake (PoS).

## Contract

See [`smart contract`](#smart-contract).

## Cryptocurrency / Crypto

Even though this prefix is originally Greek, our current usage comes from cryptography. Technologies that are referred to with the blanket term of "crypto" tech are underlain by cryptographic tools and processes (such as public/private key pairs) that enable innovative functionality and security. Of course, "cryptocurrency" often gets shortened to simply "crypto," so this emerging field is full of instances where something "crypto" is being added to or shortened. With the emergence of the term "Web3", arguably, a distinction has begun to be made between "crypto," referring to DeFi, and other financial use cases of the technology. In contrast, "Web3" refers to the transition of Internet-based activities to more decentralized practices and platforms.

## DAO

A Digital Decentralized Autonomous Organization (DAO, pronounced like the Chinese concept) is a powerful and very flexible organizational structure built on a blockchain.

Alternatively, the first known example of a DAO is referred to as The DAO. The DAO served as an investor-directed venture capital fund, which sought to provide enterprises with new decentralized business models. Ethereum-based, The DAO's code was open source. The organization set the record for the most crowdfunded project in 2016. Hackers partially stole those funds. The hack caused an Ethereum hard fork, leading to Ethereum Classic's creation.

## Decentralization

The transfer of authority and responsibility from a centralized organization, government, or party to a distributed network.

## Decentralized Application (Dapp)

An open-source software application with backend code running on a decentralized peer-to-peer network rather than a centralized server. You may see alternate spellings: dApps, DApps, Dapps, and Đapps.

## DeFi

DeFi (or "decentralized finance") is an umbrella term for financial services on public blockchains, primarily Ethereum. With DeFi, you can do most of the things banks support — earn interest, borrow, lend, buy insurance, trade derivatives, trade assets, and more — but it's faster and doesn't require paperwork or a third party. As with crypto generally, DeFi is global, peer-to-peer (meaning directly between two people, not routed through a centralized system), pseudonymous, and open to all.

DeFi takes the basic premise of Bitcoin — digital money — and expands on it, creating an entire digital alternative to Wall Street, but without all the associated costs (think office towers, trading floors, banker salaries), creating open, free, and fair financial markets that are accessible to anyone with an internet connection.

## Decentralized exchange (DEX)

A decentralized exchange is a platform for exchanging cryptocurrencies based on functionality programmed on the blockchain (i.e., in smart contracts). The trading is peer-to-peer or between pools of liquidity. This contrasts with a centralized exchange, which is more akin to a bank or investment firm specializing in cryptocurrencies. Significant technical and regulatory differences between the two are constantly evolving.

## Distributed Leger

A type of database that spreads across multiple sites, countries, or institutions. Records are stored sequentially in a continuous ledger. Distributed ledger data can be either "permissioned" or "unpermissioned" to control who can view it.

## DYOR (Do Your Own Research)

DYOR stands for Do Your Own Research and aims to reduce the number of uninformed investors in cryptocurrency. It encourages them to research and understand a cryptocurrency before investing so that they can answer precisely why they are buying that currency and supporting that project. The term is often used as a disclaimer when cryptocurrency traders and enthusiasts make public posts or share their market analyses on social media platforms.

## EIP (Ethereum Improvement Proposal)

EIPs describe standards for the Ethereum platform, including core protocol specifications, client APIs, and contract standards. They are, precisely, proposals for modifications to the network and how it functions.

## ERC-20 Token Standard

ERC (Ethereum Request for Comment) followed by the assignment number of the standard. ERC-20 is a technical standard for smart contracts used to issue the majority of tokens (in particular, cryptocurrency tokens) extant on Ethereum. This list of rules states the requirements a token must fulfill to comply and function within the Ethereum network.

## ERC-721 Token Standard

As stated above, this is another standard for Ethereum smart contracts, which allows for issuing a non-fungible token, also known as an NFT. You can use this token standard to represent a unique digital asset that is not interchangeable.

## ether (ETH)

Ether is the native currency of the Ethereum blockchain network. Ether—also referred to as ETH (pronounced with a long "e," like "teeth" without the "t")—functions as a fuel of the Ethereum ecosystem by acting as a medium of incentive and form of payment for network participants to execute essential operations. The cryptocurrency of Ethereum has a lowercase e. The plural of ether is just ether; its abbreviation is ETH, with a space: I have 10 ETH.

## Ethereum / ethereum

At its core, Ethereum is a decentralized global software platform powered by blockchain technology. It is most commonly known for its native ether (ETH) cryptocurrency.

Anyone can use Ethereum to create any secured digital technology. It has a token designed to pay for work supporting the blockchain, but participants can also use it to pay for tangible goods and services if accepted.

Ethereum aims to be scalable, programmable, secure, and decentralized. It is the blockchain of choice for developers and enterprises creating technology based upon it to change how many industries operate and how we go about our daily lives.

It natively supports smart contracts, an essential tool behind decentralized applications.

Many decentralized finance (DeFi) applications and others use smart contracts with blockchain technology.

## ENS

The Ethereum Name Service is a protocol to assign human-readable and easy-to-remember addresses to Ethereum addresses and assets, homologous to the traditional internet's DNS.

## EVM (Ethereum Virtual Machine)

The EVM is a virtual machine that operates on the Ethereum network. It is Turing complete and allows anyone, anywhere, to execute arbitrary EVM bytecode. All Ethereum nodes run on the EVM. It is home to smart contracts based on the Ethereum blockchain.

## Exchange

An exchange is a marketplace where you can trade securities, commodities, derivatives, and other financial instruments. The core function of an exchange is to ensure fair and orderly trading and the efficient dissemination of price information for any securities trading on that exchange.

## Faucet

A faucet is an application, sometimes a website, other times more complex, that dispenses cryptocurrency for use on test networks only. Developers use these faucets to test dapps or smart contracts before deploying them on Ethereum Mainnet or users who want to practice on the blockchain with no risk. Tokens dispensed by a test faucet stay on the test networks, and you cannot exchange them for mainnet equivalents.

## Fiat Currency

Government-issued currency. For example, US Dollars (USD), Euros (EUR), Yuan (CNY), and Yen (JPY).

## Fungible

An asset is fungible when its units are interchangeable, meaning they are indistinguishable. For example, a pound of pure gold equals any other pound of pure gold, regardless of the shape. Other examples of fungible asset classes may include commodities, fiat currencies, bonds, precious metals, and cryptocurrencies.

## Fork

A fork creates an alternative version of a blockchain, and people often intentionally enact them to apply upgrades to a network. Soft Forks render two chains with some compatibility, while Hard Forks create a new version of the chain that you must adopt to continue participation. In the instance of a contentious Hard Fork, this can create two versions of a blockchain network.

## Gas

A measure of the computational steps required for a transaction on the Ethereum network, translating to a fee for network users paid in small units of ETH specified as Gwei

## Gas Limit

The maximum amount you're willing to pay for any given transaction through the Ethereum network is the gas limit. Another way of looking at it is as a "rough estimate" of how much computing power your transaction will take.

## Gas Price

The gas price is what it sounds like: the cost for the computational work performed in a given transaction paid in units of ETH called Gwei. Depending on network congestion, the gas price may vary significantly.

## Gwei

A minuscule and common denomination of ETH and the unit in which gas prices are often specified.

## Hash

A programmatic function that takes an input and outputs an alphanumeric string is known as the "hash value" or "digital fingerprint." Each block in the blockchain contains the hash value that validated the transaction before it, followed by its hash value. Hashes confirm transactions on the blockchain.

## HD Wallet

Hierarchical Deterministic wallets were first created for Bitcoin and enabled the creation of a massive number of accounts based on an initial seed phrase. People later adopted this technology in Ethereum wallets; when restoring a MetaMask wallet from the Secret Recovery Phrase, for example, if you "create" accounts, they will be the same accounts as previously created from that exact phrase; they are derived from it.

## Hexadecimal

Hexadecimal is a base 16, rather than base 10, counting system. Used all over Ethereum for various things, a hexadecimal string consists of the numbers 0, 1, 2, 3, 4, 5, 6, 7, 8, and 9 and letters A B C D E F.

## Hot Wallet / Hot Storage

A wallet that is always directly connected to the internet, for example, is held on a centralized exchange. People consider hot wallets to have lower security than cold storage systems or hardware wallets.

## Hyperledger

Hyperledger is an ecosystem of open-system tools, libraries, and products designed to enable and support enterprise-grade blockchain technology. The products generally focus on creating solutions for permissioned blockchains–non-public blockchains with alternative consensus mechanisms other than Proof of Work (PoW) or Proof of Stake (PoS).

There are use cases where such institutions would want to integrate with public blockchains. For that reason, Hyperledger Besu and Hyperledger Burrow are actively developing projects, the former being a Java-based Ethereum client and the latter being a smart contract platform that supports EVM bytecode.

## ICO

An Initial Coin Offering (also called ICO) occurs when a new cryptocurrency sells advance tokens in exchange for upfront capital. These have been a vehicle for fraud and scams and, as such, are subject to ever-evolving regulation and legislation.

## InterPlanetary File System (IPFS)

A decentralized file storage and referencing system for the Ethereum blockchain. IFPS is an open-source protocol that enables storing and sharing hypermedia (text, audio, visual) in a distributed manner without relying on a single point of failure. This distributed file system allows applications to run faster, safer, and more transparently.

## Keystore File

A keystore file is a unique, encrypted version of a private key in JSON format. See also 'private key.'

## Know Your Customer (KYC)

A process in which a business must verify its customers' identity and background information (address, financials, etc.). For example, current regulations and laws require banks and other financial institutions to keep and report customers' personal information and transactions.

## Layer 0 (L0)

Layer 0 is a network framework that runs beneath a blockchain, comprising protocols, connections, hardware, miners, and other components that constitute the backbone of a blockchain ecosystem. The most renowned Layer 0 protocols at present are Polkadot (DOT), Avalanche (AVAX), and Cosmos (ATOM).

## Layer 1 (L1)

Layer 1 is the base blockchain. Ethereum and Bitcoin are both layer 1 blockchains because they are the underlying foundation that various layer 2 networks build on top of.

## Layer 2 (L2)

Layer 2 (L2) is a collective term to describe a specific set of Ethereum scaling solutions. Layer 2 is a separate blockchain that extends Ethereum and inherits the security guarantees of Ethereum. Examples of layer 2 projects include "rollups" on Ethereum and the Lightning Network on top of Bitcoin. All user transaction activity on these layer 2 projects can ultimately settle back to the layer 1 blockchain.

## Liquidity

The availability of liquid assets to a company or market. You can consider an asset more liquid if you can easily convert it into cash. The harder the ability to turn an asset into cash, the more illiquid the asset. For example, stocks are considered relatively liquid assets as you can easily convert them to cash, while real estate is considered illiquid. The liquidity of an asset affects its risk potential and market price.

## Liquidity Pool

A liquidity pool is a crowdsourced pool of cryptocurrencies or tokens locked in a smart contract that facilitates trades between the assets on a decentralized exchange (DEX). Instead of traditional buyers and sellers markets, many decentralized finance (DeFi) platforms use automated market makers (AMMs), which allow digital assets to be traded automatically and permissionless through liquidity pools.

## Mainnet

The primary network where actual transactions take place on a specific distributed ledger. For example, The Ethereum mainnet is the public blockchain where network validation and transactions occur.

## Market Cap

Short for Market Capitalization refers to the total value held in a particular industry, market, company, or asset. For a publicly traded company, the market cap is the total dollar market value of a company's outstanding shares. For Bitcoin or Ethereum, the total market cap reflects the current supply times the market price.

## Merkle Tree / Merkle Trie

A Merkle Patricia trie (pronounced "tree") is a data structure in which a single hash code function (a type of cryptographic code) splits into smaller branches. In a similar way to a family tree, where a parent branch splits into child branches, which are then extrapolated into grandchild branches, a Merkle Patricia trie keeps a record of the filiation and history of each element. This type of data structure enables faster verification on a blockchain network.

## MetaMask

MetaMask, either in its mobile app form on iOS and Android or in its browser extension form, is a tool to access and interact with blockchains and the decentralized web. Its functions include that of a wallet, a dapp permissions manager, and a token swap platform.

## Mining

The process by which blocks or transactions are verified and added to a blockchain using a Proof of Work (PoW) consensus mechanism. To confirm a block, a miner must use a computer to solve a cryptographic problem. Once the computer has solved the problem, the block is considered "mined" or verified. In the Bitcoin or Ethereum PoW blockchains, the first computer to mine or verify the block receives bitcoin or ether as a reward.

## Mint / Minting

Minting crypto generates new coins by authenticating data, creating new blocks, and recording the information onto the blockchain through a "proof of stake" protocol. This way, you can mint new cryptocurrency units and Non-Fungible Tokens (NFTs).

Newly minted cryptocurrency is added to the circulation to be traded, hence the origin of the term "minting" – just as we would use it to describe a government minting new physical coins.

Proof of stake is a minting method of forming blocks through staking instead of "mining" under the "proof of work" protocol. Users are called validators (rather than miners) who mint crypto.

## Mnemonic Phrase

See ['seed phrase / secret recovery phrase'](#seed-phrase--secret-recovery-phrase).

## NFT

When discussing Non-Fungible Tokens (NFTs), "fungibility" refers to an object's ability to be exchanged for another. For example, you can consider an individual dollar fungible as we can trade dollars with one another. Artwork is usually deemed non-fungible as paintings, sculptures, or masterpieces are likely unequal in quality or value. A non-fungible token is a type of token that is a unique digital asset and has no equal token, in contrast to fungible cryptocurrencies like ether.

## Multi Signature (MultiSig)

A crypto-asset wallet that requires multiple keys to access. Typically, a specified number of individuals must approve or "sign" a transaction before accessing the wallet, differing from most wallets which only require one signature to approve a transaction.

## Node

A "node" is any instance of Ethereum client software connected to other computers also running Ethereum software, forming a network.

## Nonce

The word 'nonce' has a few different meanings, and in other contexts, it gets used in many different ways. Originally formed from a contraction of a phrase meaning "not more than once," on the Ethereum mainnet, "nonce" refers to a unique transaction identification number that increases in value with each successive transaction to ensure various safety features (such as preventing a double-spend). Note that due to its broader use in cryptography, you may encounter 'nonce' being used differently on other sidechains or decentralized projects.

## Non-Fungible

Non-fungible tokens (see also: [NFT](#nft)) are cryptographic assets on a blockchain with unique identification codes and metadata that distinguish them from each other.

Unlike cryptocurrencies, they cannot be traded or exchanged at equivalency in contrast to fungible tokens like cryptocurrencies, which are identical to each other and, therefore, can serve as a medium for commercial transactions.

## Optimistic rollup

A rollup that assumes the validity and good faith of transactions and only runs a fraud-proof in the case of fraud is alleged. See also [‘rollup’](#rollup).

## Oracle

Typically, an oracle is any entity or person relied on to report the outcome of an event. In a blockchain network, an oracle (human or machine) helps communicate data to a smart contract which you can then use to verify an event or specific outcome.

## Permissionless

Permissionless means you can freely join and use a blockchain network and participate in consensus without obtaining permission, approval, or authorization. In contrast to permissionless blockchains, permissioned blockchains have gatekeepers that decide who can and cannot access, use, and govern the blockchain.

## PoS (Proof of Stake)

In a proof of stake system, staking serves a similar function to proof of work's mining in that it's the process by which a network participant gets selected to add the latest batch of transactions to the blockchain and earn some crypto in exchange.

The exact details vary by project, but in general, proof of stake blockchains employ a network of "validators" who contribute — or "stake" — their crypto in exchange for a chance to validate a new transaction, update the blockchain, and earn a reward.

## PoW (Proof of Work)

Proof of work is the original crypto consensus mechanism, first used by Bitcoin. Proof of work and mining are closely related ideas. The reason it's called "proof of work" is that the network requires a considerable amount of processing power. Proof-of-work blockchains are secured and verified by virtual miners around the world racing to be the first to solve a math puzzle. The winner gets to update the blockchain with the latest verified transactions. The network then rewards the winner with a predetermined amount of crypto.

## Private Key

A private key is an alphanumeric string of data that, in MetaMask, corresponds to a single specific account in a wallet. Private keys are a password that enables an individual to access their crypto account. Never reveal your private key to anyone, as whoever controls the private key controls the account funds. If you lose your private key, you lose access to that account.

## Protocol

A set of rules that dictate how data is exchanged and transmitted.

## Public Key

In cryptography, you have a keypair: the public and private key. You can derive a public key from a private key but cannot derive a private key from a public key. The public key, therefore, is obtained and used by anyone to encrypt messages before they are sent to a known recipient with a matching private key for decryption. By pairing a public key with a private key, transactions are not dependent on trusting involved parties or intermediaries. The public key encrypts a message into an unreadable format, and the corresponding private key makes it readable again for the intended party and the intended party only.

## Rollup

Rollups (pronounced "roll ups") are one element in the tools and infrastructure built as Layer 2, the scaling solutions for the Ethereum network. They consist, in general, of solutions in which the transaction data is still kept on Layer 1, the original Ethereum network. In contrast, transaction computation occurs on a side network, freeing up computational power on the layer. There are different ways of approaching this problem from a technical point of view, namely Zero Knowledge, or ZK, rollups, and Optimistic rollups.

## RPC

The Remote Procedure Call is a protocol that, while not blockchain-specific, transfers data between endpoints. You may often see it referred to as JSON-RPC, which is its full name.

## Rug pull

Similar to the traditional financial scam of a pyramid scheme, a 'rug pull' is a cryptocurrency or crypto-token-based fraud in which the token creators create hype by injecting liquidity into their token, airdropping, and other schemes. Once investors pile in and boost the token's price up to a certain point, the creators liquidate their share of the tokens, leaving their investors with nothing.

## Seed (phrase) / Secret Recovery Phrase

The seed phrase, mnemonic, or Secret Recovery Phrase is a crucial part of public blockchain technology, initially created for Bitcoin, and goes by many names. However, they all refer to a set of ordered words corresponding to determined values. These values never change; therefore, the exact string of words in the same order will always produce the same number–this is the underlying functionality that allows seed phrases to back up wallets. The Secret Recovery Phrase is precisely what it sounds like: secret and should be known only to the account owner. If you give the seed phrase to someone else, that person has complete control over the account; they can drain it of tokens and funds, execute transactions with it, etc.

## Sidechains

A sidechain is what it sounds like — it is a separate blockchain that is Ethereum-compatible. While a sidechain is a sort of scaling tool, as a class, sidechains aren't part of Layer 2; they represent a way in which developers can build and enable cheaper transactions for the user (on the sidechain, in sidechain-native tokens or currencies) while maintaining compatibility with the Ethereum network. That often requires routing tokens through a particular portal or bridge, as sending tokens from a sidechain to the Ethereum mainnet or vice versa would result in token loss.

## Smart Contract

Smart contracts are programs whose terms are recorded in computer code. While they often contain agreements or sets of actions between parties that emulate a traditional legal contract, they are not, in and of themselves, legal documents. Smart contracts are automated actions that can be coded and executed once a set of conditions is met and are the dominant form of programming on the Ethereum Virtual Machine.

## Solidity

The programming language developers use to write smart contracts on the Ethereum network. See also ['smart contract'](#smart-contract).

## Stablecoin

Always spelled as one word, a stablecoin is any cryptocurrency pegged to a stable asset, like fiat currency or gold. It remains stable in price as it is measured against a known amount of an asset less subject to fluctuation.

## Staking

In the Ethereum context, 'staking' of tokens or currency carries the traditional meaning of 'setting aside currency for a determined purpose; however, 'staking' can happen in various venues with different effects. For example, on decentralized exchanges (DEXes), no centralized authority or bank puts up the funds to allow transfers to happen between parties; rather, the parties amongst themselves have to establish liquidity pools to facilitate swaps. In this context, someone might 'stake' tokens into a liquidity pool, often for a promised rate of return in exchange for using their tokens, with the option to withdraw their tokens later.

On the Beacon Chain and Ethereum 2.0, 'staking' means something a bit different: You can stake 32 ETH at a determined smart contract address to operate a validator on the Beacon Chain; in this way, you help ensure the good functioning and safety of the network, and the chain rewards you for your staking.

## Testnet

An alternative blockchain that developers use to test applications in a near-live environment.

## Trustless

'Trustless' is a term that gets used extensively in the decentralized web and deserves some explanation. Traditionally, to call something 'trustless' would sound like a negative thing. In the context of decentralized technology, it has a more technical meaning. Since everyone has a copy of the ledger of all transactions ever executed, there is no need for a third-party repository of 'truth' in whom trust resides. We don't rely on some centralized server somewhere that could be hacked or changed arbitrarily; anyone can verify the transactions themselves. The rules and assurances built into the blockchain provide the basis for greater trust because the system works equally for everyone.

## Turing Complete

Any machine that can calculate on a level equal to a programmable computer is Turing Complete or computationally universal. Despite not existing on a single physical computer, the EVM is Turing Complete.

## Token

A token represents an asset built on an existing blockchain. There are many types; see also [‘ERC-20’](#erc-20-token-standard) and [‘ERC-721’](#erc-721-token-standard) entries.

## Validator

A validator is a node in a proof-of-stake system responsible for storing data, processing transactions, and adding new blocks to the blockchain. To active validator software, you must be able to stake 32 ETH.

## Virtual Machine

A Virtual Machine (VM) is a compute resource that uses software instead of a physical computer to run programs and deploy apps. One or more virtual "guest" machines run on a physical "host" machine. Each virtual machine runs an operating system and functions separately from the other VMs, even when they are all running on the same host. This means that, for example, a virtual macOS virtual machine can run on a physical PC.

## WAGMI

WAGMI is slang for "We're all going to make it. "

It's a rallying cry, seen on social media platforms like Twitter, for building hope and confidence in the crypto markets, especially when good news comes out.

It is also a library that offers React hooks for building Ethereum Dapps.

## Wallet

A designated storage location for digital assets (cryptocurrency) that has an address for sending and receiving funds. The wallet can be online, offline, or on a physical device.

## Web1 / Web 1.0

Web 1.0 is the term used for the earliest version of the internet. It emerged from its origins with Defense Advanced Research Projects Agency (DARPA) and became, for the first time, a global network representing the future of digital communications. It describes the first "iteration" of what became a growing, evolving medium that eventually expanded into a platform with profound multi-functional uses.

## Web2 / Web 2.0

Web 2.0 describes the current state of the internet, which has more user-generated content and usability for end-users than its earlier incarnation, Web 1.0. Web 2.0 refers to the 21st-century Internet applications that have transformed the digital era after the dot-com bubble.

## Web3 / Web 3.0

Web3, or Web 3.0, are terms synonymously with "the decentralized web" and are often used to refer broadly to the blockchain and decentralized technology ecosystems.

## Web4 / Web 4.0

Web 4.0 services will be autonomous, proactive, content-exploring, self-learning, collaborative, and content-generating agents based on fully matured semantic and reasoning technologies and AI. They will support an adaptive content presentation using the Web database via an intelligent agent. Examples might be services interacting with sensors and implants, natural-language services, or virtual reality services.

## Web5 / Web 5.0

TBD, a company of Jack Dorsey's Block Inc. (formerly known as square), brought up Web5 by announcing it on Twitter, intending even to be extra decentralized using the Bitcoin layer 2 solution, which is the lightning network. According to the document TBD shared on Twitter, Web5 is "A new evolution of the Web that enables decentralized apps and protocols." TBD or Jack Dorsey wasn't interested in keeping the names in order with the numbers. They just went and called the new idea Web5.

Plus, it's about something other than wanting to keep it in order; they also wanted to illustrate how Web2 + Web3 = Web5.

The primary vision of web5 is comparable to that of Web3, yet each has its unique characteristics. Web3 apps' concepts take the form of smart contracts deployed on public blockchains like Ethereum. Many individuals refer to web3 as a decentralized application (DApps). Its underlying code resides on a blockchain-based decentralized network.

On the other hand, web5 includes decentralized web applications (DWAs) that are not blockchain-based but can communicate with DWNs. This results in forming a peer-to-peer relaying network that exists independently of any public blockchain.

With web5, you have control of your data, which you can save on DWNs. On the other hand, web3 stores data on the decentralized network or distributed file system with IPFS capable of distributing and storing data in a peer-to-peer network system.

## Zero Address

The Zero Address `0x0` is an address on the Ethereum network that is the recipient of a particular transaction used to register the creation of a new smart contract on the network.

## Zero Knowledge Proof (ZK-proof)

A zero-knowledge proof is a way of proving the validity of a statement without revealing the message itself. The 'prover' is the party trying to prove a claim, while the 'verifier' is responsible for validating the claim.
