import { Form, Select, Spin } from 'antd';
import { debounce } from 'lodash';
import React, { useState } from 'react';
import request from 'umi-request';

const { Option } = Select;

export default () => {
  const [bankList, setBankList] = useState({});
  const [fetching, handleFetching] = useState<boolean>(false);
  const getBankList = debounce((bank_name: string) => {
    handleFetching(true);
    request(
      'https://www.fastmock.site/mock/996fa2d079bace69b60dc991084c9c04/cving/manage/supplier/getbankinfo',
      {
        params: { bank_name },
      },
    ).then(({ result }) => {
      handleFetching(false);
      setBankList(result);
    });
  }, 800);
  return (
    <Form>
      <Form.Item
        label="公司名称"
        name="license"
        rules={[{ required: true, message: '公司名称必选' }]}
      >
        <Select
          placeholder="请输入银行名称进行查询"
          notFoundContent={fetching ? <Spin size="small" /> : null}
          filterOption={false}
          showSearch
          onSearch={getBankList}
        >
          {Object.keys(bankList).map(key => (
            <Option value={bankList[key]} key={key}>
              {bankList[key]}
            </Option>
          ))}
        </Select>
      </Form.Item>
    </Form>
  );
};
