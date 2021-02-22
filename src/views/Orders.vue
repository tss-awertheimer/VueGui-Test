<template>
  <div class="orders">
    <div class="ordersTable" v-if="!isOpen">
      <h1>Orders list page</h1>

      <Table @clicked="onChildClick" :items="orders" :fields="fields" />
    </div>

    <div v-if="isOpen" class="order">
      <h1>Individual Order Page</h1>
      <h3>{{ order.id }}</h3>
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
      order: {
        id: ""
      },
      errors: [],
      fields: [],
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
    onChildClick(orderId) {
      this.isOpen = true;
      // this.itemId = item.id;
      // this.$router.push({ path: `/order/${item.id}` });
      this.order.id = orderId;
    }
  }
});
</script>

<style lang="less" scoped>
ul {
  list-style: none;
}
</style>
