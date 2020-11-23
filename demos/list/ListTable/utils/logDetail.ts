export interface LogDetailDataType {
  [key: string]: Object | Object[];
}

export interface LogDetailConstType {
  [key: string]: Object;
}

export interface LogDetailProps {
  location: {
    query: {
      content: string;
    };
  };
}

export const typeObj = {
  '0': '否',
  '1': '是',
};

export const template_id = {
  '101': '众包挂靠供应商-结算模板',
  '102': '岗位外包供应商-结算模板',
  '103': '劳务用工供应商-结算模板',
};

export const getMaxLength = (value1?: Object[], value2?: Object[]) => {
  const len1 = value1?.length || 0;
  const len2 = value2?.length || 0;
  return Math.max(len1, len2);
};
