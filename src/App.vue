<template>
  <main>
    <Header :toggle-cart-menu="toggleCartMenu" />
    <router-view :cart-menu="cartMenu"></router-view>
  </main>
</template>
<script>
import Header from './components/header/TheHeader.vue';

export default {
  name: 'App',
  components: {
    Header
  },
  data() {
    return {
      cartMenu: false
    }
  },
  methods: {
    toggleCartMenu() {
      this.cartMenu = !this.cartMenu;
    }
  }
}
</script>