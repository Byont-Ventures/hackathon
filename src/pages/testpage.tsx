import { ConnectButton } from '@rainbow-me/rainbowkit'
import type { NextPage } from 'next'
import { Section } from 'src/components/Section'
import { Text } from 'src/components/Text'
import { useIsMounted } from 'src/hooks/useIsMounted'
import { useAccount } from 'wagmi'

const Home: NextPage = () => {
  const { address } = useAccount()
  const isMounted = useIsMounted()

  return (
    <>
      <main
        data-testid="Layout"
        id="maincontent"
        className={
          'relative flex flex-col flex-grow mt-4 mb-8 space-y-8 md:space-y-16 md:mt-8 md:mb-16'
        }
      >
        <Section>
          <Text variant="headingXl">Welcome to testpage!</Text>
          <Text>
            {isMounted && address ? <p>{`Address: ${address}`}</p> : null}
          </Text>
          <ConnectButton></ConnectButton>
        </Section>
      </main>
      <footer>
        <Text>Byont Ventures B.V. © {new Date().getFullYear()}</Text>
      </footer>
    </>
  )
}

export default Home
