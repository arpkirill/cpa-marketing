/* eslint-disable no-console */

import { register } from 'register-service-worker'

function askForNPerm() {
  Notification.requestPermission( function ( result ) {
    console.log( 'User choice', result )
    if ( result !== 'granted' ) {
      console.log( 'No notification permission granted!' )
    } else {
      configurePushSub() // Write your custom function that pushes your message
    }
  } )
}

if ( process.env.NODE_ENV === 'production' ) {
  register( `${ process.env.BASE_URL }service-worker.js`, {
    ready() {
      console.log(
        'App is being served from cache by a service worker.\n' + 'For more details, visit https://goo.gl/AFskqB'
      )
    },
    registered() {
      console.log( 'Service worker has been registered.' )
      askForNPerm()
    },
    cached() {
      console.log( 'Content has been cached for offline use.' )
    },
    updatefound() {
      console.log( 'New content is downloading.' )
    },
    updated() {
      console.log( 'New content is available; please refresh.' )
    },
    offline() {
      console.log( 'No internet connection found. App is running in offline mode.' )
    },
    error( error ) {
      console.error( 'Error during service worker registration:', error )
    },
  } )
}
