import Vue from 'vue'
import Vuex from 'vuex'
import user from './user.js'

Vue.use(Vuex)

const store = () => new Vuex.Store({
  modules: {
    user
  },
  actions: {
    async nuxtServerInit({commit}, {req, app}) {
      const {data: {code, msg, data}} = await app.$axios.post('/user/getUserInfo')
      // 提交到vuex中
      commit('user/setUser', code === 1 ? data : '')
    }
  }
})

export default store
