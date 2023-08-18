import { SideBar } from '../components';
import { ILayoutMainPageProps } from '../../interfaces';
import '../ui/layouts.css';

export const LayoutMainPage: React.FC<ILayoutMainPageProps> = ({
  page: Page,
}) => {
  return (
    <main>
      <SideBar />

      <article>
        <Page />
      </article>
    </main>
  );
};
