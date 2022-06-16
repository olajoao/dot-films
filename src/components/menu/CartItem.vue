<template>
  <div class="flex gap-5">
    <div class="overflow-hidden rounded-md w-20 h-20">
      <img
        class="max-w-full h-auto"
       :src="`http://image.tmdb.org/t/p/w500/${filmInfo.poster_path}`"
        alt="image"
      />
    </div>
    <div class="text-sm flex flex-col justify-between">
      <div>
        <h1 class="font-bold text-slate-600">{{ filmInfo.title }}</h1>
        <p class="text-slate-500">{{ filmInfo.genre_ids[0] }}</p>
      </div>
      <p class="font-bold text-slate-600">R$ 79.90</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CartItem',
  props: ['filmInfo']
}
</script>
