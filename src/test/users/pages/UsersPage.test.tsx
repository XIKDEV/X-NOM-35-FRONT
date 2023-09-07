import { render } from '@testing-library/react';
import { UsersPage } from '../../../users/pages';
import * as useScreenSizeModule from '../../../hooks/useScreenSize';

jest.mock('antd/es/card/Meta', () => {
  return {
    __esModule: true,
    default: () => <div>Mocked Meta Component</div>,
  };
});

const mockHandleSidebar = jest.fn();

describe('Test in <UserPage />', () => {
  test('should be match with the snapshot', () => {
    const { asFragment } = render(
      <UsersPage handleSidebar={mockHandleSidebar} />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('should render <HeaderMobile />', () => {
    const spy = jest.spyOn(useScreenSizeModule, 'useScreenSize');
    spy.mockReturnValue({ width: 320, height: 480, isMobile: true });
    const { container } = render(
      <UsersPage handleSidebar={mockHandleSidebar} />
    );
    expect(container).toMatchSnapshot();
    spy.mockRestore();
  });
});
