import { render } from '@testing-library/react';
import { CardMobile } from '../../../ui/components';

jest.mock('antd/es/card/Meta', () => {
  return {
    __esModule: true,
    default: () => <div>MockedMetaComponent</div>,
  };
});

describe('Test in <CardMobile />', () => {
  test('should be match with the snapshot', () => {
    const props = {
      title: 'XikDev',
      subtitle: 'Axel Coronado',
      srcImage: '../../../../public/XIK_VerdeTransparente.png',
      alt: 'XikDev logo',
    };

    const { asFragment } = render(<CardMobile {...props} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
