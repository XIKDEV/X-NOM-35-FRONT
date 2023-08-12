import React from 'react';

import { render } from '@testing-library/react';
import { LoginPage } from '../../../src/auth/pages/LoginPage';

describe('Test in <LoginPage />', () => {
  test('should be match with the snapshot', () => {
    const { container } = render(<LoginPage />);
    expect(container).toMatchSnapshot();
  });
});
