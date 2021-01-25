import React from 'react';
import { Divider } from 'antd';

export default ({ list }: { list: React.ReactNode[] }) => {
  const newList: React.ReactNode[] = [];
  list
    .filter((v) => v)
    .forEach((item, index) => {
      // 除了一个元素，每个元素前面都要增加一个分割线
      if (index !== 0) {
        newList.push(<Divider key={index} type="vertical" />);
      }
      newList.push(item);
    });
  return <>{newList}</>;
};
