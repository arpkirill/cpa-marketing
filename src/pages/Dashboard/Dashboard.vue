<template >
  <v-container fluid >
    <v-row >
      <v-col
        sm="6"
        cols="12" >
        <Youtube url="https://www.youtube.com/watch?v=V0hagz_8L3M" />
      </v-col>
      <v-col
        sm="6"
        cols="12" >
        <v-card
          class="pa-3"
          height="100%" >
          <v-card-title >
            <v-spacer />
            <div class="text-h3" >
              Дорогой друг!
            </div>
            <v-spacer />
          </v-card-title>
          <v-card-text >
            <div class="text-subtitle-1" >
              <p class="mb-2" >
                Акция «Агенты ДолговНет» это отличная возможность помочь твоим родственникам, друзьям, знакомым и всем
                кто нуждается в помощи получить скидку на услуги финансовой компании «Белый Слон», а тебе получать
                денежные вознаграждения всего лишь за рекомендации!
              </p>
              <p class="mb-2" >
                За каждого друга, заключившего договор с финансовой компанией «Белый Слон», ты получишь по 5000р!
              </p>
              <p class="mb-2" >
                За каждые семь договоров в месяц дополнительное вознаграждение в размере 7000р!
              </p>
              <p class="mb-2" >
                Чем больше таких заключенных договоров – тем больше у тебя размер денежного вознаграждения, подробнее в
                видео!
              </p>
              <p class="mb-2" >
                Также по твоей рекомендации твои друзья могут стать «Агентами ДолговНет» Ты будешь получать 10% от
                доходов твоих партнеров!
              </p>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row >
      <v-col
        sm="6"
        md="3"
        cols="12" >
        <v-card class="pa-3" >
          <v-card-title >
            <v-spacer />
            <div class="text-center" >
              <v-icon size="64" >
                mdi-chevron-right
              </v-icon>
              <div >Текущий баланс</div>
            </div>
            <v-spacer />
          </v-card-title>
          <v-card-text >
            <div class="text-h5 text-center" >
              5 000₽
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col
        sm="6"
        md="3"
        cols="12" >
        <v-card class="pa-3" >
          <v-card-title >
            <v-spacer />
            <div class="text-center" >
              <v-icon size="64" >
                mdi-chevron-right
              </v-icon>
              <div >За все время</div>
            </div>
            <v-spacer />
          </v-card-title>
          <v-card-text >
            <div class="text-h5 text-center" >
              5 000₽
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col
        sm="6"
        md="3"
        cols="12" >
        <v-card class="pa-3" >
          <v-card-title >
            <v-spacer />
            <div class="text-center" >
              <v-icon size="64" >
                mdi-chevron-right
              </v-icon>
              <div >Агентов</div>
            </div>
            <v-spacer />
          </v-card-title>
          <v-card-text >
            <div class="text-h5 text-center" >
              2
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col
        sm="6"
        md="3"
        cols="12" >
        <v-card class="pa-3" >
          <v-card-title >
            <v-spacer />
            <div class="text-center" >
              <v-icon size="64" >
                mdi-chevron-right
              </v-icon>
              <div >Клиентов</div>
            </div>
            <v-spacer />
          </v-card-title>
          <v-card-text >
            <div class="text-h5 text-center" >
              5
            </div>
          </v-card-text>
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
              @click:append-inner="show1 = !show1" >104034
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
              @click:append-inner="copy('localhost:8080/p/104034э')" >localhost:8080/p/104034
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
  methods: {
    copy( value ) {
      window.navigator.clipboard.writeText( value )
      this.$store.dispatch( 'snackbar/showSnackbar', 'Ссылка скопирована' )
    },
  },
}
</script>
