import { render } from '@testing-library/react';
import { UserInfoPage } from '../../../users/pages';
import * as useScreenSizeModule from '../../../hooks/useScreenSize';

jest.mock('antd/es/card/Meta', () => {
  return {
    __esModule: true,
    default: () => <div>MockedMetaComponent</div>,
  };
});

const mockHandleSidebar = jest.fn();
describe('Test in <UserInfoPage />', () => {
  beforeAll(() => {
    window.matchMedia = jest.fn().mockImplementation((query) => ({
      matches: query.includes('(max-width: 767px)'),
      addListener: jest.fn(),
      removeListener: jest.fn(),
    }));
  });

  test('should be match with the snapshot in mobile view', () => {
    const { asFragment } = render(
      <UserInfoPage handleSidebar={mockHandleSidebar} />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('should be match with the snapshot', () => {
    const spy = jest.spyOn(useScreenSizeModule, 'useScreenSize');
    spy.mockReturnValue({ width: 320, height: 480, isMobile: true });
    const { container } = render(
      <UserInfoPage handleSidebar={mockHandleSidebar} />
    );
    expect(container).toMatchSnapshot();
    spy.mockRestore();
  });
});
