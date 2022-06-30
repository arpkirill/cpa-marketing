<template >
  <v-card >
    <v-form >
      <v-container >
        <v-row >
          <v-col >
            <Card :labels="formData" />
          </v-col>
        </v-row>
        <v-row >
          <v-col
            class="pb-0 pt-0"
            cols="12" >
            <v-text-field
              v-model="formData.cardNumber"
              counter="19"
              label="Номер Карты"
              :rules="[rules.required, rules.counter]"
              placeholder="1234 1234 1234 1234"
              v-maska="'#### #### #### ####'"
              required />
          </v-col>
          <v-col
            class="pb-0 pt-0"
            cols="12" >
            <v-text-field
              v-model="formData.cardName"
              :rules="[rules.required]"
              label="Владелец Карты"
              placeholder="Иванов Иван"
              required />
          </v-col>
          <v-col
            class="pb-0 pt-0"
            cols="4" >
            <v-select
              v-model="formData.cardMonth"
              :rules="[rules.required]"
              :items="month"
              label="Месяц" />
          </v-col>
          <v-col
            class="pb-0 pt-0"
            cols="4" >
            <v-select
              v-model="formData.cardYear"
              :rules="[rules.required]"
              :items="year"
              label="Год" />
          </v-col>
          <v-col
            class="pb-0 pt-0"
            cols="4" >
            <v-text-field
              v-model="formData.cardCvv"
              :rules="[rules.required]"
              v-maska="'####'"
              label="CVV"
              placeholder="0000"
              required />
          </v-col>
          <v-col
            class="pb-0 pt-0"
            cols="12" >
            <v-btn
              large
              height="45"
              light
              block
              color="primary" >
              Добавить
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </v-card>
</template>

<script>
import Card from '../Card/Card.vue'

export default {
  name: 'CardForm',
  components: {
    Card,
  },
  data() {
    return {
      month: [ '11', '12' ],
      year: [ '2021', '2022' ],
      formData: {
        cardNumber: '123412341231234',
        cardName: 'Ivanov Ivan',
        cardMonth: '12',
        cardYear: '2022',
        cardCvv: '4321',
      },
      rules: {
        required: ( v ) => !!v || 'Обязательное поле',
        counter: ( v ) => v.length <= 19 || 'Максимум 19 символов',
      },
    }
  },
}
</script>
