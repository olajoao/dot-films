<template>
  <form
    @submit.prevent="handleSubmit"
    id="checkoutForm"
    class="grid grid-cols-1 md:grid-cols-2 flex-wrap gap-8"
  >
    <label for="name" class="col-span-2">
      <p class="uppercase text-xs text-slate-400 font-bold">Name</p>
      <input
        type="text"
        class="w-full py-1 px-2 rounded-md bg-neutral-700/50 border-neutral-700/50 focus:border-white focus:bg-neutral-700 text-slate-200 mt-1 shadow shadow-neutral-700/60"
        required
      />
    </label>
    <label for="cpf" class="col-span-2 md:col-span-1">
      <p class="uppercase text-xs text-slate-400 font-bold">CPF</p>
      <input
        type="number"
        class="w-full py-1 px-2 rounded-md bg-neutral-700/50 border-neutral-700/50 focus:border-white focus:bg-neutral-700 text-slate-200 mt-1 shadow shadow-neutral-700/60"
        required
      />
    </label>
    <label for="phone" class="col-span-2 md:col-span-1">
      <p class="uppercase text-xs text-slate-400 font-bold">Phone</p>
      <input
        type="tel"
        class="w-full py-1 px-2 rounded-md bg-neutral-700/50 border-neutral-700/50 focus:border-white focus:bg-neutral-700 text-slate-200 mt-1 shadow shadow-neutral-700/60"
        required
      />
    </label>
    <label for="email" class="col-span-2">
      <p class="uppercase text-xs text-slate-400 font-bold">Email</p>
      <input
        type="email"
        class="w-full py-1 px-2 rounded-md bg-neutral-700/50 border-neutral-700/50 focus:border-white focus:bg-neutral-700 text-slate-200 mt-1 shadow shadow-neutral-700/60"
        required
      />
    </label>
    <div class="flex flex-col md:flex-row col-span-2 gap-8">
      <label for="cep" class="w-full md:w-52">
        <p class="uppercase text-xs text-slate-400 font-bold">CEP</p>
        <input
          type="number"
          class="w-full py-1 px-2 rounded-md bg-neutral-700/50 border-neutral-700/50 focus:border-white focus:bg-neutral-700 text-slate-200 mt-1 shadow shadow-neutral-700/60"
          required
        />
      </label>
      <label for="address" class="w-full col-span-2 md:col-auto">
        <p class="uppercase text-xs text-slate-400 font-bold">Address</p>
        <input
          type="text"
          class="w-full py-1 px-2 rounded-md bg-neutral-700/50 border-neutral-700/50 focus:border-white focus:bg-neutral-700 text-slate-200 mt-1 shadow shadow-neutral-700/60"
          required
        />
      </label>
    </div>
    <label for="city" class="col-span-2 md:col-span-1">
      <p class="uppercase text-xs text-slate-400 font-bold">City</p>
      <input
        type="text"
        class="w-full py-1 px-2 rounded-md bg-neutral-700/50 border-neutral-700/50 focus:border-white focus:bg-neutral-700 text-slate-200 mt-1 shadow shadow-neutral-700/60"
        required
      />
    </label>
    <label for="uf" class="col-span-2 md:col-span-1">
      <p class="uppercase text-xs text-slate-400 font-bold">State</p>
      <input
        type="text"
        class="w-full py-1 px-2 rounded-md bg-neutral-700/50 border-neutral-700/50 focus:border-white focus:bg-neutral-700 text-slate-200 mt-1 shadow shadow-neutral-700/60"
        required
      />
    </label>
  </form>
</template>

<script>
export default {
  name: "CheckoutForm",
  methods: {
    handleSubmit() {
      this.$emit("showCheckoutModal", true);
    },
  },
};
</script>
