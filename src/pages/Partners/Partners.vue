<template >
  <v-container fluid >
    <v-row >
      <v-col >
        <v-table >
          <thead class="pl-2" >
            <tr >
              <th class="text-left" >
                ID
              </th>
              <th class="text-left" >
                Дата регистрации
              </th>
              <th >Фамилия Имя Отчество</th>
              <th class="text-left" >
                Статус
              </th>
              <th class="text-left" >
                Сумма
              </th>
            </tr>
          </thead>
          <tbody >
            <tr
              v-for="item in partners"
              :key="item.id" >
              <td class="pa-4" >
                {{ item.id }}
              </td>
              <td >{{ item.registrationDate }}</td>
              <td >{{ item.name }}</td>
              <td >{{ item.status }}</td>
              <td >{{ item.amountOfIncome }}₽</td>
            </tr>
          </tbody>
        </v-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import mock from '../Partners/mock'

export default {
  name: 'Partners',
  data() {
    return {
      partners: mock,
    }
  },
}
</script>

<style lang="scss">
 
</style>
