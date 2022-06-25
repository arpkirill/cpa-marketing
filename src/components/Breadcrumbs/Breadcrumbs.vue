<template >
  <v-card class="my-5" >
    <v-breadcrumbs
      class="my-1 px-4 py-2"
      :items="breadcrumbsGen" >
      <template v-slot:divider >
        <v-icon size="22" >
          mdi-chevron-right
        </v-icon>
      </template>
    </v-breadcrumbs>
  </v-card>
</template>

<script>
export default {
  name: 'Breadcrumbs',
  computed: {
    breadcrumbsGen() {
      const breadcrumbArray = this.$route.matched.map( ( route ) => {
        return {
          path: 'app',
          to: '/app',
          text: route.meta.title || route.path,
        }
      } )

      return breadcrumbArray
    },
  },
}
</script>
