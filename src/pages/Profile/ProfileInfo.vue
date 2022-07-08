<template >
  <v-form >
    <v-container >
      <v-row >
        <v-col
          cols="12"
          md="6" >
          <v-text-field
            density="comfortable"
            placeholder="Иванов"
            variant="filled"
            label="Фамилия"
            required />
          <v-text-field
            density="comfortable"
            placeholder="Иван"
            variant="filled"
            label="Имя"
            required />
          <v-text-field
            density="comfortable"
            placeholder="Иванович"
            variant="filled"
            label="Отчество"
            required />
          <v-text-field
            density="comfortable"
            variant="filled"
            label="Дата рождения"
            required />
          <v-text-field
            density="comfortable"
            variant="filled"
            label="Телефон"
            required />
        </v-col>
        <v-col
          cols="12"
          md="6" >
          <v-text-field
            density="comfortable"
            variant="filled"
            label="Серия и номер паспорта"
            required />
          <v-text-field
            density="comfortable"
            variant="filled"
            label="Дата выдачи"
            required />
          <v-text-field
            density="comfortable"
            variant="filled"
            label="Город проживания"
            required />
          <v-text-field
            density="comfortable"
            variant="filled"
            label="Адрес проживания"
            required />
          <v-text-field
            density="comfortable"
            variant="filled"
            label="Индекс"
            required />
        </v-col>
      </v-row>
      <v-row >
        <v-col class="d-flex justify-end" >
          <v-btn
            large
            color="primary"
            style="text-transform: none"
            @click="save" >
            Сохранить
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
export default {
  name: 'ProfileInfo',
  data() {
    return {
      valid: true,
    }
  },
  methods: {
    save() {},
  },
}
</script>
