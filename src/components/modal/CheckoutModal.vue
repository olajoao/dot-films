<template>
  <section
    @click.self="closeModal"
    class="inset-0 fixed overflow-hidden flex justify-center items-center bg-neutral-500/80"
  >
    <div class="p-10 rounded-md text-center bg-slate-50 h-max mx-1 md:mx-0 shadow shadow-md-neutral-700">
      <h1 class="text-lg md:text-2xl font-semibold text-slate-800">
        Obrigado Hisoka Morow!
      </h1>
      <p class="my-6 md:text-lg text-slate-700">
        Sua compra foi finalizada com sucesso
      </p>
      <router-link
        to="/"
        class="md:text-lg text-center w-full bg-emerald-500 text-white py-1 px-4 rounded-md hover:bg-emerald-600"
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
