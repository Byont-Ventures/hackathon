import type { NextPage } from 'next'
import Link from 'next/link'

const Home: NextPage = () => {
  const CHALLENGE_AMOUNT = 5
  const links: string[] = Array.from(
    { length: CHALLENGE_AMOUNT },
    (_, idx) => `challenge-${idx + 1}`
  )

  return (
    <div className="flex flex-col">
      <div>Welcome to the Workshop!</div>
      <div className="w-auto px-8 my-1">
        <ol>
          {links.map((link: string) => (
            <Link key={link} href={`/${link}`}>
              <li>{link}</li>
            </Link>
          ))}
        </ol>
      </div>
      <div>By Byont Ventures B.V. © {new Date().getFullYear()}</div>
    </div>
  )
}

export default Home
