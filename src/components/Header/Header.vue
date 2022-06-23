<template >
  <v-app-bar
    elevation="0"
    class="main-header"
    height="64"
    fixed
    color="primary"
    dark >
    <v-btn
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
    <v-spacer ></v-spacer>
    <v-btn icon >
      <v-icon >mdi-magnify</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'Header',
  data() {
    return {
      user: '',
    }
  },
  computed: {
    ...mapState( 'layout', { drawer: ( state ) => state.drawer } ),
    DRAWER_STATE: {
      get() {
        return this.drawer
      },
    },
  },
  methods: { ...mapActions( 'layout', [ 'TOGGLE_DRAWER' ] ) },
}
</script>
