<template >
  <v-navigation-drawer
    app
    clipped
    v-model="DRAWER_STATE" >
    <v-list >
      <template
        v-for="navLink in navLinks"
        :key="navLink.title" >
        <v-list-group
          v-if="navLink.subLinks"
          no-action >
          <template v-slot:activator="{ props }" >
            <v-list-item
              link
              v-bind="props"
              :prepend-icon="navLink.icon"
              :title="navLink.title"
              :value="navLink.value" />
          </template>
          <v-list-item
            link
            v-for="subLink in navLink.subLinks"
            :key="subLink.title"
            :title="subLink.title"
            :value="subLink.value"
            @click="$router.push({ name: subLink.route })" />
        </v-list-group>
        <v-list-item
          v-else
          link
          :prepend-icon="navLink.icon"
          :title="navLink.title"
          :value="navLink.value"
          @click="$router.push({ name: navLink.route })" />
      </template>
    </v-list>
    <template v-slot:append >
      <div class="pa-5 text-subtitle-1" >
        <div >
          <v-icon > mdi-face-agent </v-icon>
          Служба поддержки
        </div>
        <div class="text-h6" >
          8-800-555-35-35
        </div>
      </div>
    </template>
  </v-navigation-drawer>
</template>

<script>
import navLinks from '../../enums/navLinks.js'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Sidebar',
  data() {
    return {
      navLinks: navLinks,
    }
  },
  created() {
    if ( !this.$vuetify.display.md ) {
      this.TOGGLE_DRAWER()
    }
  },
  computed: {
    ...mapGetters( { drawer: 'layout/DRAWER_STATE' } ),
    DRAWER_STATE: {
      get() {
        return this.drawer
      },
      set() {
        this.TOGGLE_DRAWER()
      },
    },
  },
  methods: {
    ...mapActions( { TOGGLE_DRAWER: 'layout/TOGGLE_DRAWER' } ),
  },
}
</script>
