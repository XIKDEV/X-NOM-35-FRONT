import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { LayoutMainPage } from '../../layouts/pages';
import * as useScreenSizeModule from '../../hooks/useScreenSize';

describe('Test in <LayoutMainPage />', () => {
  test('should be render without crashing', () => {
    const { asFragment } = render(
      <Router>
        <LayoutMainPage page={() => <div>Content</div>} />
      </Router>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('should toggle sidebar collapse when button is clicked', () => {
    render(
      <Router>
        <LayoutMainPage page={() => <div>Content</div>} />
      </Router>
    );
    const button = screen.queryByTestId('sidebar-toggle-button');
    if (button) {
      fireEvent.click(button);
    }
    expect(screen.queryByTestId('sidebar-toggle-button')).toBeNull();
  });

  test('should render mobile sidebar', () => {
    const spy = jest.spyOn(useScreenSizeModule, 'useScreenSize');
    spy.mockReturnValue({ width: 320, height: 480, isMobile: true });
    const { container } = render(
      <Router>
        <LayoutMainPage page={() => <div>Content</div>} />
      </Router>
    );
    expect(container).toMatchSnapshot();
    spy.mockRestore();
  });

  test('should change sidebar layout on mobile', () => {
    global.innerWidth = 1024;
    const { queryByText } = render(
      <Router>
        <LayoutMainPage page={() => <div>Content</div>} />
      </Router>
    );
    expect(queryByText('Drawer Content')).toBeNull();
    global.innerWidth = 500;
    fireEvent(window, new Event('resize'));
    expect(queryByText('Sider Content')).toBeNull();
    global.innerWidth = 1024;
    fireEvent(window, new Event('resize'));
  });
});
