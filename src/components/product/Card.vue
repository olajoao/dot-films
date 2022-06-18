<template>
  <article
    class="snap-center max-w-[220px] 2xl:shrink-0 mx-auto sm:mx-0 relative transform scale-95 hover:scale-100 duration-200"
  >
    <button
      @click="addFilmToFavorites(filmInfo)"
      class="absolute top-3 right-3 z-10"
    >
      <EmptyHeartIcon class="w-6 h-6 text-white" />
    </button>

    <!-- toggle favorite film  
      <button>
        <FullfiledHeartIcon class="w-6 h-6 absolute top-2 right-2 z-10 text-red-500/80" /> 
      </button>
    -->

    <div class="h-72 overflow-hidden">
      <img
        class="max-w-full h-auto"
        width="300"
        height="300"
        :src="`http://image.tmdb.org/t/p/w500/${filmInfo.poster_path}`"
      />
    </div>
    <div class="mb-3 mt-1">
      <h1 class="text-slate-300 font-medium">{{ filmInfo.title }}</h1>
      <p class="text-slate-500 text-xs p-0.5 bg-amber-300/80 w-max rounded-sm">
        {{ filmInfo.genre_ids[0] }}
      </p>

      <h2 class="text-center font-semibold text-slate-200">R$ {{ price }}</h2>
    </div>
    <button
      @click="addFilmToCart(filmInfo, price)"
      class="text-xs tracking-wide w-full py-1.5 bg-indigo-500 text-white font-medium uppercase hover:bg-indigo-600 rounded-md"
    >
      Adicionar
    </button>
  </article>
</template>

<script>
import { HeartIcon as FullfiledHeartIcon } from "@heroicons/vue/solid";
import { HeartIcon as EmptyHeartIcon } from "@heroicons/vue/outline";
import { useCartStore } from "../../store/CartStore";
import { useFavoriteStore } from "../../store/FavoriteStore";

export default {
  name: "Card",
  props: ["filmInfo"],
  components: {
    FullfiledHeartIcon,
    EmptyHeartIcon,
  },
  data() {
    return {
      cartStore: useCartStore(),
      favoriteStore: useFavoriteStore(),
      price: 0,
    };
  },
  methods: {
    addFilmToCart(film, price) {
      if (this.cartStore.cart.includes(film)) return;

      this.cartStore.pushItem(film, price);
      this.$emit("handleNotification");
    },
    addFilmToFavorites(film) {
      this.favoriteStore.addFavorite(film);
    },
    randomPrice(min, max) {
      this.price = (Math.random() * (max - min) + min).toFixed(2);
      return this.price;
    },
  },
  mounted() {
    this.randomPrice(11, 100);
  },
};
</script>
