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
      enterpriseName: 'XikDev',
    };
    const { asFragment } = render(<HeadEnterpriseInfo {...data} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
