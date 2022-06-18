<template>
  <aside class="w-screen h-screen fixed inset-x-0 top-14 lg:left-auto lg:right-0 md:max-w-xs md:w-full p-8 bg-slate-50 flex flex-col">
    <div class="md:h-[75vh] 2xl:h-[78vh] pb-5 overflow-y-auto">
      <div class="flex justify-between items-center mb-5">
        <h1 class="text-lg sm:text-xl md:text-2xl font-bold text-slate-700">
          Shopping Cart
        </h1>
        <button @click="emptyCart" class="text-sm font-medium underline text-indigo-500">Empty</button>
      </div>
  
      <div class="flex flex-col gap-10 max-h-[50vh] overflow-y-auto">
        <TransitionGroup>
          <CartItem 
            v-for="(film, index) in cartStore.cart" :key="film.id"
            :in-menu="true"
            :film-info="film"
            :price="cartStore.prices[index]"
          />
        </TransitionGroup>
      </div>
    </div>
    <div class="flex items-center justify-between mb-5">
      <h2 class="text-slate-700 font-bold text-xl">Total</h2>
      <span>R$ {{ totalPrice.toFixed(2) }}</span>
    </div>
    <router-link to="/checkout" class="text-center w-full bg-emerald-500 text-white py-2 rounded-md hover:bg-emerald-600">
      Finalizar Compra
    </router-link>
  </aside>
</template>

<script>
import CartItem from "./CartItem.vue";
import { useCartStore } from "../../store/CartStore";
import { useFavoriteStore } from "../../store/FavoriteStore";

export default {
  name: 'Menu',
  components: {
    CartItem
  },
  data() {
    return {
      cartStore: useCartStore(),
      favoriteStore: useFavoriteStore()
    }
  },
  methods: {
    emptyCart () {
      this.cartStore.emptyCart();
    }
  },
  computed: {
    favoriteFilms() {
      return this.favoriteStore.favorites;
    },
    totalPrice() {
      let price = 0;

      this.cartStore.prices.forEach(filmPrice => {
        price += Number(filmPrice)
      });

      return price;
    }
  }
}
</script>
<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
  transform: scale(1);
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: scale(0.95);
}
</style>