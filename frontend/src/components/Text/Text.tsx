import classNames from 'classnames';

/** Typography variants */
type Variant =
  | 'bodySm'
  | 'bodyMd'
  | 'bodyLg'
  | 'headingSm'
  | 'headingMd'
  | 'headingLg'
  | 'headingXl'
  | 'heading2Xl';

type ElementTag = 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'h4';

export interface TextProps {
  /**
   * Typographic style of text
   *
   * @default 'bodyMd'
   */
  variant?: Variant;

  /**
   * The element type
   *
   * @default 'p'
   */
  as?: keyof Pick<JSX.IntrinsicElements, ElementTag>;
}

/** Typography variants styling */
export const VariantStyles: { [V in Variant]: string } = {
  bodySm: 'text-sm',
  bodyMd: '',
  bodyLg: 'text-lg',
  headingSm: 'text-lg xl:text-xl',
  headingMd: 'text-lg md:text-xl xl:text-2xl',
  headingLg: 'text-xl md:text-2xl xl:text-3xl',
  headingXl: 'text-2xl md:text-3xl xl:text-4xl max-w-4xl',
  heading2Xl: 'text-3xl md:text-4xl xl:text-5xl max-w-5xl',
};

export const Text: React.FC<
  TextProps & PickAndFlatten<JSX.IntrinsicElements, ElementTag>
> = ({ as = 'p', variant = 'bodyMd', className, ...props }) => {
  const Tag = as;
  const elementClassname = classNames(VariantStyles[variant], className);

  return (
    <Tag
      data-testid="Text"
      className={elementClassname !== '' ? elementClassname : undefined}
      {...props}
    />
  );
};
