<template >
  <v-container >
    <v-row >
      <v-col >
        <v-card >
          <v-tabs
            v-model="tab"
            light >
            <v-tab :value="0" >
              Личная информация
            </v-tab>
            <v-tab :value="1" >
              Платежные реквизиты
            </v-tab>
          </v-tabs>
          <v-window v-model="tab" >
            <v-window-item :value="0" >
              <ProfileInfo />
            </v-window-item>
            <v-window-item :value="1" >
              <ProfileInfo />
            </v-window-item>
          </v-window>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ProfileInfo from './ProfileInfo.vue'

export default {
  name: 'Profile',
  components: { ProfileInfo },
  data() {
    return {
      tab: null,
    }
  },
}
</script>
