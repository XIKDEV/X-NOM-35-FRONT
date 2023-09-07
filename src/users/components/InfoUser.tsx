import { FC } from 'react';
import { Layout, List } from 'antd';
import { IInfoUserProps } from '../../interfaces';
import { infoUserListItemStyle } from '../../constants/usersConstants';

const { Content } = Layout;

export const InfoUser: FC<IInfoUserProps> = ({ dataList, isMobile }) => {
  return (
    <Content style={{ marginTop: isMobile ? '0px' : '36px' }}>
      <List
        dataSource={dataList}
        renderItem={(item) => (
          <List.Item
            style={{
              ...infoUserListItemStyle,
              fontSize: isMobile ? 'var(--text-small)' : 'var(--text)',
            }}
          >
            {item.concept}: {item.info}
          </List.Item>
        )}
      />
    </Content>
  );
};
