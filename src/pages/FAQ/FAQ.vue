<template >
  <v-container >
    <v-row >
      <v-col
        cols="12"
        md="8" >
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
