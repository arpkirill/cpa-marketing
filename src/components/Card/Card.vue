<template >
  <v-img
    max-height="435"
    max-width="675"
    class="rounded-xl"
    src="https://raw.githubusercontent.com/ShaneKolkoto/Vue-checkout/master/src/assets/images/20.jpeg" >
    <div class="wrapper overlay text-white" >
      <v-container
        class="fill-height d-flex flex-column justify-space-between"
        fluid >
        <v-row >
          <v-col >
            <v-img
              max-width="60"
              src="https://raw.githubusercontent.com/ShaneKolkoto/Vue-checkout/master/src/assets/images/chip.png" />
          </v-col>
          <v-col align="right" >
            <v-img
              max-height="45"
              max-width="60"
              src="https://raw.githubusercontent.com/ShaneKolkoto/Vue-checkout/master/src/assets/images/mastercard.png" />
          </v-col>
        </v-row>
        <v-row align="center" >
          <v-col align="center" >
            {{ labels.cardNumber }}
          </v-col>
        </v-row>
        <v-row align="end" >
          <v-col >
            <label >
              <div >Card Holder</div>
              <div v-if="labels.cardName.length" >
                {{ labels.cardName }}
              </div>
              <div
                class="card-item__name"
                v-else
                key="2" >
                Full Name
              </div>
            </label>
          </v-col>
          <v-col align="right" >
            <label >
              <span v-if="labels.cardMonth" >
                {{ labels.cardMonth }}
              </span>
              <span
                v-else
                key="2" >
                MM
              </span> </label>/<label >
              <span v-if="labels.cardYear" >
                {{ String(labels.cardYear).slice(2, 4) }}
              </span>
              <span
                v-else
                key="2" >
                YY
              </span>
            </label>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </v-img>
</template>

<script>
export default {
  name: 'Card',
  props: {
    labels: {
      type: Object,
      required: false,
    },
  },
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Source+Code+Pro:400,500,600,700|Source+Code+Pro:400,600,700&display=swap');

.wrapper {
  font-family: 'Source Code Pro', monospace;
  font-size: 27px;
  font-weight: 500;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.2);
}
</style>
