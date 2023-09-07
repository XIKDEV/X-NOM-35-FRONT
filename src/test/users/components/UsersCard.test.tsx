import { render } from '@testing-library/react';
import { UsersCard } from '../../../users/components';

jest.mock('antd/es/card/Meta', () => {
  return {
    __esModule: true,
    default: () => <div>Mocked Meta Component</div>,
  };
});

describe('Test in <UsersCard />', () => {
  test('should be match with the snapshot', () => {
    const props = {
      srcImage: '../../../../public/XIK_VerdeTransparente.png',
      alt: 'Axel Coronado',
      title: 'Axel Coronado',
      subtitle: 'Responsable de XikDev',
    };
    const { asFragment } = render(<UsersCard {...props} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
