import { FC } from 'react';
import { useSelector } from 'react-redux';
import { EnterprisesCard } from '../components';
import { CardMobile, HeaderDesktop, HeaderMobile } from '../../ui/components';
import { useScreenSize } from '../../hooks';
import { useEnterprisesPage } from '../hooks';
import { IEnterprisesPageProps, RootState } from '../../interfaces';
import { enterprisesConstants } from '../../constants';
import '../ui/enterprisesPage.css';

export const EnterprisesPage: FC<IEnterprisesPageProps> = ({
  handleSidebar,
}) => {
  const { contextHolder } = useEnterprisesPage();
  const { enterprises } = useSelector((state: RootState) => state.enterprises);
  const { isMobile } = useScreenSize();

  // TODO: Info temp
  const logoEnterprise = '../../../public/_DSC7606.JPG';

  return (
    <>
      {contextHolder}
      {isMobile ? (
        <>
          <HeaderMobile
            handleSidebar={handleSidebar}
            data-testid="header-mobile"
          />

          {enterprises.map((enterprise) => (
            <CardMobile
              key={enterprise.enterpriseId}
              srcImage={logoEnterprise}
              alt={`${enterprisesConstants.logoFrom} ${enterprise.bussinessName}`}
              title={enterprise.bussinessName}
              subtitle={`${enterprisesConstants.responsibleEnterprise} ${enterprise.legal_representative}`}
              data-testid="card-mobile"
            />
          ))}
        </>
      ) : (
        <>
          <HeaderDesktop data-testid="header-desktop" />

          <section className="grid-enterprises-cards">
            {enterprises.map((enterprise) => (
              <EnterprisesCard
                key={enterprise.enterpriseId}
                srcImage={logoEnterprise}
                alt={`${enterprisesConstants.logoFrom} ${enterprise.bussinessName}`}
                title={enterprise.bussinessName}
                subtitle={`${enterprisesConstants.responsibleEnterprise} ${enterprise.legal_representative}`}
                data-testid="card-desktop"
              />
            ))}
          </section>
        </>
      )}
    </>
  );
};
