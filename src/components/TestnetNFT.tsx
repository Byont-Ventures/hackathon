import { Abi } from 'abitype'
import { BigNumber } from 'ethers'
import React, { useEffect, useState } from 'react'
import { useContractRead } from 'wagmi'
type TestNftProps = {
  abi: Abi
  address: string
  tokenId: string
}

function Nft({ abi, address, tokenId }: TestNftProps) {
  // Get NFT token URI
  const { data, isLoading, isError } = useContractRead({
    address: address,
    abi: abi,
    functionName: 'tokenURI',
    args: [BigNumber.from(tokenId)],
  })

  // When we have retrieved the token URI we can trigger the fetch function
  useEffect(() => {
    if (!data) {
      return
    }
    getImgFromTokenURI(data as string)
  }, [data])

  // Use an IPFS gateway to fetch token data
  const getImgFromTokenURI = async (data: string) => {
    console.log()
    const cid = data?.split('ipfs://')[1]
    const response = await fetch(`https://gateway.pinata.cloud/ipfs/${cid}`)
    const metadata = await response.json()
    const imgUri = metadata['image']
    if (imgUri) {
      const imgCid = imgUri.split('ipfs://')[1]
      setImg(`https://gateway.pinata.cloud/ipfs/${imgCid}`)
    }
  }

  // Image
  const [img, setImg] = useState('')

  return (
    <>
      {isLoading ? (
        'Loading...'
      ) : (
        <div className="w-[100px] h-[100px] m-[10px]">
          {isError || !data ? JSON.stringify(isError) : <img src={img}></img>}
        </div>
      )}
    </>
  )
}

export default Nft
