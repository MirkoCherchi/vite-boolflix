import { reactive } from "vue";

export const store = reactive({
  searchFilm: "",
  searchResult: [],
  urlBase: "https://api.themoviedb.org/3/search/movie?api_key=",
  apiKey: "87ea05489a3bdfb45e785641011fc7f1",
  lenguage: "",
});
