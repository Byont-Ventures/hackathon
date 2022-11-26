import classNames from 'classnames';

export interface SectionProps {
  /**
   * If true makes the section full width otherwise container width
   *
   * @default false
   */
  fullWidth?: boolean;
}

export const Section: React.FC<
  SectionProps & JSX.IntrinsicElements['section']
> = ({ fullWidth = false, children, className, ...props }) => {
  return (
    <section
      className={classNames(
        'space-y-8 md:space-y-16',
        fullWidth ? 'w-full py-8 md:py-16 xl:py-24' : 'container',
        fullWidth ? null : className
      )}
      {...props}
      data-testid="Section"
    >
      {fullWidth ? (
        <div
          data-testid="FullWidthContainer"
          className={classNames('container', fullWidth ? className : null)}
        >
          {children}
        </div>
      ) : (
        children
      )}
    </section>
  );
};
