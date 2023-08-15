import { render } from '@testing-library/react';
import Nom035App from '../Nom035App';

describe('Test in <Nom035App />', () => {
  test('should be match with the snapshot', () => {
    const { container } = render(<Nom035App />);
    expect(container).toMatchSnapshot();
  });
});
