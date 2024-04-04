<script>

import axios from "axios";
import store from "./data/store";
import SearchBar from "./components/SearchBar.vue";
import CardsContainer from "./components/CardsContainer.vue";
export default {
  components: {
    SearchBar,
    CardsContainer,
  },
  data() { 
    return {
      store
    };
  },
  methods: {
   getMovies(){
    axios.get(store.apiUrl + `movie`,{
        params: store.apiParams
      })
      .then( res => {
        console.log(res.data.results);
        store.listMovies = res.data.results;
      })
   },
   getSeries(){
    axios.get(store.apiUrl + `tv`,{
        params: store.apiParams
      })
      .then( res => {
        console.log(res.data.results);
        store.listSeries = res.data.results;
      })
   }
  },

  mounted() {
    this.getMovies(),
    this.getSeries()
  }
}

</script>

<template>
    
    <CardsContainer type="movie" />
    <CardsContainer type="tv" />

</template>

<style lang="scss" scoped>
@use "src/style.css";
</style>
