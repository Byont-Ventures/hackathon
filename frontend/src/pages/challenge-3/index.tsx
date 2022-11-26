import type { NextPage } from 'next';
import { useContractRead } from 'wagmi';

export const Challenge3: NextPage = () => {
  /*
   * TODO:
   * - Implement the BAYC ABI
   * - Display the name of the BAYC contract
   * - Display the symbol of the BAYC contract
   */

  const { data, isError, isLoading } = useContractRead({
    // Todo: Implement the BAYC ABI
  });

  return (
    <p>
      The name of the ERC721 token is:{' '}
      <span className="text-green-400">{data as string}</span>
    </p>
  );
};

export default Challenge3;
