import axios from 'axios';

// 创建实例
const MtAxios = axios.create({
  baseUrl: 'http://127.0.0.1:8887/',
  timeout: 10000,
  // withCredentials: true
  // changeOrigin:true,
  headers: {
    // "Content-Type": "application/x-www-form-urlencoded"
  }
})
// 默认导出
export default MtAxios
