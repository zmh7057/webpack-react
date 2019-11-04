import Home from '@/pages/home/index';
import Login from '@/pages/login/index';

export default [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/login',
    component: Login
  }
];
