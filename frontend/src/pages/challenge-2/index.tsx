import type { NextPage } from 'next';
import { providers } from 'ethers';

const Challenge2: NextPage = () => {
  /*
   * TODO:
   * - Create a hook for getting the name of the ERC721 token
   */

  const provider = providers.AlchemyProvider.getWebSocketProvider(
    'goerli',
    process.env.NEXT_PUBLIC_ALCHEMY_API_KEY
  );

  const { data, isLoading, isError } = useName(provider);

  if (isError) {
    return (
      <p>
        Could not get the name of the contract, is the hook not implemented yet?
      </p>
    );
  }

  if (isLoading || !data) {
    return <p>Loading...</p>;
  }

  return (
    <p>
      The name of the ERC721 token is:{' '}
      <span className="text-green-400">{data}</span>
    </p>
  );
};

export default Challenge2;

/** Ensures the app compiles, but this is not the place to put it. */
const useName = (
  provider: providers.AlchemyWebSocketProvider
): {
  data: string;
  isLoading: boolean;
  isError: boolean;
} => {
  throw new Error('Function not implemented.');
};
