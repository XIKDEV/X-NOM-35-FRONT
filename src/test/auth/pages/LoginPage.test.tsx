import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { LoginPage } from '../../../auth/pages';
import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from '../../../store/auth';
// import { requestSlice } from '../../../store/request';
import { initialStateAuth } from '../../fixtures/authFixtures';
// import { initialStateRequest } from '../../fixtures/requestFixtures';

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    // request: requestSlice.reducer,
  },
  preloadedState: {
    auth: initialStateAuth,
    // request: initialStateRequest,
  },
});

describe('Test in <LoginPage />', () => {
  test('should be match with the snapshot', () => {
    const { container } = render(
      <Provider store={store}>
        <LoginPage />
      </Provider>
    );
    expect(container).toMatchSnapshot();
  });
});
