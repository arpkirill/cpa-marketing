<template >
  <v-container
    fluid
    class="fill-height d-flex flex-column bg-white" >
    <v-row >
      <v-col class="d-flex flex-column align-center justify-center" >
        <div class="four_zero_four_bg" >
          <div class="text-center text-h1 font-weight-light" >
            404
          </div>
        </div>
        <div class="text-center" >
          <h2 class="mb-1 text-h2" >
            Похоже, вы заблудились
          </h2>
          <p class="text-h4 mb-3" >
            страница, которую вы ищете, недоступна!
          </p>
          <v-btn
            color="error"
            :rounded="0"
            size="x-large"
            to="/"
            class="mb-4" >
            Вернуться домой
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss">
.four_zero_four_bg {
  background-image: url(../../assets/404bg.gif);
  height: 400px;
  width: 100%;
  background-position: center;
}
</style>
