import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import 'font-awesome/css/font-awesome.css'

import config from '../config'

import { createVuetify } from 'vuetify'

export default createVuetify( {
  theme: {
    defaultTheme: 'light',
    options: {
      customProperties: true,
    },
    themes: {
      light: config.light,
      dark: config.dark,
    },
  },
} )
