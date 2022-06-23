<template >
  <v-row class="mt-10" >
    <v-col
      cols="12"
      class="d-flex justify-center" >
      <div class="primary--text" >
        {{ new Date().getFullYear() }} &copy; localhost - Made by
        <a
          href="https://t.me/ssagee"
          target="_blank" >
          Chernakov Kirill
        </a>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'Footer',
}
</script>
