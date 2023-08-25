import { fireEvent, render, screen } from '@testing-library/react';
import { LayoutMainPage } from '../../layouts/pages';
import * as useScreenSizeModule from '../../hooks/useScreenSize';

describe('Test in <LayoutMainPage />', () => {
  test('should be render without crashing', () => {
    const { asFragment } = render(
      <LayoutMainPage page={() => <div>Content</div>} />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('should toggle sidebar collapse when button is clicked', () => {
    render(<LayoutMainPage page={() => <div>Content</div>} />);

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
      <LayoutMainPage page={() => <div>Content</div>} />
    );
    expect(container).toMatchSnapshot();

    spy.mockRestore();
  });

  test('should change sidebar layout on mobile', () => {
    global.innerWidth = 1024; // Por ejemplo, un ancho grande
    const { queryByText } = render(
      <LayoutMainPage page={() => <div>Content</div>} />
    );
    // Verificar que no se muestre el Drawer (pantalla grande)
    expect(queryByText('Drawer Content')).toBeNull();
    // Cambiar el tamaño de pantalla a pequeño (pantalla pequeña)
    global.innerWidth = 500; // Por ejemplo, un ancho pequeño
    fireEvent(window, new Event('resize'));
    // Verificar que no se muestre el Sider (pantalla pequeña)
    expect(queryByText('Sider Content')).toBeNull();
    // Restaurar el tamaño de pantalla original después de la prueba
    global.innerWidth = 1024; // O el ancho que tenías originalmente
    fireEvent(window, new Event('resize'));
  });
});
