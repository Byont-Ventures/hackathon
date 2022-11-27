import { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import { providers } from 'ethers';

const Challenge1: NextPage = () => {
  /*
   * TODO:
   * - Get Ethers.js working by setting your api key
   */

  const [blockNumber, setBlockNumber] = useState<number>();

  /** Creates a new class that communicates with the Alchemy blockchain node */
  const provider = providers.AlchemyProvider.getWebSocketProvider(
    'goerli',
    process.env.NEXT_PUBLIC_ALCHEMY_API_KEY
  );

  /** Gets the current blocknumber */
  const getBlockNumber = async () => {
    try {
      setBlockNumber(await provider.getBlockNumber());
    } catch (ex) {
      console.error(ex);
    }
  };

  useEffect(() => {
    getBlockNumber();
  }, []);

  return (
    <p>
      The current blocknumber is:{' '}
      <span className="text-green-400">#{blockNumber}</span>
    </p>
  );
};

export default Challenge1;
