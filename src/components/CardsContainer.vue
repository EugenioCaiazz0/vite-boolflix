<script>
import store from "./data/store";
import Card from "./components/Card.vue";
export default {
    components:{
        Card
    },
    props:{
        type:string,
        title: string,
        original_title: string,
        language: string,
        vote: string
    },
    data(){
        return{
            store
        }
    },
    computed:{
        title(){
            return this.type === `Movie` ? `Film` : `Serie Tv`
        }
    }
}
</script>

<template>
  <div class="container text-center my-5">
        <h3> {{ title }}</h3>
        <div class="row row-cols-4 ">
            <Card
            v-for="card in store[type]"
            :key="card.id"
            :cardObj="card"
            ></Card>
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>