import { render } from '@testing-library/react';
import { ContractsList } from '../../../enterprises/components';
import * as useScreenSizeModule from '../../../hooks/useScreenSize';

jest.mock('antd/es/card/Meta', () => {
  return {
    __esModule: true,
    default: () => <div>Mocked Meta Component</div>,
  };
});

describe('Test in <ContractsList />', () => {
  beforeAll(() => {
    window.matchMedia = jest.fn().mockImplementation((query) => ({
      matches: query.includes('(max-width: 767px)'),
      addListener: jest.fn(),
      removeListener: jest.fn(),
    }));
  });

  const data = [
    { contract: 'Contract 1', date: '2023-09-05' },
    { contract: 'Contract 2', date: '2023-09-06' },
  ];

  test('should be match with the snapshot', () => {
    const { asFragment } = render(<ContractsList data={data} />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('should be match with the snaptshot in mobile view', () => {
    const spy = jest.spyOn(useScreenSizeModule, 'useScreenSize');
    spy.mockReturnValue({ width: 320, height: 480, isMobile: true });
    const { container } = render(<ContractsList data={data} />);
    expect(container).toMatchSnapshot();
    spy.mockRestore();
  });
});
