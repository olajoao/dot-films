<template>
  <div
    class="border-x border-slate-400 w-5 h-5 rounded-full bg-slate-800/60"
    :class="{ spinner: isLoading }"
  ></div>
</template>
<script>
export default {
  name: "Spinner",
  props: ["isLoading"],
};
</script>
<style>
.spinner {
  animation: spin infinite 800ms ease;
}

@keyframes spin {
  0% {
    transform: rotate(0);
  }
  25% {
    transform: rotate(90deg);
  }
  50% {
    transform: rotate(180deg);
  }
  75% {
    transform: rotate(270deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
