/*
 * TODO:
 * - Mint function seems to run on page load?
 * - Update totalsupply after mint
 * - No error handling for cancelling mint
 * - Upload more metadata + images to IPFS
 */
import type { NextPage } from 'next';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount } from 'wagmi';
import { useIsMounted } from 'src/hooks/useIsMounted';
import {
  useContractReads,
  usePrepareContractWrite,
  useContractWrite,
  useWaitForTransaction,
} from 'wagmi';

import { ContractAbi } from 'src/abis/ContractAbi';
import TestnetNFT from '@/components/Nft';
import { useEffect, useState } from 'react';
import { BigNumber } from 'ethers';

const Home: NextPage = () => {
  // Account data
  const account = useAccount();
  const isMounted = useIsMounted();

  // Contract config
  const contractAddress = '0xb977F55E1D888D740523d512c00B440A8c7C84DC';
  const ContractConfig = {
    address: contractAddress,
    abi: ContractAbi,
  };

  // Call contract functions
  const { data, isError } = useContractReads({
    contracts: [
      { ...ContractConfig, functionName: 'name' },
      { ...ContractConfig, functionName: 'symbol' },
      { ...ContractConfig, functionName: 'maxSupply' },
      {
        ...ContractConfig,
        functionName: 'totalSupply',
      },
    ],
  });

  // Total supply
  const [totalSupply, setTotalSupply] = useState(0);

  // Trigger get set totalSupply once we have retrieved totalSupply from the contract
  useEffect(() => {
    if (data != (null || undefined)) {
      const totalSupply = data[3];
      if (!totalSupply) {
        return;
      }
      setTotalSupply(totalSupply.toNumber());
    }
  }, [data]);

  // Get list of NFTS
  const getNFTList = () => {
    const nfts = [];
    for (let i = 0; i < totalSupply; i++) {
      nfts.push(
        <TestnetNFT
          key={`NFT: ${i}`}
          abi={ContractAbi}
          address={contractAddress}
          tokenId={i.toString()}
        ></TestnetNFT>
      );
    }
    return nfts;
  };

  // Mint
  const [amount, setAmount] = useState('0');
  const { config } = usePrepareContractWrite({
    address: contractAddress,
    abi: ContractAbi,
    functionName: 'mint',
    args: [BigNumber.from(amount)],
  });

  const {
    data: mintData,
    writeAsync: mint,
    isLoading: isMintLoading,
    isSuccess: isMintStarted,
  } = useContractWrite(config);

  const [mintError, setMintError] = useState('');
  const [mintSuccess, setMintSuccess] = useState(false);

  const onMintClick = async () => {
    try {
      setMintError('');
      setMintSuccess(false);
      if (!mint) {
        return;
      }
      const tx = await mint();
      const receipt = await tx.wait();
      console.log(receipt);
    } catch (error) {
      console.log(error);
      setMintError(error as string);
    } finally {
      if (mintError === '') {
        setMintSuccess(true);
      }
    }
  };

  const { isSuccess: txSuccess } = useWaitForTransaction({
    hash: mintData?.hash,
  });

  // const isMinted = txSuccess

  useEffect(() => {
    console.log('Success!');
  }, [txSuccess]);
  return (
    <>
      <div className="flex flex-col flex-wrap items-center">
        {/* Connected Wallet */}

        <div className="flex flex-col items-center m-[20px]">
          <h1 className="mb-[20px]">Welcome to Challenge 6!</h1>
          {account.isConnected && isMounted ? (
            <ConnectButton></ConnectButton>
          ) : (
            <h1>Please connect your wallet!</h1>
          )}
        </div>

        {/* Mint UI */}
        <div className="flex flex-col p-[20px] m-[20px] border border-black rounded-lg w-[400px] h-[400px]">
          <div className="flex flex-col mb-[20px]">
            {data && isMounted ? <h1>Name: {data[0]}</h1> : 'Loading...'}
            {data && isMounted ? <h1>Symbol: {data[1]}</h1> : 'Loading...'}
            {data && isMounted ? (
              <h1>{`${totalSupply} / ${data[2]}`} minted so far!</h1>
            ) : (
              'Loading...'
            )}
            <div className="h-[100px]">
              {mintSuccess && isMounted && (
                <h1 className="mt-[10px] font-bold text-green">
                  Mint success!
                </h1>
              )}
              {mintSuccess && isMounted && (
                <h1>
                  View on{' '}
                  <a href={`https://goerli.etherscan.io/tx/${mintData?.hash}`}>
                    Etherscan
                  </a>
                </h1>
              )}
              {mintSuccess && isMounted && (
                <h1>
                  View on{' '}
                  <a
                    href={`https://testnets.opensea.io/assets/goerli/${config.address}`}
                  >
                    Opensea
                  </a>
                </h1>
              )}
            </div>
            {isError && isMounted && <h1>An error has occurred</h1>}
          </div>
          <div className="flex flex-row items-center">
            <input
              type="number"
              min={1}
              max={5}
              onChange={(e) => {
                e.target.value != '' && setAmount(e.target.value);
              }}
              className="mr-[20px] text-center border border-black rounded-lg w-[100px] h-[50px]"
            ></input>
            {account.isConnected && isMounted ? (
              <button
                className="border border-black rounded-lg w-[100px] h-[50px]"
                onClick={onMintClick}
                disabled={isMintLoading || isMintStarted}
                data-mint-loading={isMintLoading}
                data-mint-started={isMintStarted}
              >
                {isMintLoading && 'Waiting for approval...'}
                {isMintStarted && 'Mint in progress...'}
                {!isMintLoading && !isMintStarted && 'MINT'}
              </button>
            ) : (
              <h1>
                <ConnectButton></ConnectButton>
              </h1>
            )}
          </div>
        </div>

        {/* List of NFTs */}
        <div className="flex flex-row flex-wrap items-center mb-[20px]">
          {isMounted && getNFTList()}
        </div>
      </div>
    </>
  );
};

export default Home;
