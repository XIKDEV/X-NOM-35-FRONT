import { render } from '@testing-library/react';
import { HeaderMobile } from '../../../ui/components';

jest.mock('antd/es/card/Meta', () => {
  return {
    __esModule: true,
    default: () => <div>MockedMetaComponent</div>,
  };
});

describe('Test in <HeaderMobile />', () => {
  test('should be match with the snapshot', () => {
    const handleSidebar = jest.fn();
    const { asFragment } = render(
      <HeaderMobile handleSidebar={handleSidebar} />
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
