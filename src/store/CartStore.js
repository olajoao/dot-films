import { defineStore } from "pinia";
import request from "../http";

const apiKey = "10a06b62438ca5d322f7859e44a15aa5";

export const useCartStore = defineStore("useCartStore", {
  state: () => {
    return {
      cart: [],
    };
  },
  actions: {
    pushItem(item) {
      this.cart.push(item);
    },
  },
});
