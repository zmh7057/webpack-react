import * as TYPE from './types';

// 更新字段值
export const updateHandler = params => dispatch => {
  dispatch({
    type: TYPE.HANDLE_HOME_UPDATE,
    params
  });
};
