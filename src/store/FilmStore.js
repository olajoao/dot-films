import { defineStore } from "pinia";
import request from "../http";

const apiKey = "10a06b62438ca5d322f7859e44a15aa5";

export const useFilmStore = defineStore("useFilmStore", {
  state: () => {
    return {
      films: {
        popular: [],
        topRated: [],
      },
    };
  },

  actions: {
    fillPopular() {
      request
        .get(`/movie/popular?api_key=${apiKey}`)
        .then(({ data }) => {
          this.films.popular = data.results;
        })
        .catch((error) => console.error(error));
    },
  },
});
