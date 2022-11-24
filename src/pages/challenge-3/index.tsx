import type { NextPage } from 'next'
import { ConnectButton } from '@rainbow-me/rainbowkit'

const Home: NextPage = () => {
  /*
   * TODO:
   * - Implement the BAYC ABI
   * - Display the name of the BAYC contract
   * - Display the symbol of the BAYC contract
   */
  return (
    <>
      Welcome to Challenge 3!
      <ConnectButton></ConnectButton>
    </>
  )
}

export default Home
