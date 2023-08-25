import { fireEvent, render } from '@testing-library/react';
import { SideBar } from '../../../layouts/components';

describe('Test in <SideBar />', () => {
  test('should render correctly when isMobile is true', () => {
    const { queryByTestId } = render(
      <SideBar isMobile={true} isCollapse={true} handleSidebar={() => {}} />
    );
    expect(queryByTestId('sidebar-open-close')).toBeNull();
    expect(queryByTestId('sidebar-logo')).toBeTruthy();
    expect(queryByTestId('sider-navigation')).toBeTruthy();
    expect(queryByTestId('sider-logout')).toBeTruthy();
  });

  test('should toggle sidebar collapse when button is clicked', () => {
    const handleSidebar = jest.fn();
    const { getByTestId } = render(
      <SideBar
        isMobile={false}
        isCollapse={true}
        handleSidebar={handleSidebar}
      />
    );
    const button = getByTestId('sidebar-open-close');
    fireEvent.click(button);
    expect(handleSidebar).toHaveBeenCalledTimes(1);
  });

  test('should render the logo image correctly', () => {
    const { container } = render(
      <SideBar isMobile={false} isCollapse={true} handleSidebar={() => {}} />
    );

    const logoImage = container.querySelector('[data-testid="sidebar-logo"]');

    expect(logoImage).not.toBeNull();

    if (logoImage) {
      expect(container.contains(logoImage)).toBe(true);

      expect(logoImage.getAttribute('src')).toBe(
        '../../../public/XIK_VerdeTransparente.png'
      );
      expect(logoImage.getAttribute('alt')).toBe('XikDev');
    }
  });

  test('should render correctly', () => {
    const { asFragment } = render(
      <SideBar isMobile={false} isCollapse={true} handleSidebar={() => {}} />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  test('should toggle style of button based on isCollapse', () => {
    const handleSidebarMock = jest.fn();

    const { getByTestId, rerender } = render(
      <SideBar
        isMobile={false}
        isCollapse={true}
        handleSidebar={handleSidebarMock}
      />
    );

    const button = getByTestId('sidebar-open-close');
    const buttonStyle = getComputedStyle(button);
    expect(buttonStyle.right).toBe('');

    rerender(
      <SideBar
        isMobile={false}
        isCollapse={false}
        handleSidebar={handleSidebarMock}
      />
    );
    expect(buttonStyle.right).toBe('');
  });
});
