<template >
  <div class="text-center" >
    <v-dialog
      v-model="dialog"
      transition="dialog-top-transition" >
      <template v-slot:activator="{ props }" >
        <v-btn
          large
          v-bind="props"
          variant="outlined"
          style="text-transform: none"
          color="primary" >
          Связаться с нами
        </v-btn>
      </template>
      <v-card >
        <v-toolbar color="primary" >
          Opening from the bottom
        </v-toolbar>

        <v-card-text >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </v-card-text>
        <v-card-actions >
          <v-btn
            color="primary"
            block
            @click="dialog = false" >
            Close Dialog
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import dialogMixin from '../../mixins/Dialog'

export default {
  name: 'BaseDialog',
  mixins: [ dialogMixin ],
}
</script>
