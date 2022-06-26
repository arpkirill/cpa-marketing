<template >
  <v-container fluid >
    <v-row >
      <v-col
        sm="6"
        cols="12" >
        <Youtube url="https://www.youtube.com/watch?v=m62lCNWUFHA" />
      </v-col>
      <v-col
        sm="6"
        cols="12" >
        <v-card height="100%" >
          Card
        </v-card>
      </v-col>
    </v-row>
    <v-row >
      <v-col
        sm="6"
        md="4"
        cols="12" >
        <v-card class="pa-3" >
          <v-card-title >
            <v-spacer />
            Промокод для будущих клиентов
            <v-spacer />
          </v-card-title>
          <v-card-text >
            <div class="text-center" >
              Отправьте его друзьям, чтобы они смогли получить скидку 10 000₽ при оформление договора. А вы получите
              бонус от 5 000₽.
            </div>
          </v-card-text>
          <v-card-actions >
            <v-text-field
              variant="outlined"
              readonly
              single-line
              full-width
              hide-details
              append-inner-icon="mdi-content-copy"
              @click:append-inner="show1 = !show1" >localhost:8080/p/104034
            </v-text-field>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col
        sm="6"
        md="4"
        cols="12" >
        <v-card class="pa-3" >
          <v-card-title >
            <v-spacer />
            Ссылка для будущих клиентов
            <v-spacer />
          </v-card-title>
          <v-card-text >
            <div class="text-center" >
              Отправьте ее друзьям, чтобы они смогли получить скидку 10 000₽ при оформление договора. А вы получите
              бонус от 5 000₽.
            </div>
          </v-card-text>
          <v-card-actions >
            <v-text-field
              variant="outlined"
              readonly
              single-line
              full-width
              hide-details
              append-inner-icon="mdi-content-copy"
              @click:append-inner="show1 = !show1" >localhost:8080/p/104034
            </v-text-field>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col
        sm="6"
        md="4"
        cols="12" >
        <v-card class="pa-3" >
          <v-card-title >
            <v-spacer />
            Ссылка для будущих агентов
            <v-spacer />
          </v-card-title>
          <v-card-text >
            <div class="text-center" >
              Отправьте ее друзьям, чтобы они смогли стать агентом также как Вы. А вы будете получать бонус 10% от их
              дохода.
            </div>
          </v-card-text>
          <v-card-actions >
            <v-text-field
              variant="outlined"
              readonly
              single-line
              full-width
              hide-details
              append-inner-icon="mdi-content-copy"
              @click:append-inner="show1 = !show1" >localhost:8080/p/104034
            </v-text-field>
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
  data() {
    return {
      show1: true,
    }
  },
}
</script>
