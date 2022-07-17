<template >
  <v-snackbar
    location="top right"
    @update:modelValue="changeSnackbar"
    :model-value="snackbar"
    variant="flat" >
    {{ snackbarText }}
    <template v-slot:actions >
      <v-btn
        color="pink"
        text
        @click="hideSnackbar()" >
        Закрыть
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
  name: 'Snackbar',
  computed: {
    ...mapState( {
      snackbar: ( state ) => state.snackbar.show,
      snackbarText: ( state ) => state.snackbar.text,
    } ),
  },
  methods: {
    ...mapMutations( {
      hideSnackbar: 'snackbar/hideSnackbar',
    } ),
    changeSnackbar( val ) {
      if ( !val ) {
        this.hideSnackbar()
      }
    },
  },
}
</script>
