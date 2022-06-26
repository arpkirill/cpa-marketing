<template >
  <v-container fluid >
    <v-row >
      <v-col
        sm="6"
        cols="12" >
        <Youtube url="https://www.youtube.com/watch?v=m62lCNWUFHA" />
      </v-col>
    </v-row>

    <v-row >
      <v-col
        sm="6"
        md="4"
        cols="12" >
        <v-card >
          <v-card-title >
            <v-spacer />
            Ссылка для будущих клиентов
            <v-spacer />
          </v-card-title>
          <v-card-text >
            <div class="text-center" >
              Отправьте ее друзьям, чтобы они смогли получить скидку 10 000 ₽ при оформление договора. А вы получите
              бонус от 5 000 ₽ .
            </div>
          </v-card-text>
          <v-card-actions >
            <v-btn
              height="45"
              variant="outlined"
              block
              elevation="0"
              style="text-transform: none"
              @click="googleLogin" >
              https://localhost:8080/p/104034
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Youtube from '../../components/Youtube/Youtube.vue'

export default {
  name: 'Dashboard',
  components: { Youtube },
}
</script>
