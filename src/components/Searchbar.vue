<script>
export default {
  data() {
    return {
      store
    };
  },
};
</script>

<template>
  <div class="text-center my-5 container d-flex">
    <input
    v-model.trim="store.apiParams.query"
    class="form-control me-3 "
    placeholder="Cerca un film"
    type="text">

    <button @click=$emit("startSearch") class="btn btn-primary"> Cerca </button>
  </div>
</template>

<style lang="scss" scoped>
</style>