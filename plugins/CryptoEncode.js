import Vue from 'vue'
import CryptoJS from 'crypto-js'

var key = CryptoJS.enc.Base64.parse('d2Q5MjAwOTgybDZzaDA5Nw==')
var iv = CryptoJS.enc.Base64.parse('d2Q5MjAwOTgybDZzaDA5Nw==')
// word加密内容
Vue.prototype.encrypt = (msg) => {
  return CryptoJS.AES.encrypt(msg, key, {
    iv: iv,
    padding: CryptoJS.pad.Pkcs7,
    mode: CryptoJS.mode.CBC
  }).ciphertext.toString();
}
Vue.use(CryptoJS)
