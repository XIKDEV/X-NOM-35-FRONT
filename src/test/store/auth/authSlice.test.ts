import {
  authSlice,
  setCheckingAuth,
  setLogin,
  setLogout,
} from '../../../store/auth';
import {
  authState,
  checkingState,
  initialStateAuth,
  noAuthState,
  userDemo,
} from '../../fixtures/authFixtures';

describe('Test in authSlice', () => {
  test('should be return the initial state and call auth', () => {
    const state = authSlice.reducer(initialStateAuth, {
      type: undefined,
    });
    expect(state).toEqual(initialStateAuth);

    expect(authSlice.name).toBe('auth');
  });

  test('should set auth', () => {
    const state = authSlice.reducer(initialStateAuth, setLogin(userDemo));
    expect(state).toEqual(authState);
  });

  test('should set logout', () => {
    const state = authSlice.reducer(authState, setLogout());
    expect(state).toEqual(noAuthState);
  });

  test('should set checking auth', () => {
    const state = authSlice.reducer(authState, setCheckingAuth());
    expect(state).toEqual(checkingState);
  });
});
