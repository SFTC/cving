import { AnyAction, Reducer } from 'redux';

import { EffectsCommandMap } from 'dva';
import { BPTableData } from './data.d';
import {} from './service';

export interface ManualentryModelState {
  bpProjectDataSource: Array<BPTableData>; // bd行项目的数据
  glProjectDataSource: Array<BPTableData>; // gl行项目的数据
  companyCode: string; // 公司代码
}

export type Effect = (
  action: AnyAction,
  effects: EffectsCommandMap & { select: <T>(func: (state: {}) => T) => T },
) => void;

export interface ModelType {
  namespace: string;
  state: ManualentryModelState;
  effects: {};
  reducers: {
    changeBPProjectDataSource: Reducer<ManualentryModelState>;
    changeGLProjectDataSource: Reducer<ManualentryModelState>;
    changeCompanyCode: Reducer<ManualentryModelState>;
  };
}

const Model: ModelType = {
  namespace: 'manualentry',

  state: {
    bpProjectDataSource: [],
    glProjectDataSource: [],
    companyCode: '',
  },

  effects: {},

  reducers: {
    changeBPProjectDataSource(state: any, { payload }: any) {
      return {
        ...state,
        bpProjectDataSource: payload,
      };
    },

    changeGLProjectDataSource(state: any, { payload }: any) {
      return {
        ...state,
        glProjectDataSource: payload,
      };
    },

    changeCompanyCode(state: any, { payload }: any) {
      return {
        ...state,
        companyCode: payload,
      };
    },
  },
};

export default Model;
