<template >
  <v-form >
    <v-container >
      <v-row class="flex-column" >
        <v-col >
          <p class="login-slogan display-2 text-center font-weight-medium my-10 text-h4" >
            Создайте Ваш аккаунт
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
            С помощью Google
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
              v-model="createEmail"
              :rules="createEmailRules"
              single-line
              label="Адрес электронной почты"
              required ></v-text-field>
            <v-text-field
              light
              v-model="createPassword"
              :rules="passRules"
              single-line
              type="password"
              label="Пароль"
              required ></v-text-field>
          </v-col>
          <v-col class="d-flex justify-space-between" >
            <v-btn
              large
              :disabled="createEmail.length === 0 || createPassword === 0"
              color="primary"
              :loading="regIsFetching"
              block
              height="45"
              elevation="0"
              style="text-transform: none"
              @click="register" >
              Создать аккаунт
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
  name: 'FormRegister',
  data() {
    return {
      valid: true,
      createEmail: '',
      createEmailRules: [
        ( v ) => !!v || 'Обязательное поле',
        ( v ) => /.+@.+/.test( v ) || 'Почта должна быть корректная',
        ( v ) => v.toLowerCase() === this.email,
      ],
      createPassword: '',
      passRules: [ ( v ) => !!v || 'Обязательное поле', ( v ) => v.length >= 6 || 'Минимум 6 символов' ],
    }
  },
  methods: {
    ...mapActions( 'register', [ 'registerUser', 'registerError' ] ),
    async register() {
      await this.registerUser( { email: this.createEmail, password: this.createPassword } ).then( () => {
        this.createEmail = ''
        this.createPassword = ''
        this.$router.replace( { query: { tab: 'login' } } )
      } )
    },
  },
  computed: {
    ...mapState( 'register', {
      regIsFetching: ( state ) => state.isFetching,
      regErrorMessage: ( state ) => state.errorMessage,
    } ),
  },
}
</script>
