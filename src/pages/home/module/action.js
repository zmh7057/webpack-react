import * as TYPE from './types';
import Api from './api';

// 更新字段值
export const handleUpdate = params => dispatch => {
  dispatch({
    type: TYPE.HANDLE_HOME_UPDATE,
    params
  });
};

// 获取业务单列表
export const fetchData = () => {
  return (dispatch, getState) => {
    return new Promise((resolve, reject) => {
      return Api.fetchSalesBills({
        pageSize: 20,
        pageNo: 1
      }).then(({ data }) => {
        if (data.code === 1) {
          const { list = [] } = data.result;
          dispatch(
            handleUpdate({
              salesOrderList: [...list]
            })
          );
        }
        resolve(data);
      });
    });
  };
};
