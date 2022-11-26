import React, { PropsWithChildren } from 'react';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import classNames from 'classnames';

export interface LinkProps {
  className?: string;
}

export const Link: React.FC<PropsWithChildren<NextLinkProps & LinkProps>> = ({
  href,
  className,
  ...props
}) => {
  return (
    <NextLink
      data-testid="Link"
      href={href}
      className={classNames(
        'font-medium transition-colors duration-100 hover:text-orange-400 focus:text-orange-500 break-words',
        className
      )}
      {...props}
    />
  );
};
