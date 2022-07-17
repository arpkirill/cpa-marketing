<template >
  <v-container >
    <v-row >
      <v-col
        cols="12"
        md="9" >
        <v-expansion-panels >
          <v-expansion-panel
            v-for="question in questions"
            :key="question.url" >
            <v-expansion-panel-title > {{ question.title }} </v-expansion-panel-title>
            <v-expansion-panel-text >
              <Youtube :url="question.url" />
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
      <v-col
        cols="12"
        md="3" >
        <v-card class="text-center pa-5" >
          <template v-slot:title >
            <v-spacer />
            <v-icon size="64" >
              mdi-chevron-right
            </v-icon>
            <v-spacer />
          </template>
          <template v-slot:text >
            <span >
              Не нашли ответ на свой вопрос? <br />
              Мы здесь, чтобы помочь вам!
            </span>
            <div class="mt-5" >
              <v-btn
                large
                variant="outlined"
                style="text-transform: none"
                color="primary" >
                Связаться с нами
              </v-btn>
            </div>
          </template>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Youtube from '../../components/Youtube/Youtube.vue'
import questions from '../../enums/questions.js'

export default {
  name: 'Faq',
  components: { Youtube },
  data() {
    return { questions: questions }
  },
}
</script>

<style lang="scss">
.v-expansion-panel-text__wrapper {
  padding: 0px;
}
</style>
