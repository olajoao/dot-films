<template>
  <section class="main__section--height p-10 bg-neutral-900">
    <div class="max-w-6xl mx-auto">
      <h1 class="text-2xl mb-8 text-white font-bold">Checkout</h1>
      <div class="flex flex-col md:flex-row gap-10">
        <div class="w-full">
          <CheckoutForm @show-checkout-modal="modalToOpen = 'checkout-modal'"/>
        </div>
        <div class="flex flex-col justify-between gap-10 py-6 px-4 lg:px-10 w-full">
          <TransitionGroup>
            <CartItem
              v-for="(film, index) in cartStore.cart"
              :key="film.id"
              :in-menu="false"
              :film-info="film"
              :price="cartStore.prices[index]"
            />
          </TransitionGroup>
          <div>
            <div
              class="flex text-2xl items-center justify-between mb-5 text-slate-400"
            >
              <h2 class="font-bold">Total</h2>
              <span>R$ {{ totalPrice.toFixed(2) }}</span>
            </div>
            <button
              type="submit"
              form="checkoutForm"
              class="text-lg text-center w-full bg-emerald-500 text-white py-2 rounded-md hover:bg-emerald-600"
            >
              Finalizar
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
  <CheckoutModal v-if="modalToOpen === 'checkout-modal'" :close-modal="closeModal" />
</template>
<script>
import CheckoutForm from "../components/CheckoutForm.vue";
import CartItem from "../components/menu/CartItem.vue";
import CheckoutModal from "../components/modal/CheckoutModal.vue";
import { useCartStore } from "../store/CartStore";

export default {
  name: "Checkout",
  props: ['cartMenu'],
  components: {
    CheckoutForm,
    CartItem,
    CheckoutModal,
  },
  data() {
    return {
      cartStore: useCartStore(),
      modalToOpen: null,
    };
  },
  methods: {
    emptyCart() {
      this.cartStore.emptyCart();
    },
    closeModal() {
      this.modalToOpen = null;
    },
  },
  computed: {
    totalPrice() {
      let price = 0;

      this.cartStore.prices.forEach((filmPrice) => {
        price += Number(filmPrice);
      });

      return price;
    },
  },
};
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
