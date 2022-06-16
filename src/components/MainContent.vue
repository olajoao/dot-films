<template>
  <section class="main__section--height p-10 bg-neutral-900">
    
    <div>
      <h1 class="text-xl text-white font-bold ml-2">Popular</h1>
      <div class="grid 2xl:flex 2xl:nowrap 2xl:max-w-screen snap-proximity snap-x 2xl:overflow-x-auto gap-1 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 pb-3">
        <ProductCard 
          v-for="film in popularFilms" :key="film.id"
          :filmInfo="film"
        />
      </div>
    </div>

    <Transition name="cartMenu">
      <Menu v-if="cartMenu" />
    </Transition>
  </section>
</template>

<script>
import ProductCard from './product/Card.vue';
import Menu from './menu/TheMenu.vue';
import { useFilmStore } from '../store/FilmStore';

export default {
  name: 'MainContent',
  props: ['cartMenu'],
  components: {
    ProductCard,
    Menu
  },
  data() {
    return {
      filmStore: useFilmStore(),
    }
  },
  mounted() { 
    this.filmStore.fillPopular()
    console.log(this.popularFilms)
  },
  computed: {
    popularFilms() {
      return this.filmStore.films.popular
    }
  }
}
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

.main__section--height {
  min-height: calc(100vh - 56px);
}
</style>