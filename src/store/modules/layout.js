export default {
  namespaced: true,
  state: {
    drawer: false,
    darkTheme: false,
  },
  mutations: {
    toggleDrawer( state ) {
      state.drawer = !state.drawer
    },
    DARK_THEME_TOGGLED( state ) {
      state.darkTheme = !state.darkTheme
    },
  },
  actions: {
    TOGGLE_DRAWER( { commit } ) {
      commit( 'toggleDrawer' )
    },
    toggleDarkTheme( { commit } ) {
      commit( 'DARK_THEME_TOGGLED' )
    },
  },
  getters: {
    DRAWER_STATE( state ) {
      return state.drawer
    },
  },
}
