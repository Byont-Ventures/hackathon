import type { NextPage } from 'next'
import { useIsMounted } from 'src/hooks/useIsMounted'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import {
  useAccount,
  useContractRead,
  useContractReads,
  usePrepareContractWrite,
  useContractWrite,
  useWaitForTransaction,
} from 'wagmi'
import { BAYCAbi } from 'src/abis/BAYCAbi'
import Nft from '@/components/NFT'
import { useEffect, useState } from 'react'
import { BigNumber } from 'ethers'

const Home: NextPage = () => {
  // Mint state
  const [totalMinted, setTotalMinted] = useState(0)
  const [amount, setAmount] = useState('0')

  // Account data
  const account = useAccount()
  const isMounted = useIsMounted()

  // Contract config
  const ContractAddress = '0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d'
  const ContractConfig = {
    address: ContractAddress,
    abi: BAYCAbi,
  }

  // Read contract
  const { data, isError } = useContractReads({
    contracts: [
      { ...ContractConfig, functionName: 'name' },
      { ...ContractConfig, functionName: 'symbol' },
      { ...ContractConfig, functionName: 'MAX_APES' },
    ],
  })
  const { data: totalSupplyData } = useContractRead({
    ...ContractConfig,
    functionName: 'totalSupply',
    watch: true,
  })

  // Get list of NFTS
  const getNFTList = () => {
    const nfts = []
    for (let i = 0; i < 100; i++) {
      nfts.push(<Nft contract={ContractAddress} tokenId={i.toString()}></Nft>)
    }
    return nfts
  }

  // Mint
  const { config } = usePrepareContractWrite({
    address: ContractAddress,
    abi: BAYCAbi,
    functionName: 'mintApe',
    args: [BigNumber.from(amount)],
  })

  const {
    data: mintData,
    write: mint,
    isLoading: isMintLoading,
    isSuccess: isMintStarted,
  } = useContractWrite(config)

  const { isSuccess: txSuccess } = useWaitForTransaction({
    hash: mintData?.hash,
  })

  const isMinted = txSuccess

  useEffect(() => {
    if (totalSupplyData) {
      setTotalMinted(totalSupplyData.toNumber())
    }
  }, [totalSupplyData])

  return (
    <div className="flex flex-col flex-wrap items-center">
      {/* Connected Wallet */}

      <div className="flex flex-col items-center" style={{ margin: 20 }}>
        <h1 style={{ marginBottom: 20 }}>Welcome to Challenge 6!</h1>
        {account.isConnected && isMounted ? (
          <ConnectButton></ConnectButton>
        ) : (
          <h1>Please connect your wallet!</h1>
        )}
      </div>

      {/* Mint UI */}
      <div
        className="flex flex-col"
        style={{
          width: 400,
          height: 400,
          margin: 20,
          padding: 20,
          border: '1px solid black',
          borderRadius: '5%',
        }}
      >
        <div className="flex flex-col" style={{ marginBottom: 20 }}>
          {data && isMounted ? <h1>Name: {data[0]}</h1> : 'Loading...'}
          {data && isMounted ? <h1>Symbol: {data[1]}</h1> : 'Loading...'}
          {data && isMounted ? (
            <h1>{`${totalMinted} / ${data[2]}`} minted so far!</h1>
          ) : (
            'Loading...'
          )}
          <div style={{ height: 100 }}>
            {isMinted && isMounted && (
              <h1 style={{ color: 'green', fontWeight: 'bold', marginTop: 10 }}>
                Mint success!
              </h1>
            )}
            {isMinted && isMounted && (
              <h1>
                View on{' '}
                <a href={`https://goerli.etherscan.io/tx/${mintData?.hash}`}>
                  Etherscan
                </a>
              </h1>
            )}
            {isMinted && isMounted && (
              <h1>
                View on{' '}
                <a
                  href={`https://testnets.opensea.io/assets/goerli/${config.address}`}
                >
                  Opensea
                </a>
              </h1>
            )}
          </div>
          {isError && isMounted && <h1>An error has occurred</h1>}
        </div>
        <div className="flex flex-row items-center">
          <input
            type="number"
            min={1}
            max={5}
            onChange={(e) => {
              e.target.value != '' && setAmount(e.target.value)
            }}
            style={{
              border: '1px solid black',
              borderRadius: '5%',
              width: 100,
              height: 50,
              textAlign: 'center',
              marginRight: 20,
            }}
          ></input>
          {account.isConnected && isMounted ? (
            <button
              style={{
                border: '1px solid black',
                borderRadius: '5%',
                width: 100,
                height: 50,
              }}
              onClick={() => mint?.()}
              disabled={isMintLoading || isMintStarted}
              data-mint-loading={isMintLoading}
              data-mint-started={isMintStarted}
            >
              {isMintLoading && 'Waiting for approval...'}
              {isMintStarted && 'Mint in progress...'}
              {!isMintLoading && 'MINT'}
            </button>
          ) : (
            <h1>
              <ConnectButton></ConnectButton>
            </h1>
          )}
        </div>
      </div>

      {/* List of NFTs */}
      <div
        className="flex flex-row flex-wrap items-center"
        style={{ margin: 20 }}
      >
        {isMounted && getNFTList()}
      </div>
    </div>
  )
}

export default Home
