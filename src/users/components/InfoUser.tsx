import { FC } from 'react';
import { Layout, List } from 'antd';
import { InfoDrawerButtons } from '../../ui/components';
import { useInfoUser } from '../hooks';
import { IInfoUserProps } from '../../interfaces';
import { infoUserListItemStyle } from '../ui';

const { Content } = Layout;

export const InfoUser: FC<IInfoUserProps> = () => {
  const { dataList } = useInfoUser();

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
