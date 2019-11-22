import axios from 'axios';

// 创建实例
console.log()
const MtAxios = axios.create({
  baseUrl: 'http://127.0.0.1:8887/',
  timeout: 20000,
  withCredentials: true, // 携带cookie
  headers: {
  }
})
// 默认导出
export default MtAxios
