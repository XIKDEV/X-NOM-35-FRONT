import { render } from '@testing-library/react';
import { InfoUser } from '../../../users/components';
import * as useScreenSizeModule from '../../../hooks/useScreenSize';

jest.mock('antd/es/card/Meta', () => {
  return {
    __esModule: true,
    default: () => <div>Mocked Meta Component</div>,
  };
});
describe('Test in <InfoUser />', () => {
  beforeAll(() => {
    window.matchMedia = jest.fn().mockImplementation((query) => ({
      matches: query.includes('(max-width: 767px)'),
      addListener: jest.fn(),
      removeListener: jest.fn(),
    }));
  });

  const data = [
    {
      concept: 'Empresa',
      info: 'XikDev',
    },
    {
      concept: 'Email',
      info: 'axel.cor98@gmail.com',
    },
    {
      concept: 'Teléfono',
      info: '664-795-4898',
    },
    {
      concept: 'Rol',
      info: 'Super Admin',
    },
  ];
  test('should be match with the snapshot', () => {
    const { asFragment } = render(
      <InfoUser dataList={data} isMobile={false} />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('should be match with the snapshot in mobile view', () => {
    const spy = jest.spyOn(useScreenSizeModule, 'useScreenSize');
    spy.mockReturnValue({ width: 320, height: 480, isMobile: true });
    const { container } = render(<InfoUser dataList={data} isMobile={true} />);
    expect(container).toMatchSnapshot();
    spy.mockRestore();
  });
});
