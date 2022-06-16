<template>
  <main>
    <Header :toggle-cart-menu="toggleCartMenu" />
    <Content :cart-menu="cartMenu" />
  </main>
</template>
<script>
import Header from './components/header/TheHeader.vue';
import Content from './components/MainContent.vue';

export default {
  name: 'App',
  components: {
    Header, Content
  },
  data() {
    return {
      cartMenu: false
    }
  },
  methods: {
    toggleCartMenu() {
      this.cartMenu = !this.cartMenu
    }
  }
}
</script>