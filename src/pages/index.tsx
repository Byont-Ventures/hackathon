import type { NextPage } from 'next'
import { Section } from 'src/components/Section'
import { Text } from 'src/components/Text'

const Home: NextPage = () => {
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
          <Text variant="headingXl">
            Welcome to the Byont Labs Web3 Template
          </Text>
        </Section>
      </main>
      <footer>
        <Text>Byont Ventures B.V. © {new Date().getFullYear()}</Text>
      </footer>
    </>
  )
}

export default Home
