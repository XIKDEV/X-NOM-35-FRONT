import { render } from '@testing-library/react';
// import { fireEvent, render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { SideBar } from '../../../layouts/components';
import { Provider } from 'react-redux';
import { store } from '../../../store/store';

describe('Test in <SideBar />', () => {
  test('should render correctly when isMobile is true', () => {
    const { queryByTestId } = render(
      <Provider store={store}>
        <Router>
          <SideBar isMobile={true} isCollapse={true} handleSidebar={() => {}} />
        </Router>
      </Provider>
    );
    expect(queryByTestId('sidebar-open-close')).toBeNull();
    expect(queryByTestId('sidebar-logo')).toBeTruthy();
    expect(queryByTestId('sider-navigation')).toBeTruthy();
    expect(queryByTestId('sider-logout')).toBeTruthy();
  });

  // test('should toggle sidebar collapse when button is clicked', () => {
  //   const handleSidebar = jest.fn();
  //   const { getByTestId } = render(
  //     <Router>
  //       <SideBar
  //         isMobile={false}
  //         isCollapse={true}
  //         handleSidebar={handleSidebar}
  //       />
  //     </Router>
  //   );
  //   const button = getByTestId('sidebar-open-close');
  //   fireEvent.click(button);
  //   expect(handleSidebar).toHaveBeenCalledTimes(1);
  // });

  // test('should render the logo image correctly', () => {
  //   const { container } = render(
  //     <Router>
  //       <SideBar isMobile={false} isCollapse={true} handleSidebar={() => {}} />
  //     </Router>
  //   );
  //   const logoImage = container.querySelector('[data-testid="sidebar-logo"]');
  //   expect(logoImage).not.toBeNull();
  //   if (logoImage) {
  //     expect(container.contains(logoImage)).toBe(true);
  //     expect(logoImage.getAttribute('src')).toBe(
  //       '../../../public/XIK_VerdeTransparente.png'
  //     );
  //     expect(logoImage.getAttribute('alt')).toBe('XikDev');
  //   }
  // });

  // test('should render correctly', () => {
  //   const { asFragment } = render(
  //     <Router>
  //       <SideBar isMobile={false} isCollapse={true} handleSidebar={() => {}} />
  //     </Router>
  //   );
  //   expect(asFragment()).toMatchSnapshot();
  // });

  // test('should toggle style of button based on isCollapse', () => {
  //   const handleSidebarMock = jest.fn();
  //   const { getByTestId, rerender } = render(
  //     <Router>
  //       <SideBar
  //         isMobile={false}
  //         isCollapse={true}
  //         handleSidebar={handleSidebarMock}
  //       />
  //     </Router>
  //   );
  //   const button = getByTestId('sidebar-open-close');
  //   const buttonStyle = getComputedStyle(button);
  //   expect(buttonStyle.right).toBe('');
  //   rerender(
  //     <Router>
  //       <SideBar
  //         isMobile={false}
  //         isCollapse={false}
  //         handleSidebar={handleSidebarMock}
  //       />
  //     </Router>
  //   );
  //   expect(buttonStyle.right).toBe('');
  // });
});
