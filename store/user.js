const state = () => ({
  userInfo: {}
})

const mutations = {
  setUser(state, val) {
    state.userInfo = val
  }
}

const actions = {
  setUser: ({commit}, userInfo) => {
    commit('setUser', userInfo)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
