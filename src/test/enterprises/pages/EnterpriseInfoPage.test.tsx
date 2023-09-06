import { render } from '@testing-library/react';
import { EnterpriseInfoPage } from '../../../enterprises/pages/EnterpriseInfoPage';
import * as useScreenSizeModule from '../../../hooks/useScreenSize';

jest.mock('antd/es/card/Meta', () => {
  return {
    __esModule: true,
    default: () => <div>MockedMetaComponent</div>,
  };
});

const mockHandleSidebar = jest.fn();
describe('Test in <EnterpriseInfoPage />', () => {
  beforeAll(() => {
    window.matchMedia = jest.fn().mockImplementation((query) => ({
      matches: query.includes('(max-width: 767px)'),
      addListener: jest.fn(),
      removeListener: jest.fn(),
    }));
  });

  test('should be match with the snapshot', () => {
    const { asFragment } = render(
      <EnterpriseInfoPage handleSidebar={mockHandleSidebar} />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('should be match with the snaptshot in mobile view', () => {
    const spy = jest.spyOn(useScreenSizeModule, 'useScreenSize');
    spy.mockReturnValue({ width: 320, height: 480, isMobile: true });
    const { container } = render(
      <EnterpriseInfoPage handleSidebar={mockHandleSidebar} />
    );
    expect(container).toMatchSnapshot();
    spy.mockRestore();
  });
});
