import React, { useState, useEffect } from 'react';
import { Table, Button } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { LoadMoreTableProps } from '../data.d';

const LoadMoreTable: React.FC<LoadMoreTableProps> = props => {
  const { columns, query, exParams, allowParamsNull, rowKey } = props;
  const [dataSource, setDataSource] = useState<any[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [current, setCurrent] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const pageSize = 20;

  const init = () => {
    setCurrent(1);
    setTotal(0);
    setDataSource([]);
  };

  const search = (first?: number) => {
    setLoading(true);
    query({ ...exParams, current: first || current, pageSize })
      .then((res: { total: React.SetStateAction<number>; data: any[] }) => {
        setLoading(false);
        setTotal(res.total);
        if (res.data) {
          if (first) {
            setDataSource(res.data);
          } else {
            setDataSource([...dataSource, ...res.data]);
          }
        }
      })
      .catch(() => {
        setLoading(false);
      });
  };

  const hasLoadMore = () => {
    return total && current * pageSize < total;
  };

  useEffect(() => {
    let flag = true;
    if (!allowParamsNull) {
      flag = Object.keys(exParams).every(key => exParams[key]);
    }
    if (flag) {
      init();
      search(1);
    }
  }, [exParams]);

  useEffect(() => {
    if (current > 1) {
      search();
    }
  }, [current]);

  const scrollX = columns
    .map(item => item.width)
    .reduce((sum, ele) => Number(sum) + Number(ele));
  return (
    <>
      <Table
        rowKey={rowKey}
        dataSource={dataSource}
        columns={columns}
        pagination={false}
        scroll={{ x: scrollX }}
        loading={loading}
      />
      {!!hasLoadMore() && (
        <div style={{ textAlign: 'center', marginTop: '10px' }}>
          {!loading && (
            <Button type="link" onClick={() => setCurrent(current + 1)}>
              加载更多
            </Button>
          )}
          {loading && <LoadingOutlined style={{ color: '#2162ff' }} />}
        </div>
      )}
    </>
  );
};

export default LoadMoreTable;
