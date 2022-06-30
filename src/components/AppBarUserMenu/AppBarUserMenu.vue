<template >
  <div class="d-flex justify-space-around" >
    <v-menu location="start" >
      <template v-slot:activator="{ props }" >
        <v-btn
          icon
          x-large
          v-bind="props" >
          <v-avatar size="40px" >
            <v-img src="https://cdn.vuetifyjs.com/images/john.jpg" />
          </v-avatar>
        </v-btn>
      </template>
      <v-list >
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          :value="index" >
          <v-list-item-title >{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      items: [
        {
          title: 'Click Me',
        },
        {
          title: 'Click Me',
        },
        {
          title: 'Click Me',
        },
      ],
    }
  },
}
</script>

<style lang="scss"></style>
