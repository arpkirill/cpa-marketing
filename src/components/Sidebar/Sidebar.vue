<template >
  <v-navigation-drawer
    app
    clipped >
    <v-list :items="items" ></v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'Sidebar',
  data() {
    return {
      drawer: true,
      items: [
        { title: 'Foo', value: 'foo' },
        { title: 'Bar', value: 'bar' },
        { title: 'Fizz', value: 'fizz' },
        { title: 'Buzz', value: 'buzz' },
      ],
    }
  },
}
</script>
