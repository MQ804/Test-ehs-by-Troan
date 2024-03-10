import React from 'react';
import { Dropdown, Avatar as AvatarComponent, Space } from 'antd';

const items = [
  {
    key: '1',
    label: <button>Змінити користувача</button>,
  },
  {
    key: '2',
    label: <button>Вихід</button>,
  },
];
export default function Avatar() {
  return (
    <Dropdown
      menu={{
        items,
      }}
      placement="bottomRight"
      arrow
    >
      <Space>
        <AvatarComponent className="cursor-pointer">Admin</AvatarComponent>
      </Space>
    </Dropdown>
  );
}
