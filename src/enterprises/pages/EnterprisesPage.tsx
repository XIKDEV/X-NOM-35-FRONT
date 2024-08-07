import { FC } from 'react';
import { EnterprisesCard } from '../components';
import { CardMobile, HeaderPage } from '../../ui/components';
import { useEnterprisesPage } from '../hooks';
import { IEnterprisesPageProps } from '../../interfaces';
import { enterprisesConstants } from '../../constants';
import '../ui/enterprisesPage.css';

export const EnterprisesPage: FC<IEnterprisesPageProps> = ({
  handleSidebar,
}) => {
  const {
    enterprises,
    isMobile,
    contextHolder,
    handleOpenDrawerInfoEnterprise,
  } = useEnterprisesPage();

  return (
    //! TODO: Arreglar grid
    <>
      {contextHolder}

      <HeaderPage
        handleSidebar={handleSidebar}
        data-testid="header-desktop"
        formAdd="addEnterprise"
      />
      {isMobile ? (
        <>
          {enterprises.map((enterprise) => (
            <CardMobile
              key={enterprise.id}
              srcImage={enterprise.image}
              alt={`${enterprisesConstants.logoFrom} ${enterprise.business_name}`}
              title={enterprise.business_name}
              subtitle={`${enterprisesConstants.responsibleEnterprise} ${enterprise.legal_representative}`}
              handleOpenDrawerInfo={() => {
                handleOpenDrawerInfoEnterprise(enterprise);
              }}
              data-testid="card-mobile"
            />
          ))}
        </>
      ) : (
        <>
          <section className="grid-enterprises-cards">
            {enterprises.map((enterprise) => (
              <EnterprisesCard
                key={enterprise.id}
                srcImage={enterprise.image}
                alt={`${enterprisesConstants.logoFrom} ${enterprise.business_name}`}
                title={enterprise.business_name}
                subtitle={`${enterprisesConstants.responsibleEnterprise} ${enterprise.legal_representative}`}
                handleOpenDrawerInfo={() => {
                  handleOpenDrawerInfoEnterprise(enterprise);
                }}
                data-testid="card-desktop"
              />
            ))}
          </section>
        </>
      )}
    </>
  );
};
