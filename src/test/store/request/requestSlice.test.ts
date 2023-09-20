import { setInitialState } from '../../../store/auth';
import {
  requestSlice,
  setCleanError,
  setCleanSave,
  setError,
  setLoading,
  setSave,
} from '../../../store/request';
import {
  initialStateRequest,
  isErrorState,
  isLoadingState,
  isSaveState,
  messageError,
  messageSave,
} from '../../fixtures/requestFixtures';

describe('Test in requestSlice', () => {
  test('should be return the initial state and call request', () => {
    const state = requestSlice.reducer(initialStateRequest, {
      type: undefined,
    });
    expect(state).toEqual(initialStateRequest);

    expect(requestSlice.name).toBe('request');
  });

  test('should set loading', () => {
    const state = requestSlice.reducer(initialStateRequest, setLoading());
    expect(state).toEqual(isLoadingState);
  });

  test('should set save', () => {
    const state = requestSlice.reducer(isLoadingState, setSave(messageSave));
    expect(state).toEqual(isSaveState);
  });

  test('should set clean save', () => {
    const state = requestSlice.reducer(isSaveState, setCleanSave());
    expect(state).toEqual(setInitialState);
  });

  test('should set error', () => {
    const state = requestSlice.reducer(isLoadingState, setError(messageError));
    expect(state).toEqual(isErrorState);
  });

  test('should set clean error', () => {
    const state = requestSlice.reducer(isErrorState, setCleanError());
    expect(state).toEqual(setInitialState);
  });
});
