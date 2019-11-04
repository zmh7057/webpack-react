import { combineReducers } from 'redux';
import Home from '@/pages/home/module/reducer';
import Login from '@/pages/login/module/reducer';
import Common from '@/pages/common/module/reducer';

export default combineReducers({
  Home,
  Login,
  Common
});
