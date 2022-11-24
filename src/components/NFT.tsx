import type { ReactNode } from 'react'
import type { NftMetadata } from 'use-nft'

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
        <div style={{ width: 150, height: 150, margin: 5 }}>
          {error || !nft ? (
            'Something went wrong!'
          ) : (
            <img src={nft.image} alt="" />
          )}
        </div>
      )}
    </>
  )
}

export default Nft
