import type { NextPage } from 'next'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { useBalance } from 'wagmi'
import { useAccount } from 'wagmi'
import { useIsMounted } from 'src/hooks/useIsMounted'
import { useContractReads } from 'wagmi'

import { BAYCAbi } from 'src/abis/BAYCAbi'

const Home: NextPage = () => {
  /*
   * TODO:
   * - Display the name of the BAYC contract
   * - Display the symbol of the BAYC contract
   * - Display the image of BAYC#42
   */
  const account = useAccount()
  const isMounted = useIsMounted()
  const balance = useBalance({
    addressOrName: account.address,
  })

  // Contract config
  const BAYCContractConfig = {
    address: '0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D',
    abi: BAYCAbi,
  }

  // Call contract functions
  const { data, isError, isLoading } = useContractReads({
    contracts: [
      { ...BAYCContractConfig, functionName: 'name' },
      { ...BAYCContractConfig, functionName: 'symbol' },
    ],
  })

  return (
    <>
      Welcome to Challenge 4!
      <ConnectButton></ConnectButton>
      <div>
        {' '}
        {balance && isMounted
          ? `Account balance: ${balance.data?.value}`
          : 'No data'}
      </div>
      {isMounted && isLoading ? (
        'Loading...'
      ) : (
        <>
          {isMounted && data && <div>{`Name: ${data[0]}`}</div>}
          {isMounted && data && <div>{`Symbol: ${data[1]}`}</div>}
        </>
      )}
      <div> {isError && isMounted && 'Error'}</div>
    </>
  )
}

export default Home
