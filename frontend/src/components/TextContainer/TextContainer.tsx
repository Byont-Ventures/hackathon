import classNames from 'classnames';

export const TextContainer: React.FC<JSX.IntrinsicElements['div']> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      data-testid="TextContainer"
      className={classNames('prose', className)}
      {...props}
    >
      {children}
    </div>
  );
};
