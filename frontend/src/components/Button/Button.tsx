import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Icon } from '../Icon';
import classNames from 'classnames';
import Link from 'next/link';

export interface ButtonProps {
  /**
   * Color style of the element
   *
   * @default 'primary'
   */
  variant?: 'primary';

  icon?: IconProp;
}

const isAnchor = (
  props: (JSX.IntrinsicElements['button'] | JSX.IntrinsicElements['a']) &
    ButtonProps
): props is JSX.IntrinsicElements['a'] => {
  return 'href' in props && props.href !== undefined && props.href !== null;
};

export const Button: React.FC<
  (JSX.IntrinsicElements['button'] | JSX.IntrinsicElements['a']) & ButtonProps
> = ({ variant = 'primary', icon, className, children, ...props }) => {
  const classList = classNames(
    'no-underline font-medium leading-6 transition-colors duration-100 space-x-1.5 flex items-center selection:bg-opacity-50 group',
    {
      'bg-blue-500 text-blue-50 hover:bg-blue-600 active:bg-blue-700 py-1 px-3 rounded-full':
        variant === 'primary',
    },
    className
  );

  if (isAnchor(props)) {
    const { href, ...anchorProps } = props;
    return (
      <Link data-testid="Anchor" href={href ?? '/'}>
        <a className={classList} {...anchorProps}>
          {icon ? (
            <>
              <span>{children}</span>
              <Icon icon={icon} />
            </>
          ) : (
            children
          )}
        </a>
      </Link>
    );
  }

  return (
    <button
      data-testid="Button"
      className={classList}
      {...(props as JSX.IntrinsicElements['button'])}
    >
      {icon ? (
        <>
          <span>{children}</span>
          <Icon icon={icon} />
        </>
      ) : (
        children
      )}
    </button>
  );
};
