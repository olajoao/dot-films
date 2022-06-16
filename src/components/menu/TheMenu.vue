<template>
  <aside class="w-screen h-screen fixed inset-x-0 top-14 lg:left-auto lg:right-0 md:max-w-xs md:w-full p-8 bg-white flex flex-col">
    <div class="h-[75vh] 2xl:h-[80vh] pb-5 overflow-y-auto">
      <h1 class="text-lg sm:text-xl md:text-2xl font-bold text-slate-700 mb-5">
        Shopping Cart
      </h1>
  
      <div class="flex flex-col gap-10">
        <CartItem 
          v-for="film in cartStore.cart" :key="film.id"
          :film-info="film"
        />
      </div>
    </div>

    <button class="w-full bg-emerald-500 text-white py-2 rounded-md hover:bg-emerald-600">
      Finalizar Compra
    </button>
  </aside>
</template>

<script>
import CartItem from "./CartItem.vue";
import { useCartStore } from "../../store/CartStore";

export default {
  name: 'Menu',
  components: {
    CartItem
  },
  data() {
    return {
      cartStore: useCartStore()
    }
  },

}
</script>