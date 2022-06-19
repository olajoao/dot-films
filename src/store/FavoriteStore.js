import { defineStore } from "pinia";
import { apiKey } from "../main";
import request from "../http";


export const useFavoriteStore = defineStore('useFavoriteStore', {
  state: () => {
    return {
      favorites: []
    }
  },
  actions: {
    addFavorite(film) {
      this.favorites.push(film);
    }
  }
})