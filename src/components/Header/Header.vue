<template >
  <v-app-bar
    elevation="0"
    class="main-header"
    height="64"
    fixed
    color="primary"
    dark >
    <v-btn
      v-if="$vuetify.display.mdAndDown"
      class="mx-1"
      @click.stop="TOGGLE_DRAWER" >
      <template v-if="DRAWER_STATE" >
        <v-icon
          size="28"
          :class="$vuetify.theme.dark ? 'primary--text' : null" >
          mdi-arrow-left
        </v-icon>
      </template>
      <template v-else >
        <v-icon
          size="28"
          :class="$vuetify.theme.dark ? 'primary--text' : null" >mdi-menu</v-icon>
      </template>
    </v-btn>
    <v-toolbar-title :class="$vuetify.theme.dark ? 'primary--text' : null" >
      Личный кабинет
    </v-toolbar-title>
    <v-spacer />
    <div class="d-flex align-center" >
      <AppBarUserMenu />
    </div>
  </v-app-bar>
</template>

<script>
import AppBarUserMenu from '../AppBarUserMenu/AppBarUserMenu.vue'

import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Header',
  components: {
    AppBarUserMenu,
  },
  data() {
    return {
      user: '',
    }
  },
  computed: {
    ...mapGetters( { drawer: 'layout/DRAWER_STATE' } ),
    DRAWER_STATE: {
      get() {
        return this.drawer
      },
    },
  },
  methods: {
    ...mapActions( { TOGGLE_DRAWER: 'layout/TOGGLE_DRAWER' } ),
  },
}
</script>
