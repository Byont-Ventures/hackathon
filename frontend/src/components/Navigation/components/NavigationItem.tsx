import classNames from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { PropsWithChildren } from 'react';

export interface NavigationItemProps {
  href: string;
}

export const NavigationItem: React.FC<
  PropsWithChildren<NavigationItemProps>
> = ({ children, href }) => {
  const router = useRouter();
  return (
    <li
      className={classNames(
        'px-2 py-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-all font-medium opacity-75 text-sm',
        router.pathname === href ? 'opacity-100' : 'opacity-50'
      )}
    >
      <Link href={href}>{children}</Link>
    </li>
  );
};
