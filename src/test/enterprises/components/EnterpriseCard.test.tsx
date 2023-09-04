import { render } from '@testing-library/react';
import { EnterpriseCard } from '../../../enterprises/components';

jest.mock('antd/es/card/Meta', () => {
  return {
    __esModule: true,
    default: () => <div>Mocked Meta Component</div>,
  };
});

describe('Test in <EnterpriseCard />', () => {
  test('should be match with the snapshot', () => {
    const enterpriseName = 'XikDev';
    const responsible = 'Axel Coronado Zepeda';
    const logoEnterprise = '../../../../public/XIK_VerdeTransparente.png';

    const { container } = render(
      <EnterpriseCard
        enterpriseName={enterpriseName}
        responsible={responsible}
        logoEnterprise={logoEnterprise}
      />
    );
    expect(container).toMatchSnapshot();
  });
});
