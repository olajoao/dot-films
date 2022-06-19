import { defineStore } from "pinia";
import { apiKey } from "../main";
import request from "../http";

export const useCartStore = defineStore("useCartStore", {
  state: () => {
    return {
      cart: [],
      prices: []
    };
  },
  actions: {
    pushItem(item, price) {
      this.cart.push(item);
      this.prices.push(price);
    },
    emptyCart() {
      this.cart = [];
      this.prices = [];
    },
    removeFilm(item, price) {
      this.cart = this.cart.filter(film => film.id !== item.id);
      this.prices = this.prices.filter(value => value !== price);
    }
  },
});
