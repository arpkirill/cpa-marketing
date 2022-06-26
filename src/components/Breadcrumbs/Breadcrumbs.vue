<template >
  <v-container fluid >
    <v-card >
      <v-breadcrumbs
        class="my-1 px-4 py-4"
        :items="breadcrumbsGen" >
        <template v-slot:divider >
          <v-icon size="22" >
            mdi-chevron-right
          </v-icon>
        </template>
      </v-breadcrumbs>
    </v-card>
  </v-container>
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
