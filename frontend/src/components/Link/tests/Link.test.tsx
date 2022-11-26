import { render } from '@/tests/index';

import { Link } from '@/components/Link';

describe('<Link />', () => {
  describe('children', () => {
    it('passes props', () => {
      const childText = 'Get in touch!';
      const { getByTestId } = render(<Link href="#">{childText}</Link>);
      expect(getByTestId('Link')).toHaveTextContent(childText);
    });
    it('passes href', () => {
      const href = '/#my-internal-link';
      const { getByTestId } = render(<Link href={href} />);
      expect(getByTestId('Link')).toHaveAttribute('href', href);
    });
  });
  describe('classname', () => {
    it('merges with existing classnames', () => {
      const { getByTestId } = render(
        <Link href="#" className="mycustomnonexistingclass" />
      );
      expect(getByTestId('Link')).toHaveClass('mycustomnonexistingclass');
      expect(getByTestId('Link').classList.length).toBeGreaterThan(1);
    });
  });
});
