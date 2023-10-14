import {
  setError,
  setErrorInRequest,
  setSave,
  setSaveInfo,
} from '../../../store/request';
import { messageError, messageSave } from '../../fixtures/requestFixtures';

describe('Test in Thunks from Request', () => {
  const dispatch = jest.fn();
  beforeEach(() => jest.clearAllMocks());

  test('should setSaveInfo have been called', async () => {
    await setSaveInfo(messageSave)(dispatch);
    expect(dispatch).toHaveBeenCalledWith(setSave(messageSave));
  });

  test('should setErrorInRequest have been called', async () => {
    await setErrorInRequest(messageError)(dispatch);
    expect(dispatch).toHaveBeenCalledWith(setError(messageError));
  });
});
