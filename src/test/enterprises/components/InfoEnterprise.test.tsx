import { render } from '@testing-library/react';
import { InfoEnterprise } from '../../../enterprises/components';

jest.mock('antd/es/card/Meta', () => {
  return {
    __esModule: true,
    default: () => <div>MockedMetaComponent</div>,
  };
});

describe('Test in <InfoEnterprise />', () => {
  test('should be match with the snapshot', () => {
    const data = {
      addres:
        'Agustín Lara #3251 Col. Miramar, Tijuana, Baja California, México',
      goals: 'Goals',
      activity: 'Industria Tec',
      mainActivity: 'Desarrollo de web',
      quantityEmployees: '2',
    };

    const { asFragment } = render(<InfoEnterprise {...data} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
