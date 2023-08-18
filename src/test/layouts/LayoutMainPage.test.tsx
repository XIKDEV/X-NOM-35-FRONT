import { render } from '@testing-library/react';
import { LayoutMainPage } from '../../layouts/pages';
import { EnterprisesPage } from '../../enterprises/pages';

describe('Test in <LayoutMainPage />', () => {
  test('should be match with the snapshot', () => {
    expect(render(<LayoutMainPage page={EnterprisesPage} />)).toMatchSnapshot();
  });
});
