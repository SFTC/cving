import React from 'react';
import { Form, Input, Table } from 'antd';
import { ColumnsType, TableProps } from 'antd/es/table';
import { FormInstance } from 'antd/lib/form';
import { NamePath } from 'antd/lib/form/interface';

export interface ExColumn extends ColumnsType<object> {
  /**
   * 该列是否可编辑
   */
  editable?: boolean;
  /**
   * 可编辑列的字段名
   */
  name?: NamePath;
}

export interface ExTableProps<T> extends Omit<TableProps<T>, 'columns'> {
  columns?: ExColumn;
  form?: FormInstance;
}

const genColumnList = (columns: ExColumn): ColumnsType<object> =>
  columns.map(item => ({
    ...item,
    render: (text: string) => {
      const dom = (
        <Form.Item>
          <Input value={text} />
        </Form.Item>
      );

      return dom;
    },
  }));

const ExTable = <T, U = {}>(props: ExTableProps<T>) => {
  const { form, columns = [] } = props;

  const propsColumns = genColumnList(columns);
  return (
    <Form form={form}>
      <Table columns={propsColumns} />
    </Form>
  );
};
export default ExTable;
