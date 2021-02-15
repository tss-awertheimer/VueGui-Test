<template>
  <div class="orders">
    <h1>This is an orders page</h1>
    <ul v-if="starships && starships.length">
      <li v-for="starship of starships" :key="`${starship}-${index}`">
        <p>
          <strong>{{ starship.name }}</strong>
        </p>
        <p>{{ starship.body }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
import Vue from "vue";

export default Vue.extend({
  name: "Orders",
  components: {},

  data() {
    return {
      starships: [],
      errors: []
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
