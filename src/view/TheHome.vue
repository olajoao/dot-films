<template>
  <Content :cart-menu="cartMenu" />
</template>
<script>
import Content from "../components/MainContent.vue";

export default {
  name: "Home",
  props: ["cartMenu"],
  components: {
    Content,
  }
};
</script>
