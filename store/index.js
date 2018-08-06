import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'


const store = () => {
  return new Vuex.Store({
      
    state: {
      token: null,
      user: null,
      isUserLoggedIn: false,
      haveProfile: false,
      agent: null,
      student: null,
      alltutor: null

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
      setProfile(state , profile) {
        state.haveProfile = profile
      },
       setUser(state, user) {
         state.user = user
       },
       setAgent(state, agent) {
         state.agent = agent
       },
       setStudent(state, student) {
          state.student = student
        },
        setalltutor(state, alltutor) {
          state.alltutor = alltutor
        }
        
    },
    actions: {
         setProfile({commit}, profile) {
           commit('setProfile', profile)
         },

      setToken({commit}, token) {
        commit('setToken', token)
      },
      setUser({commit}, user) {
        commit('setUser', user)
      },
      setAgent({commit}, agent) {
         commit('setAgent', agent)
       },
      setStudent({commit}, student) {
         commit('setStudent', student)
       },
         setalltutor({commit}, alltutor) {
         commit('setalltutor', alltutor)
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