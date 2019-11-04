import * as TYPES from './types';
import { createReducer } from '@/store/utils';

const initState = {
  loading: false
};

// 更新字段值
function updateHandler(state, action) {
  return Object.assign({}, state, {
    ...action.params
  });
}
const Reducer = createReducer(initState, {
  [TYPES.HANDLE_LOGIN_UPDATE]: updateHandler
});

export default Reducer;
