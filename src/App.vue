<template >
  <v-app >
    <router-view />
    <Snackbar />
  </v-app>
</template>

<script>
import Snackbar from '@/components/Snackbar/Snackbar.vue'

export default {
  name: 'App',
  components: { Snackbar },
}
</script>

<style lang="scss">
@import 'styles/base';
</style>
