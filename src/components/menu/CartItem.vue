<template>
  <div class="flex gap-5">
    <div
      class="overflow-hidden rounded-md"
      :class="[inMenu ? 'w-20 h-20' : 'w-20 md:w-24 h-20 md:h-24']"
    >
      <img
        class="max-w-full h-auto"
        :src="`http://image.tmdb.org/t/p/w500/${filmInfo.poster_path}`"
        alt="image"
      />
    </div>
    <div class="flex-1 text-sm flex flex-col justify-between">
      <div>
        <h1
          class="font-bold"
          :class="[inMenu ? 'text-slate-600' : 'text-slate-400']"
        >
          {{ filmInfo.title }}
        </h1>
        <p class="text-slate-500">{{ filmInfo.genre_ids[0] }}</p>
      </div>
      <div class="flex items-center justify-between">
        <p
          class="font-bold"
          :class="[inMenu ? 'text-slate-600' : 'text-slate-400']"
        >
          R$ {{ price }}
        </p>
        <button
          @click="removeFilmFromCart"
          class="relative p-1 rounded-full hover:bg-slate-200"
        >
          <TrashIcon class="w-5 h-5 text-red-500/80 hover:text-red-500" />
          <span class="sr-only">Remove film from cart</span>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { TrashIcon } from "@heroicons/vue/outline";
import { useCartStore } from "../../store/CartStore";

export default {
  name: "CartItem",
  components: {
    TrashIcon,
  },
  props: ["filmInfo", "price", "inMenu"],
  data() {
    return {
      cartStore: useCartStore(),
    };
  },
  methods: {
    removeFilmFromCart() {
      this.cartStore.removeFilm(this.filmInfo, this.price);
    },
  },
};
</script>
