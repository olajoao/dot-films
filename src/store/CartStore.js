import { defineStore } from "pinia";
import request from "../http";

const apiKey = "10a06b62438ca5d322f7859e44a15aa5";

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
