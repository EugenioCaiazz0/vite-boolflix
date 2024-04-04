import { reactive } from "vue";

export const store = reactive ({
    apiUrl: `https://api.themoviedb.org/3/search`,
    apiParams: {
        api_key: /**/ok,
        language: `it-IT`,
        query: `Matrix`
    },
    listMovies:[],
    listSerie:[]
})