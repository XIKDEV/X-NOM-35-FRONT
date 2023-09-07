import { render } from '@testing-library/react';
import { HeadEnterpriseInfo } from '../../../enterprises/components';

jest.mock('antd/es/card/Meta', () => {
  return {
    __esModule: true,
    default: () => <div>MockedMetaComponent</div>,
  };
});

describe('Test in <HeadEnterpriseInfo />', () => {
  test('should be match with the snapshot', () => {
    const data = {
      img: '../../../../public/XIK_VerdeTransparente.png',
      alt: 'XikDev logo',
      enterpriseName: 'XikDev',
    };
    const { asFragment } = render(<HeadEnterpriseInfo {...data} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
