<template>
  <div class="orders">
    <h1>This is an orders page</h1>

    <Table :items="orders" :fields="fields" />
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
      orders: [],
      errors: [],
      fields: [],
      selectedOrder: ""
    };
  },

  // Fetches orders when the component is created.
  async created() {
    try {
      const response = await axios.get(
        `http://zss-stage-web01.tss-dmz.com:91/netsuiteservice/api/WebOrders`
      );
      this.orders = response.data.items;

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
