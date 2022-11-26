import { render } from '@/tests/index';

import { Text, VariantStyles } from '@/components/Text';

describe('<Text />', () => {
  describe('children', () => {
    it('passes props', () => {
      const childText = 'Get in touch!';
      const { getByTestId } = render(<Text as="p">{childText}</Text>);
      expect(getByTestId('Text')).toHaveTextContent(childText);
    });
    it('passes intrinsic element props', () => {
      const describedByText = 'Get in touch!';
      const { getByTestId } = render(
        <Text aria-describedby={describedByText} />
      );
      expect(getByTestId('Text')).toHaveAttribute(
        'aria-describedby',
        describedByText
      );
    });
  });
  describe('classname', () => {
    it('merges with existing classnames', () => {
      const { getByTestId } = render(
        <Text className="mycustomnonexistingclass" />
      );
      expect(getByTestId('Text')).toHaveClass('mycustomnonexistingclass');
    });
    it('does not render attribute when empty', () => {
      const { getByTestId } = render(<Text />);
      expect(getByTestId('Text')).not.toHaveAttribute('class');
    });
  });
  describe('as', () => {
    it('renders paragraph tag by default', () => {
      const { getByTestId } = render(<Text />);
      expect(getByTestId('Text').tagName).toBe('P');
    });
    it('renders the correct element', () => {
      const { getByTestId } = render(<Text as="h1" />);
      expect(getByTestId('Text').tagName).toBe('H1');
    });
  });
  describe('variant', () => {
    it('renders bodyMd by default', () => {
      const { getByTestId } = render(<Text />);
      expect(getByTestId('Text')).not.toHaveAttribute('class');
    });
    it('renders variant classes', () => {
      const { getByTestId } = render(<Text variant="heading2Xl" />);
      expect(getByTestId('Text')).toHaveClass(VariantStyles.heading2Xl);
    });
  });
});
