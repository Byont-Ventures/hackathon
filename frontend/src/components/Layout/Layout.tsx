import { PropsWithChildren } from 'react';
import { Navigation } from '@/components/Navigation';
import classNames from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';

export interface LayoutProps {
  fontClass: string;
}

export const Layout: React.FC<PropsWithChildren<LayoutProps>> = ({
  children,
  fontClass,
}) => {
  const challenges = {
    '': "Challenge 1 - Let's get started! Running the Dapp:/challenge-1",
    'challenge-1': 'Challenge 2 - Adding abstractions:/challenge-2',
    'challenge-2': 'Challenge 3 - Using Wagmi:/challenge-3',
    'challenge-3': 'Challenge 4 - Displaying NFTs:/challenge-4',
    'challenge-4': 'Challenge 5 - Minting:/challenge-5',
    'challenge-5': 'Back home:/',
  };

  const pathName = useRouter().pathname.split('/').pop();

  const [nextName, nextUrl] =
    challenges[(pathName ?? '') as keyof typeof challenges].split(':');

  return (
    <>
      <div className={classNames('flex flex-col min-h-screen', fontClass)}>
        <Navigation />
        <main className="flex-grow bg-gray-50 dark:bg-gray-800">
          <div className="container py-8">{children}</div>
        </main>
        <div className="container w-full py-4">
          <p>
            Continue with:{' '}
            <Link href={nextUrl}>
              <span className="font-bold text-blue-700 dark:text-blue-300 hover:opacity-80">
                {nextName}
              </span>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};
