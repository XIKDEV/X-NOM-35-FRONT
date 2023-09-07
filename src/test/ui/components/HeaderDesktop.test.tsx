import { render } from '@testing-library/react';
import { HeaderDesktop } from '../../../ui/components';

jest.mock('antd/es/card/Meta', () => {
  return {
    __esModule: true,
    default: () => <div>MockedMetaComponent</div>,
  };
});

describe('Test in <HeaderDesktop />', () => {
  test('should be match with the snapshot', () => {
    const { asFragment } = render(<HeaderDesktop />);

    expect(asFragment()).toMatchSnapshot();
  });
});
