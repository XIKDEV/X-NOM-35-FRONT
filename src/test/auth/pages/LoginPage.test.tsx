import { render } from '@testing-library/react';
import { LoginPage } from '../../../auth/pages';

describe('Test in <LoginPage />', () => {
  test('should be match with the snapshot', () => {
    const { container } = render(<LoginPage />);
    expect(container).toMatchSnapshot();
  });
});
