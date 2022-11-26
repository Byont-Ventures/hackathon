import { render } from '@/tests/index';

import { TextContainer } from '@/components/TextContainer';

describe('<TextContainer />', () => {
  describe('children', () => {
    it('passes props', () => {
      const childText = 'Get in touch!';
      const { getByTestId } = render(
        <TextContainer>{childText}</TextContainer>
      );
      expect(getByTestId('TextContainer')).toHaveTextContent(childText);
    });
    it('passes intrinsic element props', () => {
      const describedByText = 'Get in touch!';
      const { getByTestId } = render(
        <TextContainer aria-describedby={describedByText} />
      );
      expect(getByTestId('TextContainer')).toHaveAttribute(
        'aria-describedby',
        describedByText
      );
    });
  });
  describe('classname', () => {
    it('merges with existing classnames', () => {
      const { getByTestId } = render(
        <TextContainer className="mycustomnonexistingclass" />
      );
      expect(getByTestId('TextContainer')).toHaveClass(
        'mycustomnonexistingclass'
      );
    });
  });
});
