import {
  noTokenInLocalStorage,
  setAuthLogin,
  setAuthLogout,
  setCheckingAuth,
  setLogin,
  setLogout,
  validateJwt,
} from '../../../store/auth';
import { userDemo } from '../../fixtures/authFixtures';

describe('Test in Thunks from Auth', () => {
  const dispatch = jest.fn();
  beforeEach(() => jest.clearAllMocks());

  test('should setAuthLogin have been called', async () => {
    await setAuthLogin({ email: 'axel.cor98@gmail.com', password: '24031998' })(
      dispatch
    );
    expect(dispatch).toHaveBeenCalledWith(setCheckingAuth());
  });

  test('should setAuthLogout have been called', async () => {
    await setAuthLogout()(dispatch);
    expect(dispatch).toHaveBeenCalledWith(setLogout());
  });

  test('should validateJWT have been called', async () => {
    await validateJwt()(dispatch);
    expect(dispatch).toHaveBeenCalledWith(setLogin(userDemo));
  });

  test('should noTokenInLocalStorage have been called', async () => {
    await noTokenInLocalStorage()(dispatch);
    expect(dispatch).toHaveBeenCalledWith(setLogout());
  });
});
