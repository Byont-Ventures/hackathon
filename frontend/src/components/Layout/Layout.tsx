import { PropsWithChildren } from 'react';
import { Navigation } from '@/components/Navigation';
import classNames from 'classnames';

export interface LayoutProps {
  fontClass: string;
}

export const Layout: React.FC<PropsWithChildren<LayoutProps>> = ({
  children,
  fontClass,
}) => {
  return (
    <>
      <div className={classNames('flex flex-col min-h-screen', fontClass)}>
        <Navigation />
        <main className="bg-gray-50 dark:bg-gray-800 flex-grow">
          <div className="py-8 container">{children}</div>
        </main>
      </div>
    </>
  );
};
