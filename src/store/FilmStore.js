import { defineStore } from "pinia";
import { apiKey } from "../main";
import request from "../http";

export const useFilmStore = defineStore("useFilmStore", {
  state: () => {
    return {
      films: {
        popular: [],
      },
      pageNumber: 1
    };
  },

  actions: {
    async fillPopular() {
     return request
        .get(`/movie/popular?api_key=${apiKey}&page=${this.pageNumber}`)
        .then(({ data }) => {
          this.films.popular = this.films.popular.concat(data.results);
          this.pageNumber++;
        })
    },
    search(filmName) {
      if(!filmName) {
        this.pageNumber = 1;
        this.films.popular = [];
        this.fillPopular();
      }

      request.get(`/search/movie?api_key=${apiKey}`, {
        params: {
          query: filmName
        }
      })
        .then(({data}) => this.films.popular = data.results);
    }
  }
});
