<template >
  <v-container >
    <v-row >
      <v-col cols="12" >
        <CardForm />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CardForm from '../../components/CardForm/CardForm.vue'

export default {
  name: 'Profile',
  components: {
    CardForm,
  },
  data() {
    return {
      valid: true,
    }
  },
}
</script>
