import type { NextPage } from 'next';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div className="space-y-4 max-w-prose">
      <h1 className="text-xl font-bold">
        Welcome to the Web3 Workshop by IntoTheNXT and Byont Labs
      </h1>
      <p>
        These challenges provide a way to get started with web3 frontend
        development. The goal is to build an NFT minting Dapp that interacts
        with the blockchain and IPFS to min and view NFTs. Initially, we'll
        provide some boilerplate code, but you'll quickly be left to build new
        pages.
      </p>
      <p>
        Start by reading{' '}
        <Link href="https://github.com/Byont-Ventures/Hackathon">
          <span className="font-bold text-blue-700 dark:text-blue-300 hover:opacity-80">
            the documentation on Github.
          </span>
        </Link>
      </p>
      <p>
        Then go to the next challenge:{' '}
        <Link href="/challenge-1">
          <span className="font-bold text-blue-700 dark:text-blue-300 hover:opacity-80">
            Challenge 1 - Let's get started! Running the Dapp
          </span>
        </Link>
      </p>
    </div>
  );
};

export default Home;
