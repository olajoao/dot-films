<template>
  <section class="main__section--height p-10 bg-neutral-900">
    <div>
      <h1 class="text-xl text-white font-bold ml-2">Popular</h1>
      <div
        class="grid gap-1 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-7 pb-3"
      >
        <ProductCard
          v-for="film in popularFilms"
          :key="film.id"
          :filmInfo="film"
          @handleNotification="handleNotification"
        />
      </div>
      <div class="mt-5">
        <button
          @click="loadMoreFilms"
          class="text-lg flex items-center gap-5 text-slate-200 font-medium mx-auto py-2 px-4 rounded-md hover:bg-slate-700"
        >
          <Spinner :isLoading="isLoading" />
          <span>Load more</span>
        </button>
      </div>
    </div>

    <Transition name="cartMenu">
      <Menu v-if="cartMenu" />
    </Transition>

    <Transition name="notification">
      <Notification v-if="showNotification" />
    </Transition>
  </section>
</template>

<script>
import ProductCard from "./product/Card.vue";
import Menu from "./menu/TheMenu.vue";
import Spinner from "./loader/Spinner.vue";
import Notification from "./notification/Notification.vue";
import { useFilmStore } from "../store/FilmStore";

export default {
  name: "MainContent",
  props: ["cartMenu"],
  components: {
    ProductCard,
    Menu,
    Spinner,
    Notification,
  },
  data() {
    return {
      filmStore: useFilmStore(),
      isLoading: false,
      showNotification: false,
    };
  },
  methods: {
    loadMoreFilms() {
      this.isLoading = true;
      this.filmStore
        .fillPopular()
        .then(() => {
          this.isLoading = false;
        })
        .catch((error) => {
          console.log(error);
          this.isLoading = true;
        });
    },
    handleNotification() {
      this.showNotification = true;

      setTimeout(() => {
        this.showNotification = false;
      }, 3000);
    },
  },
  mounted() {
    this.filmStore.fillPopular();
  },
  computed: {
    popularFilms() {
      return this.filmStore.films.popular;
    },
  },
};
</script>

<style scoped>
.cartMenu-enter-active,
.cartMenu-leave-active {
  transition: opacity 300ms ease;
}

.cartMenu-enter-from,
.cartMenu-leave-to {
  opacity: 0;
}

.notification-enter-active,
.notification-leave-active {
  transition: opacity 300ms ease;
  transform: scale(1);
}

.notification-enter-from,
.notification-leave-to {
  opacity: 0;
  transform: scale(0.95);
}
</style>
