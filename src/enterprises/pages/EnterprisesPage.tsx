import { FC } from 'react';
import { EnterprisesCard } from '../components';
import { CardMobile, HeaderDesktop, HeaderMobile } from '../../ui/components';
import { useScreenSize } from '../../hooks';
import { IEnterprisesPageProps } from '../../interfaces';
import { enterprisesConstants } from '../../constants';
import '../ui/enterprisesPage.css';

export const EnterprisesPage: FC<IEnterprisesPageProps> = ({
  handleSidebar,
}) => {
  const { isMobile } = useScreenSize();

  //! TODO: temp info
  const enterpriseName = 'XikDev';
  const responsible = 'Axel Coronado Zepeda';
  const logoEnterprise = '../../../public/_DSC7606.JPG';

  return (
    <>
      {isMobile ? (
        <>
          <HeaderMobile
            handleSidebar={handleSidebar}
            data-testid="header-mobile"
          />

          <CardMobile
            srcImage={logoEnterprise}
            alt={`${enterprisesConstants.logoFrom} ${enterpriseName}`}
            title={enterpriseName}
            subtitle={`${enterprisesConstants.responsibleEnterprise} ${responsible}`}
            data-testid="card-mobile"
          />
        </>
      ) : (
        <>
          <HeaderDesktop data-testid="header-desktop" />

          <section className="grid-enterprises-cards">
            <EnterprisesCard
              srcImage={logoEnterprise}
              alt={`${enterprisesConstants.logoFrom} ${enterpriseName}`}
              title={enterpriseName}
              subtitle={`${enterprisesConstants.responsibleEnterprise} ${responsible}`}
              data-testid="card-desktop"
            />
          </section>
        </>
      )}
    </>
  );
};
