import axios from 'axios';

export default {
  /*
   * 获取 业务单列表
   */
  fetchSalesBills(data) {
    return axios({
      url: '/global/coop/v1/salesbill/query/head-mode/list',
      data
    });
  }
};
