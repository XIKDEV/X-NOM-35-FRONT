import { configureStore } from '@reduxjs/toolkit';
import { store } from '../../store/store';
import { authSlice } from '../../store/auth';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let testStore: any;

beforeAll(() => {
  testStore = configureStore({ reducer: store.getState }); // Obtén una instancia del store
});

describe('Test in Store', () => {
  test('should dispatch actions and get the state', () => {
    const action = authSlice.actions.setLogin({ user: 'testUser' });

    // Dispatch the action
    testStore.dispatch(action);

    // Get the updated state
    const updatedState = testStore.getState();

    // Check if the state was updated correctly
    expect(updatedState.auth.user).toBe('testUser');
  });
});
