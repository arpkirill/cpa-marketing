import { createStore } from 'vuex'
import auth from './modules/auth'
import snackbar from './modules/snackbar'
import layout from './modules/layout'

export default createStore( {
  modules: {
    auth,
    snackbar,
    layout
  },
} )
