import React from 'react';
import { Form, Input, Table } from 'antd';
import { ColumnType, ColumnsType, TableProps } from 'antd/es/table';
import { FormInstance } from 'antd/lib/form';
import { NamePath } from 'antd/lib/form/interface';

export interface ExColumnType<T> extends ColumnType<T> {
  /**
   * 该列是否可编辑
   */
  editable?: boolean;
  /**
   * 可编辑列的字段名
   */
  name?: NamePath;
}

export interface ExColumnGroupType<RecordType>
  extends ExColumnType<RecordType> {}

export type ExColumns<T = any> = (ExColumnGroupType<T> | ExColumnType<T>)[];

export interface ExTableProps<T extends object = any>
  extends Omit<TableProps<T>, 'columns'> {
  columns?: ExColumns;
  form?: FormInstance;
}

const genColumnList = <T extends object = any>(
  columns: ExColumns,
): ColumnsType<T> =>
  columns.map(item => ({
    ...item,
    render: (text: string, _: any, index: number) => {
      const dom = !item.key ? (
        <Input value={text} />
      ) : (
        <Form.Item initialValue={text} name={[index, item.key]}>
          <Input />
        </Form.Item>
      );

      return dom;
    },
  }));

const ExTable = <T extends object = any, U = {}>(props: ExTableProps<T>) => {
  const { form, columns = [], ...reset } = props;

  const propsColumns = genColumnList(columns);
  return (
    <Form form={form}>
      <Table {...reset} columns={propsColumns} />
    </Form>
  );
};
export default ExTable;
