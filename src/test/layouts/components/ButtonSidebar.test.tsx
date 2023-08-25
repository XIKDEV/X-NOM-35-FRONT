import { render } from '@testing-library/react';
import { ButtonSidebar } from '../../../layouts/components';
import { faBuilding, faUser } from '@fortawesome/free-regular-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
library.add(faBuilding, faUser, faPowerOff);
describe('Test in <ButtonSidebar />', () => {
  test('should render the component with icon and text when not collapsed', () => {
    const { container, queryByText } = render(
      <ButtonSidebar
        icon={faBuilding}
        textBttn="Enterprises"
        isCollapse={false}
      />
    );

    const button = container.querySelector('[data-testid="button-sidebar"]');
    const icon = container.querySelector('[data-testid="fa-icon"]');
    const text = queryByText('Enterprises');

    expect(button).not.toBeNull();
    expect(icon).not.toBeNull();
    expect(text).not.toBeNull();
  });
  test('should render the component with icon only when collapsed', () => {
    const { container, queryByText } = render(
      <ButtonSidebar
        icon={faBuilding}
        textBttn="Enterprises"
        isCollapse={true}
      />
    );

    const button = container.querySelector('[data-testid="button-sidebar"]');
    const icon = container.querySelector('[data-testid="fa-icon"]');
    const text = queryByText('Enterprises');

    expect(button).not.toBeNull();
    expect(icon).not.toBeNull();
    expect(text).toBeNull();
  });
});
