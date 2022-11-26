import React from 'react';
import { BigNumber } from 'ethers';

import Image from 'next/image';
import { erc721ABI, useContractRead } from 'wagmi';

import { useImageUri } from './hooks/useImageUri';

type NftProps = {
  address: string;
  tokenId: string;
};

export const Nft: React.FC<NftProps> = ({ address, tokenId }) => {
  const {
    data: tokenData,
    isLoading: tokenIsLoading,
    isError: tokenIsError,
  } = useContractRead({
    address: address,
    abi: erc721ABI,
    functionName: 'tokenURI',
    args: [BigNumber.from(tokenId)],
  });

  const {
    data: imageData,
    isLoading: imageIsLoading,
    isError: imageIsError,
  } = useImageUri(tokenData || '', tokenData !== undefined);

  if (tokenIsError) {
    return <div>Something went wrong while loading the token data</div>;
  }

  if (imageIsError) {
    return <div>Something went wrong while loading the image</div>;
  }

  if (tokenIsLoading || imageIsLoading || !imageData || !tokenData) {
    return <div>Loading...</div>;
  }

  return <Image width={500} height={500} src={imageData} alt={tokenData} />;
};

export default Nft;
