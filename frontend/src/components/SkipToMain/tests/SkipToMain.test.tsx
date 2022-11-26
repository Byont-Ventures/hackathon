import { render } from '@/tests/index';
import userEvent from '@testing-library/user-event';

import { SkipToMain } from '@/components/SkipToMain';

describe('<SkipToMain />', () => {
  describe('accessibility', () => {
    it('focuses button on first tab press', async () => {
      const { getByTestId } = render(<SkipToMain />);

      await userEvent.keyboard('[Tab]');
      expect(getByTestId('SkipToMain')).toHaveFocus();
    });
  });
  describe('href', () => {
    it('is #maincontent', () => {
      const { getByTestId } = render(<SkipToMain />);

      expect(getByTestId('SkipToMain')).toHaveAttribute(
        'href',
        '/#maincontent'
      );
    });
  });
});
