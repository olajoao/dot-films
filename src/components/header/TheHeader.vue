<template>
  <header
    class="flex items-center justify-between bg-indigo-900 px-5 md:px-10 py-3 sticky top-0 z-50"
  >
    <div>
      <router-link to="/">
        <h1 class="uppercase text-2xl font-semibold text-slate-200">Logo</h1>
      </router-link>
    </div>
    <div class="max-w-md hidden md:block">
      <label for="search" class="relative">
        <input
          @input="searchFilm"
          v-model="filmName"
          id="search"
          class="peer py-1 px-2 rounded-lg bg-slate-100 border-slate-100 focus:border-white focus:bg-white"
          type="text"
          placeholder="Search film"
        />
        <SearchIcon
          class="w-5 h-5 text-slate-400 absolute right-2 top-1 peer-focus:text-slate-500"
        />
      </label>
    </div>
    <div class="flex items-center gap-5">
      <button class="relative">
        <span
          v-if="favoritesLength"
          class="absolute -top-2.5 -right-2 p-2 w-4 h-4 text-xs flex items-center justify-center rounded-full bg-amber-600 text-white"
        >
          {{ favoritesLength }}
        </span>
        <HeartIcon class="w-6 h-6 text-slate-200" />
        <span class="sr-only">Toggle favorite list</span>
      </button>
      <button @click="toggleCartMenu" class="relative">
        <span
          v-if="cartLength"
          class="absolute -top-2.5 -right-2 p-2 w-4 h-4 text-xs flex items-center justify-center rounded-full bg-amber-600 text-white"
        >
          {{ cartLength }}
        </span>
        <ShoppingCartIcon class="w-6 h-6 text-slate-200" />
        <span class="sr-only">Toggle cart list</span>
      </button>
    </div>
  </header>
</template>

<script>
import { ShoppingCartIcon, HeartIcon, SearchIcon } from "@heroicons/vue/solid";
import { useCartStore } from "../../store/CartStore";
import { useFavoriteStore } from "../../store/FavoriteStore";
import { useFilmStore } from "../../store/FilmStore";

export default {
  name: "Header",
  props: ["toggleCartMenu"],
  components: {
    ShoppingCartIcon,
    HeartIcon,
    SearchIcon,
  },
  data() {
    return {
      cartStore: useCartStore(),
      favoriteStore: useFavoriteStore(),
      filmeStore: useFilmStore(),
      filmName: "",
    };
  },
  methods: {
    searchFilm() {
      this.filmeStore.searchFilm(this.filmName);
    },
  },
  computed: {
    cartLength() {
      return this.cartStore.cart.length;
    },
    favoritesLength() {
      return this.favoriteStore.favorites.length;
    },
  },
};
</script>
