import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router/index'
import store from './store/index'
import { loadFonts } from './plugins/webfontloader'

loadFonts()

createApp( App ).use( vuetify ).use( router ).use( store ).mount( '#app' )
