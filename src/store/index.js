import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import getarticle from "./modules/getarticle"
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    home_info: ""
  },
  mutations: {
    setHomeInfo(state, data) {
      state.home_info = data;
      // console.log(data);
    }
  },
  actions: {
    setHome(store, data) {
      axios.get('/api.php/portal/index').then(res => {
        store.commit("setHomeInfo", res.data.data)
        // console.log(store.state.home_info)

      }).catch(err => {
        console.log(err)
      })
    }
  },
  modules: {
    getarticle,
  }
})