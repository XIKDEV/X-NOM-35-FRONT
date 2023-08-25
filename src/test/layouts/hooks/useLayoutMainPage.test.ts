import { act } from 'react-dom/test-utils';
import { renderHook } from '@testing-library/react';
import { useLayoutMainPage } from '../../../layouts/hooks';

describe('Test in useLayoutMainPage', () => {
  test('should show the initial state of isCollapse as true', () => {
    const { result } = renderHook(() => useLayoutMainPage());

    expect(result.current.isCollapse).toBe(true);
  });

  test('should toggle isCollapse state on handleSidebar', () => {
    const { result } = renderHook(() => useLayoutMainPage());

    act(() => {
      result.current.handleSidebar();
    });
    expect(result.current.isCollapse).toBe(false);

    act(() => {
      result.current.handleSidebar();
    });
    expect(result.current.isCollapse).toBe(true);
  });
});
