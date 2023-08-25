import { render } from '@testing-library/react';
import { EnterprisesPage } from '../../../enterprises/pages';

describe('Test in <EnterprisesPage />', () => {
  test('should be match with snapshot', () => {
    const { asFragment } = render(<EnterprisesPage />);
    expect(asFragment()).toMatchSnapshot();
  });
});
