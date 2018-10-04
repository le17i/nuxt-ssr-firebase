import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const createStore = () => {
  return new Vuex.Store({
    state () {
      return {
        posts: []
      }
    },
    getters: {
      posts: (state) => state.posts,
      postById: (state) => (id) => state.posts.find(p => p.id === id)
    },
    actions: {
      async nuxtServerInit ({ commit }, { req }) {
        let { data } = await axios.get('https://jsonplaceholder.typicode.com/posts')
        commit('populate', data)
      }
    },
    mutations: {
      populate (state, posts) {
        state.posts = posts
      }
    }
  })
}
  
export default createStore
