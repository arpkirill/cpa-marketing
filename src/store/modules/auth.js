import router from '../../router/index'

export default {
  namespaced: true,
  state: {
    isFetching: false,
    errorMessage: '',
    currentUser: null,
  },
  mutations: {
    LOGIN_REQUEST( state ) {
      state.isFetching = true
    },
    LOGIN_FAILURE( state, payload ) {
      state.isFetching = false
      state.errorMessage = payload
      state.currentUser = null
    },
    LOGIN_SUCCESS( state, user ) {
      state.isFetching = false
      state.errorMessage = ''
      state.currentUser = user || null
    },
  },
  actions: {
    async loginUser( { dispatch }, payload ) {
      dispatch( 'requestLogin' )
      if ( payload.email && payload.password ) {
        try {
          const res = { data: 'token1' } // TODO auth/signin
          const token = res.data
          dispatch( 'receiveToken', token )
          dispatch( 'doInit' )
        } catch ( e ) {
          dispatch( 'snackbar/showSnackbar', e, { root: true } )
          dispatch( 'loginError', 'Текст ошибки с бека' )
        }
      } else {
        dispatch( 'loginError', 'Что-то пошло не так. Попробуйте позже' )
      } 
    },
    async doInit( { dispatch, commit } ) {
      try {
        let currentUser = null
        let token = localStorage.getItem( 'token' )
        if ( token ) {
          currentUser = await dispatch( 'findMe' )
        }
        commit( 'LOGIN_SUCCESS', currentUser )
      } catch ( e ) {
        commit( 'LOGIN_FAILURE', e )
      }
    },
    async findMe( { dispatch } ) {
      try {
        const response = { login: 'Admin' } // TODO auth/me
        return response.data
      } catch ( e ) {
        dispatch( 'snackbar/showSnackbar', e, { root: true } )
        dispatch( 'logoutUser' )
      }
    },
    receiveToken( { commit }, token ) {
      localStorage.setItem( 'token', token )

      commit( 'LOGIN_SUCCESS' )
      router.push( '/' )
    },
    requestLogin( { commit } ) {
      commit( 'LOGIN_REQUEST' )
    },
    loginError( { commit }, payload ) {
      commit( 'LOGIN_FAILURE', payload )
    },
    receiveLogin( { commit } ) {
      commit( 'LOGIN_SUCCESS' )
    },
  },
}
