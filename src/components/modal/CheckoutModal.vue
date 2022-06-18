<template>
  <section
    @click.self="closeModal"
    class="inset-0 fixed overflow-hidden flex justify-center items-center bg-neutral-300/80"
  >
    <div class="p-10 rounded-md text-center bg-slate-50 h-full pt-20 md:pt-0 md:h-max">
      <h1 class="text-2xl font-semibold text-slate-800">
        Obrigado Hisoka Morow!
      </h1>
      <p class="my-6 text-lg text-slate-700">
        Sua compra foi finalizada com sucesso
      </p>
      <router-link
        to="/"
        class="text-lg text-center w-full bg-emerald-500 text-white py-1 px-4 rounded-md hover:bg-emerald-600"
      >
        Ir para loja
      </router-link>
    </div>
  </section>
</template>
<script>
export default {
  name: "CheckoutModal",
  props: ["closeModal"],
};
</script>
