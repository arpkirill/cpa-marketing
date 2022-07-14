import { createApp } from 'vue'
import App from './App.vue'

import vuetify from './plugins/vuetify'
import Maska from 'maska'
import axios from 'axios'

import router from './router/index'
import store from './store/index'

import config from './config'

axios.defaults.baseURL = config.hostApi // TODO На реальном проекте baseURLApi
axios.defaults.headers.common[ 'Content-Type' ] = 'application/json'
const token = localStorage.getItem( 'token' )
if ( token ) {
  axios.defaults.headers.common[ 'Authorization' ] = 'Bearer ' + token
}

import './registerServiceWorker'

import { loadFonts } from './plugins/webfontloader'
loadFonts()

createApp( App ).use( vuetify ).use( router ).use( store ).use( Maska ).mount( '#app' )
