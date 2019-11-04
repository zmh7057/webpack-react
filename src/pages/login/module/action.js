import * as TYPE from './types';

// 更新字段值
export const updateHandler = params => {
  return (dispatch, getState) => {
    dispatch({
      type: TYPE.HANDLE_LOGIN_UPDATE,
      params
    });
  };
};
