import type { NextPage } from 'next'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { useBalance } from 'wagmi'
import { useAccount } from 'wagmi'
import { useIsMounted } from 'src/hooks/useIsMounted'
import { useContractRead } from 'wagmi'

import { BAYCAbi } from 'src/abis/BAYCAbi'
import { ReactNode } from 'react'

const Home: NextPage = () => {
  const account = useAccount()
  const isMounted = useIsMounted()
  const balance = useBalance({
    addressOrName: account.address,
  })
  const { data, isError, isLoading } = useContractRead({
    address: '0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D',
    abi: BAYCAbi,
    functionName: 'name',
  })

  return (
    <>
      Welcome to Challenge X!
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
        <>{isMounted && <div>{data as ReactNode}</div>}</>
      )}
      <div> {isError && isMounted && 'Error'}</div>
    </>
  )
}

export default Home
