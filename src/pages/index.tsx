import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <>
      Welcome to the Workshop! By Byont Ventures B.V. ©{' '}
      {new Date().getFullYear()}
    </>
  )
}

export default Home
