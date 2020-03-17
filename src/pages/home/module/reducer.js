import * as TYPES from './types';
import { createReducer } from '@/store/utils';

const initState = {
  loading: false,
  percent: 60
};

// 更新字段值
function handleUpdate(state, action) {
  return Object.assign({}, state, {
    ...action.params
  });
}
const Reducer = createReducer(initState, {
  [TYPES.HANDLE_HOME_UPDATE]: handleUpdate
});

export default Reducer;
