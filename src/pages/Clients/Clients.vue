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
              <div >Оплатили договор</div>
            </div>
            <v-spacer />
          </v-card-title>
          <v-card-text >
            <div class="text-h5 text-center" >
              50
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
              <div >Всего клиентов</div>
            </div>
            <v-spacer />
          </v-card-title>
          <v-card-text >
            <div class="text-h5 text-center" >
              80
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
                Дата заявки
              </th>
              <th class="text-left" >
                Клиент
              </th>
              <th class="text-left" >
                Выплатил
              </th>
              <th class="text-left" >
                Этап
              </th>
              <th class="text-left" >
                Сумма
              </th>
            </tr>
          </thead>
          <draggable
            v-model="partners"
            tag="tbody"
            item-key="id" >
            <template #item="{ element }" >
              <tr style="cursor: move" >
                <td class="pa-4" >
                  {{ element.id }}
                </td>
                <td >{{ element.registrationDate }}</td>
                <td >{{ element.name }}</td>
                <td >{{ element.paid }}₽</td>
                <td >{{ element.stage }}</td>
                <td >{{ element.amountOfIncome }}₽</td>
              </tr>
            </template>
          </draggable>
        </v-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import mock from '../Clients/mock'
import draggable from 'vuedraggable'

export default {
  name: 'Clients',
  components: {
    draggable,
  },
  data() {
    return {
      partners: mock,
    }
  },
}
</script>

<style lang="scss"></style>
