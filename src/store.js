import { reactive } from "vue";
import config from "./config";

export const store = reactive({
  searchKey: "",
  searchResultFilm: [],
  searchResultTv: [],
  config,
});
