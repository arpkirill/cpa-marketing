<template >
  <v-container >
    <pdf src="https://cdn.jsdelivr.net/gh/mozilla/pdf.js@c6e8ca86/test/pdfs/calrgb.pdf" />
  </v-container>
</template>

<script>
import pdf from '@jbtje/vue3pdf'

export default {
  name: 'FAQ',
  components: {
    pdf,
  },
}
</script>
