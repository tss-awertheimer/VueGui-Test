<template>
  <div class="orders">
    <div class="ordersTable" v-if="!isOpen">
      <h1>Orders list page</h1>

      <Table @clicked="onChildClick" :items="orders" :fields="ordersFields" />
    </div>

    <div v-if="isOpen" class="order">
      <b-card
        :title="order.id"
        :sub-title="order.createdDate"
        style="max-width: 20rem;"
        class="mb-2"
      >
        <b-button href="#" variant="primary">Go somewhere</b-button>
      </b-card>
    </div>
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
      order: {},
      errors: [],
      ordersfields: [],
      singleOrderFields: ["id", "createdDate"],
      isOpen: false
    };
  },

  // Fetches orders when the component is created.
  async created() {
    try {
      const response = await axios.get(
        `http://zss-stage-web01.tss-dmz.com:91/netsuiteservice/api/WebOrders`
      );
      this.orders = response.data.items;
    } catch (e) {
      this.errors.push(e);
    }
  },

  methods: {
    async onChildClick(orderId) {
      this.isOpen = true;
      this.$router.push({ path: `/orders/${orderId}` });
      this.order.id = orderId;

      try {
        const response = await axios.get(
          `http://zss-stage-web01.tss-dmz.com:91/netsuiteservice/api/WebOrders/${orderId}`
        );
        this.order = response.data;
      } catch (e) {
        this.errors.push(e);
      }
    }
  }
});
</script>

<style lang="less" scoped>
ul {
  list-style: none;
}
</style>
