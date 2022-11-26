import { render } from '@/tests/index';

import { Section } from '@/components/Section';

describe('<Section />', () => {
  describe('children', () => {
    it('passes props', async () => {
      const childText = 'Get in touch!';
      const { getByText } = render(<Section>{childText}</Section>);
      expect(getByText(childText)).toBeInTheDocument();
    });
    it('passes intrinsic element props', () => {
      const describedByText = 'Get in touch!';
      const { getByTestId } = render(
        <Section aria-describedby={describedByText} />
      );
      expect(getByTestId('Section')).toHaveAttribute(
        'aria-describedby',
        describedByText
      );
    });
  });
  describe('fullWidth', () => {
    it('renders container by default', () => {
      const { getByTestId } = render(<Section />);
      expect(getByTestId('Section')).not.toHaveClass('w-full');
      expect(getByTestId('Section')).toHaveClass('container');
    });
    it('renders full width when true', () => {
      const { getByTestId } = render(<Section fullWidth={true} />);
      expect(getByTestId('Section')).toHaveClass('w-full');
    });
    it('renders child with container prop when true', () => {
      const { getByTestId } = render(<Section fullWidth={true} />);
      expect(getByTestId('Section').firstChild).toHaveClass('container');
    });
  });
  describe('classname', () => {
    it('merges with existing classnames', () => {
      const { getByTestId } = render(
        <Section className="mycustomnonexistingclass" />
      );
      expect(getByTestId('Section')).toHaveClass('mycustomnonexistingclass');
      expect(getByTestId('Section').classList.length).toBeGreaterThan(1);
    });
  });
});
