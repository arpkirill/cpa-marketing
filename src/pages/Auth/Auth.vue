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
          class="align-start justify-center" >
          <v-col
            cols="12"
            sm="8"
            md="6"
            lg="9"
            class="login-part d-flex align-center justify-center flex-column" >
            <div class="login-wrapper" >
              <v-tabs
                grow
                v-model="tab"
                light >
                <v-tab value="login" >
                  Авторизация
                </v-tab>
                <v-tab value="signup" >
                  Создать аккаунт
                </v-tab>
              </v-tabs>
              <v-window v-model="tab" >
                <v-window-item value="login" >
                  <FormLogin />
                </v-window-item>
                <v-window-item value="signup" >
                  <FormRegister />
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
import FormRegister from './FormRegister.vue'

export default {
  name: 'Auth',
  components: { FormLogin, FormRegister },
  computed: {
    tab: {
      set( tab ) {
        this.$router.replace( { query: { ...this.$route.query, tab } } )
      },
      get() {
        return this.$route.query.tab
      },
    },
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
  height: 85vh;
  background-color: #f6f7ff;
  overflow-y: auto;
  .login-wrapper {
    height: auto;
    width: 100%;
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
