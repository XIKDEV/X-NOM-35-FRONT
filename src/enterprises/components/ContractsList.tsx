import { FC } from 'react';
import { Card, List } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons';
import { IContractsListProps } from '../../interfaces';
import {
  bodyContractStyle,
  listContractsStyleDesktop,
  listContractsStyleMobile,
  listItemContractsStyle,
} from '../ui';

export const ContractsList: FC<IContractsListProps> = ({ data, isMobile }) => {
  return (
    <List
      style={isMobile ? listContractsStyleMobile : listContractsStyleDesktop}
      dataSource={data}
      renderItem={(item) => (
        <List.Item style={listItemContractsStyle}>
          <Card bodyStyle={bodyContractStyle} className="enterprise-contract">
            <div className="enteprise-contract-container flex-row-center space-between">
              <p>{item.contract}</p>
              <p>{item.date}</p>
              <button>
                <FontAwesomeIcon icon={faFileArrowDown} />
              </button>
            </div>
          </Card>
        </List.Item>
      )}
    />
  );
};
