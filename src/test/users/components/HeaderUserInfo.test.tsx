import { render } from '@testing-library/react';
import { HeaderUserInfo } from '../../../users/components';

jest.mock('antd/es/card/Meta', () => {
  return {
    __esModule: true,
    default: () => <div>Mocked Meta Component</div>,
  };
});

describe('Test in <HeaderUserInfo />', () => {
  const data = {
    alt: 'Axel icon',
    img: '../../../../public/XIK_VerdeTransparente.png',
    userName: 'Axel Coronado Zepeda',
  };

  test('should be match with the snapshot', () => {
    const { asFragment } = render(<HeaderUserInfo {...data} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
