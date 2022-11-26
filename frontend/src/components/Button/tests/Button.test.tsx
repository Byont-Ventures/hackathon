import '@testing-library/jest-dom';

import { faArrowRight } from '@fortawesome/pro-solid-svg-icons';

import { render } from '@/tests/index';

import { Button } from '@/components/Button';

describe('<Button />', () => {
  describe('children', () => {
    it('passes props', () => {
      const childText = 'Get in touch!';
      const { getByText } = render(<Button>{childText}</Button>);
      expect(getByText(childText)).toBeInTheDocument();
    });
    it('passes props when icon passed', () => {
      const childText = 'Get in touch!';
      const { getByText } = render(
        <Button icon={faArrowRight}>{childText}</Button>
      );
      expect(getByText(childText)).toBeInTheDocument();
    });
    it('passes intrinsic element props', () => {
      const describedByText = 'Get in touch!';
      const { getByTestId } = render(
        <Button aria-describedby={describedByText} />
      );
      expect(getByTestId('Button')).toHaveAttribute(
        'aria-describedby',
        describedByText
      );
    });
  });
  describe('classname', () => {
    it('merges with existing classnames', () => {
      const { getByTestId } = render(
        <Button className="mycustomnonexistingclass" />
      );
      expect(getByTestId('Button')).toHaveClass('mycustomnonexistingclass');
      expect(getByTestId('Button').classList.length).toBeGreaterThan(1);
    });
  });
  describe('variant', () => {
    it('renders primary button by default', () => {
      const { getByTestId } = render(<Button variant={undefined} />);
      expect(getByTestId('Button')).toHaveClass('bg-blue-500');
    });

    it('renders primary button when variant passed', () => {
      const { getByTestId } = render(<Button variant="primary" />);
      expect(getByTestId('Button')).toHaveClass('bg-blue-500');
    });
  });
  describe('icon', () => {
    it('renders without icon by default', () => {
      const { queryByTestId } = render(<Button />);
      expect(queryByTestId('Icon')).not.toBeInTheDocument();
    });
    it('renders icon when passed', () => {
      const { getByTestId } = render(<Button icon={faArrowRight} />);
      expect(getByTestId('Icon')).toBeInTheDocument();
    });
  });
});
