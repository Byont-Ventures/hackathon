import React from 'react'
import { useNft } from 'use-nft'

type NftProps = {
  contract: string
  tokenId: string
}

function Nft({ contract, tokenId }: NftProps) {
  const { nft, loading, error } = useNft(contract, tokenId)
  return (
    <>
      {loading ? (
        'Loading...'
      ) : (
        <div className="w-[100px] h-[100px] m-[10px]">
          {error || !nft ? (
            JSON.stringify(error.errors)
          ) : (
            <img src={nft.image} alt="" />
          )}
        </div>
      )}
    </>
  )
}

export default Nft
