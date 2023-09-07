import { render } from '@testing-library/react';
import { EnterprisesCard } from '../../../enterprises/components';

jest.mock('antd/es/card/Meta', () => {
  return {
    __esModule: true,
    default: () => <div>Mocked Meta Component</div>,
  };
});

describe('Test in <EnterpriseCard />', () => {
  test('should be match with the snapshot', () => {
    const props = {
      srcImage: '../../../../public/XIK_VerdeTransparente.png',
      alt: 'XikDev logo',
      title: 'XikDev',
      subtitle: 'Axel Coronado',
    };

    const { container } = render(<EnterprisesCard {...props} />);
    expect(container).toMatchSnapshot();
  });
});
