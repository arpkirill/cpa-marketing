<template >
  <v-container fluid >
    <v-row >
      <v-col >
        <v-card >
          <v-card-text > Card </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row >
      <v-col >
        <v-card >
          <v-card-text > Card </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import mock from './mock'
export default {
  name: 'Finance',
  data() {
    return {
      mock,
    }
  },
}
</script>
