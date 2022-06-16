<template>
  <article class="snap-center max-w-[220px] 2xl:shrink-0 mx-auto sm:mx-0 relative transform scale-95 hover:scale-100 duration-200">
    <button class="absolute top-3 right-3 z-10">
      <EmptyHeartIcon class="w-6 h-6  text-white" />
    </button>
    <!--  <button>
      <FullfiledHeartIcon class="w-6 h-6 absolute top-2 right-2 z-10 text-red-500/80" /> 
    </button>
    -->
    <div class="h-72 overflow-hidden">
      <img class="max-w-full h-auto" width="300" height="300" :src="`http://image.tmdb.org/t/p/w500/${filmInfo.poster_path}`" >
    </div>
    <div class="mb-3 mt-1">
      <h1 class="text-slate-300 font-medium">{{ filmInfo.title }}</h1>
      <p class="text-slate-500 text-xs p-0.5 bg-amber-300/80 w-max rounded-sm">{{ filmInfo.genre_ids[0] }}</p>
      
      <h2 class="text-center font-semibold text-slate-200">R$ 79.90</h2>
    </div>
    <button 
      @click="addFilmToCart(filmInfo)"
      class="text-xs tracking-wide w-full py-1.5 bg-indigo-500 text-white font-medium uppercase hover:bg-indigo-600 rounded-md">
      Adicionar
    </button>
  </article>
</template>

<script>
import { HeartIcon as FullfiledHeartIcon } from '@heroicons/vue/solid';
import { HeartIcon as EmptyHeartIcon } from '@heroicons/vue/outline';
import { useCartStore } from '../../store/CartStore';

export default {
  name: 'Card',
  props: ['filmInfo'],
  components: {
    FullfiledHeartIcon,
    EmptyHeartIcon
  },
  data() {
    return {
      cartStore: useCartStore()
    }
  },  
  methods: {
    addFilmToCart(film) {
      this.cartStore.pushItem(film)
      console.log(this.cartStore.cart)
    }
  }
}
</script>