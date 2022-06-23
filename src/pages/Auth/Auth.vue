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
            width="200" ></v-img>
          <p >
            Личный <br />
            кабинет
          </p>
        </div>
      </v-col>
      <v-col
        cols="12"
        lg="5"
        class="login-part d-flex align-center justify-center" >
        <v-row
          no-gutters
          class="align-start" >
          <v-col
            cols="12"
            class="login-part d-flex align-center justify-center flex-column" >
            <div class="login-wrapper pt-16 pt-sm-0" >
              <v-tabs
                grow
                v-model="tab"
                class="mt-16"
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
                  <v-form >
                    <v-container >
                      <v-row class="flex-column" >
                        <v-col >
                          <p class="login-slogan display-2 text-center font-weight-medium my-10 text-h4" >
                            Добро пожаловать, Пользователь
                          </p>
                          <v-btn
                            height="45"
                            light
                            block
                            color="white"
                            elevation="0"
                            class="google"
                            style="text-transform: none"
                            @click="googleLogin" >
                            Войти с помощью Google
                          </v-btn>
                        </v-col>
                        <v-col
                          cols="12"
                          class="d-flex align-center my-3 my-sm-8" >
                          <v-divider light ></v-divider>
                          <span class="px-5 black--text" >
                            или
                          </span>
                          <v-divider light ></v-divider>
                        </v-col>
                        <v-form
                          ref="log"
                          v-model="valid"
                          lazy-validation >
                          <v-col >
                            <v-text-field
                              light
                              id="email"
                              ref="email"
                              v-model="email"
                              :rules="emailRules"
                              single-line
                              label="Адрес электронной почты"
                              required
                              @keydown.enter="isFormValid && login()" ></v-text-field>
                            <v-text-field
                              light
                              id="password"
                              ref="password"
                              v-model="password"
                              :rules="passRules"
                              single-line
                              type="password"
                              label="Пароль"
                              required
                              @keydown.enter="isFormValid && login()" ></v-text-field>
                          </v-col>
                          <v-col class="d-flex justify-space-between" >
                            <v-btn
                              class="text-capitalize"
                              large
                              :disabled="!isFormValid"
                              color="primary"
                              :loading="isFetching"
                              @click="login" >
                              Войти
                            </v-btn>
                            <v-btn
                              large
                              text
                              class="primary--text"
                              style="text-transform: none"
                              @click="$router.push('/forgot')" >
                              Забыл пароль
                            </v-btn>
                          </v-col>
                        </v-form>
                      </v-row>
                    </v-container>
                  </v-form>
                </v-window-item>
                <v-window-item :value="1" >
                  Создать аккаунт
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
import { mapActions } from 'vuex'

export default {
  name: 'Auth',
  data() {
    return {
      valid: true,
      tab: null,
      email: 'mail@google.com',
      emailRules: [
        ( v ) => !!v || 'Обязательное поле',
        ( v ) => /.+@.+/.test( v ) || 'Почта должна быть корректная',
        ( v ) => v.toLowerCase() === this.email,
      ],
      password: 'password',
      passRules: [ ( v ) => !!v || 'Обязательное поле', ( v ) => v.length >= 6 || 'Минимум 6 символов' ],
    }
  },
  methods: {
    ...mapActions( 'auth', [ 'loginUser' ] ),
    login() {
      const email = this.email
      const password = this.password
      this.loginUser( { email, password } )
    },
    googleLogin() {
      this.loginUser( { social: 'google' } )
    },
  },
  computed: {
    isFormValid() {
      return this.password.length !== 0 && this.email.length !== 0
    },
  },
}
</script>

<style lang="scss" scoped>
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
    width: 65%;
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
