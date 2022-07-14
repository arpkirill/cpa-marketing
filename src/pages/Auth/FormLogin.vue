<template >
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
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'FormLogin',
  data() {
    return {
      valid: true,
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
    ...mapState( 'auth', {
      isFetching: ( state ) => state.isFetching,
      errorMessage: ( state ) => state.errorMessage,
    } ),
    ...mapState( 'register', {
      regIsFetching: ( state ) => state.isFetching,
      regErrorMessage: ( state ) => state.errorMessage,
    } ),

    isFormValid() {
      return this.password.length !== 0 && this.email.length !== 0
    },
  },
}
</script>
