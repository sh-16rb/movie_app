import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080/api', // Spring BootのベースURL
  timeout: 5000, // タイムアウト設定（ミリ秒）
});

export default axiosInstance;
