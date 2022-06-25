<template >
  <v-navigation-drawer
    app
    clipped
    v-model="DRAWER_STATE" >
    <v-list >
      <v-list-item
        link
        v-for="item in items"
        :key="item.title"
        :prepend-icon="item.icon"
        :title="item.title"
        :value="item.value"
        @click="$router.push({ name: item.route })" />
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import routes from '../../enums/routes.js'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Sidebar',
  data() {
    return {
      items: routes,
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
