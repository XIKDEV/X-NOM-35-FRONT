import { render } from '@testing-library/react';
import { UsersPage } from '../../../users/pages';

describe('Test in <UserPage />', () => {
  test('should be match with the snapshot', () => {
    const { asFragment } = render(<UsersPage />);
    expect(asFragment()).toMatchSnapshot();
  });
});
