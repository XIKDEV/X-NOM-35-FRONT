import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Nom035App from '../Nom035App';

describe('Test in <Nom035App />', () => {
  test('should be match with the snapshot', () => {
    const { container } = render(
      <Router>
        <Nom035App />
      </Router>
    );
    expect(container).toMatchSnapshot();
  });
});
