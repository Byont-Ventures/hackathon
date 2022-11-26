import type { NextPage } from 'next';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useBalance } from 'wagmi';
import { useAccount } from 'wagmi';
import { useIsMounted } from 'src/hooks/useIsMounted';
import { useContractReads } from 'wagmi';
import { useNft } from 'use-nft';
import { BAYCAbi } from 'src/abis/BAYCAbi';

const Home: NextPage = () => {
  /*
   * TODO:
   * - Build a form that takes on user input for the mint amount
   * - Create a mint button
   * - Switch to the Goerli testnet
   * - Mint a couple of NFTs
   * - Display the current amount minted
   * - Display the max amount that can be minted
   * - Display minted NFTs from smart contract in a grid / gallery
   */

  // Account data
  const account = useAccount();
  const isMounted = useIsMounted();
  const balance = useBalance({
    addressOrName: account.address,
  });

  // Contract config
  const BAYCAddress = '0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D';
  const BAYCContractConfig = {
    address: BAYCAddress,
    abi: BAYCAbi,
  };

  // Call contract functions
  const { data, isError, isLoading } = useContractReads({
    contracts: [
      { ...BAYCContractConfig, functionName: 'name' },
      { ...BAYCContractConfig, functionName: 'symbol' },
    ],
  });

  // Get NFT image
  const { loading, error, nft } = useNft(BAYCAddress, '42');

  return (
    <>
      Welcome to Challenge 5!
      <ConnectButton></ConnectButton>
      <div>
        {' '}
        {balance && isMounted
          ? `Account balance: ${balance.data?.value}`
          : 'No data'}
      </div>
      {isMounted && isLoading ? (
        'Loading...'
      ) : (
        <>
          {isMounted && data && <div>{`Name: ${data[0]}`}</div>}
          {isMounted && data && <div>{`Symbol: ${data[1]}`}</div>}
          <div className="flex">
            {/* Images of NFTs */}
            {loading ? (
              'Loading...'
            ) : (
              <>
                {error || !nft ? (
                  <h1>{error.message}</h1>
                ) : (
                  <section>
                    <h1>{nft.name}</h1>
                    <img src={nft.image} alt="" />
                    <p>{nft.description}</p>
                    <p>Owner: {nft.owner}</p>
                    <p>Metadata URL: {nft.metadataUrl}</p>
                  </section>
                )}
              </>
            )}
          </div>
        </>
      )}
      <div> {isError && isMounted && 'Error'}</div>
    </>
  );
};

export default Home;
