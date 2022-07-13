<template >
  <v-container
    fluid
    class="pa-0" >
    <v-row no-gutters >
      <v-col
        cols="7"
        class="main-part d-none d-md-none d-lg-flex" >
        <div class="d-flex" >
          <v-img
            src="../../assets/logo.svg"
            width="100%" ></v-img>
          <p >
            Личный <br />
            кабинет
          </p>
        </div>
      </v-col>
      <v-col
        cols="12"
        lg="5"
        class="login-part d-flex align-center justify-center"
        style="overflow-x: hidden" >
        <v-row
          no-gutters
          class="align-start" >
          <v-col
            cols="12"
            class="login-part d-flex align-center justify-center flex-column" >
            <div class="login-wrapper" >
              <v-tabs
                grow
                v-model="tab"
                light >
                <v-tab :value="0" >
                  Авторизация
                </v-tab>
                <v-tab :value="1" >
                  Создать аккаунт
                </v-tab>
              </v-tabs>
              <v-window v-model="tab" >
                <v-window-item :value="0" >
                  <FormLogin />
                </v-window-item>
                <v-window-item :value="1" >
                  <FormLogin />
                </v-window-item>
              </v-window>
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import FormLogin from './FormLogin.vue'

export default {
  name: 'Auth',
  components: { FormLogin },
  data() {
    return {
      tab: null,
    }
  },
}
</script>

<style lang="scss">
.main-part {
  width: 100%;
  height: 100vh;
  background-color: #bd0404;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p {
      text-align: center;
      font-family: 'Roboto', sans-serif;
      font-size: 84px;
      color: white;
      font-weight: 500;
    }
  }
}

.login-part {
  width: 100%;
  height: 100vh;
  background-color: #f6f7ff;
  overflow-y: auto;
  .login-wrapper {
    height: auto;
    .login-slogan {
      color: #4a4a4a;
    }
    ::v-deep .v-tabs {
      .v-tab {
        font-size: 18px;
      }
      .v-item-group {
        background-color: #f6f7ff;
      }
    }
  }
  .v-footer {
    position: absolute;
    bottom: 0;
    background-color: #f6f7ff;
  }
}
</style>
