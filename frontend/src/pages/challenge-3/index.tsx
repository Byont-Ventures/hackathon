import type { NextPage } from 'next';
import { useIsMounted } from 'src/hooks/useIsMounted';

import { ConnectButton } from '@rainbow-me/rainbowkit';

import { useBalance } from 'wagmi';
import { useAccount } from 'wagmi';

const Home: NextPage = () => {
  /*
   * TODO:
   * - Implement the BAYC ABI
   * - Display the name of the BAYC contract
   * - Display the symbol of the BAYC contract
   */
  const isMounted = useIsMounted();
  const account = useAccount();
  const balance = useBalance({
    addressOrName: account.address,
  });
  return (
    <>
      Welcome to Challenge 3!
      <ConnectButton></ConnectButton>
      <div>
        {' '}
        {balance && isMounted
          ? `Account balance: ${balance.data?.value}`
          : 'No data'}
      </div>
    </>
  );
};

export default Home;
