import React from 'react';

export interface FormSpanProps {
  value?: string;
  name?: string;
  onChange?: (v: string) => {};
  style?: React.CSSProperties;
  className?: string;
}
/** 用于表单内固定展示，却需要提交时带入该值的项 */
const FormSpan: React.FC<FormSpanProps> = (props) => {
  const { value, style, className } = props;

  return (
    <span className={className} style={style}>
      {value}
    </span>
  );
};

export default FormSpan;
