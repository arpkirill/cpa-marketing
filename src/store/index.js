import { createStore } from 'vuex'
import auth from './modules/auth'
import snackbar from './modules/snackbar'

export default createStore( {
  modules: {
    auth,
    snackbar,
  },
} )
