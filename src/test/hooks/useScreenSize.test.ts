import { act } from 'react-dom/test-utils';
import { renderHook } from '@testing-library/react';
import { useScreenSize } from '../../hooks';

describe('Test in useScreenSize hook', () => {
  test('should must correctly take the height and width of the screen', () => {
    const { result } = renderHook(() => useScreenSize());
    expect(result.current.width).toBe(1024);
    expect(result.current.height).toBe(768);
  });

  test('should update the width and height state on resize', () => {
    const { result } = renderHook(() => useScreenSize());
    act(() => {
      window.innerWidth = 800;
      window.innerHeight = 600;
      window.dispatchEvent(new Event('resize'));
    });

    expect(result.current.width).toBe(800);
    expect(result.current.height).toBe(600);
  });
});
