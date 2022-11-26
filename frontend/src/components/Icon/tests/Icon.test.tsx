import { faArrowRight } from '@fortawesome/pro-solid-svg-icons';
import { render } from '@/tests/index';

import { Icon } from '@/components/Icon';

describe('<Section />', () => {
  describe('classname', () => {
    it('merges with existing classnames', () => {
      const { getByTestId } = render(
        <Icon icon={faArrowRight} className="mycustomnonexistingclass" />
      );
      expect(getByTestId('Icon')).toHaveClass('mycustomnonexistingclass');
    });
    it('contains fixed width and height', () => {
      const { getByTestId } = render(<Icon icon={faArrowRight} />);
      expect(getByTestId('Icon')).toHaveClass('w-4 h-4');
    });
  });
});
