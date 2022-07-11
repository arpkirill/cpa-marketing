<template >
  <v-container fluid >
    <v-row >
      <v-col
        cols="12"
        sm="6" >
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
              50₽
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col
        cols="12"
        sm="6" >
        <v-card class="pa-3" >
          <v-card-title >
            <v-spacer />
            <div class="text-center" >
              <v-icon size="64" >
                mdi-chevron-right
              </v-icon>
              <div >Заработано за все время</div>
            </div>
            <v-spacer />
          </v-card-title>
          <v-card-text >
            <div class="text-h5 text-center" >
              100₽
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row >
      <v-col >
        <v-table >
          <thead class="pl-2" >
            <tr >
              <th class="text-left" >
                ID
              </th>
              <th class="text-left" >
                Дата выплаты
              </th>
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
import mock from '../Finance/mock'

export default {
  name: 'Finance',
  data() {
    return {
      partners: mock,
    }
  },
}
</script>

<style lang="scss"></style>
