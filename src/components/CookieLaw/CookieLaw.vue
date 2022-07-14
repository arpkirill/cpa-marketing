<template >
  <v-snackbar
    v-model="isOpen"
    timeout="-1"
    vertical
    multi-line >
    Этот веб-сайт использует файлы cookie, чтобы обеспечить Вам наилучший опыт работы на нашем веб-сайте.
    <template v-slot:actions >
      <v-btn
        color="red"
        variant="text"
        @click="accept" >
        Принять все
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
export default {
  name: 'CookieLaw',
  data() {
    return {
      isOpen: false,
    }
  },
  created() {
    this.isOpen = !this.isAccepted()
  },
  methods: {
    accept() {
      this.setAccepted()
    },
    setAccepted() {
      localStorage.setItem( 'cookie:accepted', true )
      this.isOpen = false
    },
    isAccepted() {
      return localStorage.getItem( 'cookie:accepted' ) === 'true' ? true : false
    },
  },
}
</script>
