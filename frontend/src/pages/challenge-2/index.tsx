import type { NextPage } from 'next';
import { useBlockNumber } from 'wagmi';

const Challenge2: NextPage = () => {
  /*
   * TODO:
   * - Setup wagmi with the Alchemy provider
   * - Display the latest blocknumber
   */
  const { data: blockNumber, isLoading, isError } = useBlockNumber();

  if (isLoading) return <div>Loading...</div>;

  if (isError)
    return (
      <div>
        Something went wrong while getting the latest blocknumber, did you setup
        Wagmi correctly?
      </div>
    );

  return (
    <p>
      The name is: <span className="text-green-400">#{blockNumber}</span>
    </p>
  );
};

export default Challenge2;
