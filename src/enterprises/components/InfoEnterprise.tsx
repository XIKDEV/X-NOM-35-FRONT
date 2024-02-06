import { FC } from 'react';
import { List } from 'antd';
import { Content } from 'antd/es/layout/layout';
import { InfoDrawerButtons } from '../../ui/components';
import { useInfoEnterprise } from '../hooks/useInfoEnterprise';
import { IInfoEnterpriseProps } from '../../interfaces';
import { infoUserListItemStyle } from '../../users/ui';

export const InfoEnterprise: FC<IInfoEnterpriseProps> = () => {
  const { dataList } = useInfoEnterprise();

  return (
    <Content>
      <List
        dataSource={dataList}
        renderItem={(item) => (
          <List.Item style={infoUserListItemStyle}>
            {item.concept}: {item.info}
          </List.Item>
        )}
      />

      <InfoDrawerButtons />
    </Content>
  );
};
