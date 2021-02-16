<template>
  <div class="orders">
    <h1>This is an orders page</h1>

    <Table :items="starships" :fields="fields" />
  </div>
</template>

<script>
import axios from "axios";
import Vue from "vue";
import Table from "../components/Table";

export default Vue.extend({
  name: "Orders",
  components: {
    Table
  },

  data() {
    return {
      starships: [],
      errors: [],
      fields: ["name", "model", "manufacturer", "cost_in_credits"]
    };
  },

  // Fetches starships when the component is created.
  async created() {
    try {
      const response = await axios.get(`https://swapi.dev/api/starships`);
      this.starships = response.data.results;

      console.log(response);
    } catch (e) {
      this.errors.push(e);
    }
  }
});
</script>

<style lang="less" scoped>
ul {
  list-style: none;
}
</style>
