import { createStore } from 'vuex'
import designModule from './modules/designs/index.js'
import authModule from './modules/auth/index.js'

const store = createStore({
  modules: {
    designs: designModule,
    auth: authModule
  }
})

export default store;
