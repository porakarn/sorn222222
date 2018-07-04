import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'


const store = () => {
  return new Vuex.Store({
      
    state: {
      token: null,
      user: null,
      isUserLoggedIn: false



    },
    mutations: {
      setToken(state, token) {
        state.token = token
        if (token) {
          state.isUserLoggedIn = true
        } else {
          state.isUserLoggedIn = false
        }
      },
      setUser(state, user) {
        state.user = user
      }
    },
    actions: {
        
      setToken({
        commit
      }, token) {
        commit('setToken', token)
      },
      setUser({
        commit
      }, user) {
        commit('setUser', user)
      },

    }

  })
}

export default store

// export default ({store}) => {
//   // why this work? is this workaround elegant?
//   store.commit('setToken', store)
//     store.commit('setUser', store)


//   createPersistedState({
//       key: 'setting',
//       paths: ['local']
//   })(store)
// }