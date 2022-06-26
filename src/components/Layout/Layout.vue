<template >
  <Header />
  <Sidebar />
  <v-main class="content mx-0 mx-md-2" >
    <div class="wrapper" >
      <Breadcrumbs />
      <router-view />
      <!-- <Footer class="footer" /> -->
      <!-- <Helper /> -->
    </div>
  </v-main>
</template>

<script>
import Header from '@/components/Header/Header'
import Sidebar from '@/components/Sidebar/Sidebar'
import Footer from '@/components/Footer/Footer'
import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs'
import Helper from '@/components/Helper/Helper'

export default {
  name: 'Layout',
  components: {
    // Helper,
    // Footer,
    Header,
    Sidebar,
    Breadcrumbs,
  },
}
</script>

<style lang="scss">
@import '../../styles/_variables.scss';

body {
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: $scrollbar-bg;
    border-radius: 36px;
    border: none;
  }
}
</style>

<style lang="scss" scoped>
.footer {
  align-items: flex-end;
}

.wrapper {
  flex-direction: column;
  display: flex;
  min-height: 100%;
}
</style>
