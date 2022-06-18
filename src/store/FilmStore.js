import { defineStore } from "pinia";
import request from "../http";

const apiKey = "10a06b62438ca5d322f7859e44a15aa5";

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
    searchFilm(filmName) {

      if(!filmName) {
        this.pageNumber = 1;
        this.films.popular = [];
        this.fillPopular();
      };

      const results = this.films.popular.filter(film => {
        let filmTitle = film.title.toLowerCase();
        let position = filmTitle.indexOf(filmName.toLowerCase()); 
        if(position >= 0) return film;
      });

      this.films.popular = results;
    }
  },
});
