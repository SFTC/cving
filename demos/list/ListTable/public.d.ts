export interface IConst {
  [key: string]: string;
}

export interface IValueEnum {
  [key: string]: {
    text: string;
    status: 'Success' | 'Error' | 'Processing' | 'Warning' | 'Default';
  };
}

export interface IOptions {
  value: string;
  label: string;
}
