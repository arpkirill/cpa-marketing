<template >
  <v-app >
    <router-view />
    <Snackbar />
    <CookieLaw />
  </v-app>
</template>

<script>
import { mapActions } from 'vuex'

import Snackbar from '@/components/Snackbar/Snackbar.vue'
import CookieLaw from '@/components/CookieLaw/CookieLaw.vue'

export default {
  name: 'App',
  components: { Snackbar, CookieLaw },
  created() {
    this.doInit()
  },
  methods: {
    ...mapActions( 'auth', [ 'doInit' ] ),
  },
}
</script>

<style lang="scss">
@import 'styles/base';
</style>
