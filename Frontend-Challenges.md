# Frontend Challenges

These challenges provide a way to get started with Web3 frontend development. To help you get started, we have included a well-tested Web3 Template in the [src](./src/) folder.  

The frontend is built on [React](https://reactjs.org/docs/getting-started.html) with [NextJS 13](https://nextjs.org/blog/next-13#new-app-directory-beta), so we will make use of the [app directory](./src/app/) for our pages. It also includes the [Wagmi](https://wagmi.sh/docs/getting-started) library. Wagmi has over 20 hooks that will make connecting your frontend to the blockchain easier. We are using [Tailwind CSS](https://tailwindcss.com/docs/installation) for styling.

The goal is to eventually build a full-fletched NFT minting Dapp! If you don't know what this means, don't worry, it will all become clear.

## Challenge 1 - Running the Dapp

If you do not know what a Dapp is, we recommend you read [this section](https://ethereum.org/en/developers/docs/dapps/).

Let's begin with an easy challenge, running the Dapp.

```yarn run fe:dev``` 

You will see a welcome message, a chain id with a number below and a footer. 
This is a server side page `page.tsx` that is passed as a child to the root layout `layout.tsx`. The number you see is some data. In this case: the chain ID of the currently connected chain. This data is being provided by the Wagmi client context provider. 

Feel free to edit this Dapp according to your needs. For example, you probably won't need the chain ID message, so feel free to remove it. 

Wagmi configuration can be found [here](./src/libs/wagmi.ts)


