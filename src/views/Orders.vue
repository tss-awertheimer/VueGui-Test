<template>
  <div class="orders">
    <div class="ordersTable" v-if="!isOpen">
      <h1>Orders list page</h1>

      <Table @clicked="onChildClick" :items="orders" :fields="fields" />
    </div>

    <div v-if="isOpen">
      <router-view id="order.id"></router-view>
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
      errors: [],
      fields: [
        { key: "id", label: "Order Id" },
        { key: "href", label: "Link" }
      ],
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
      console.log(orderId);
      this.isOpen = true;
      this.$router.push({ name: `SingleOrder`, params: { id: orderId } });
    }
  }
});
</script>

<style lang="less" scoped>
ul {
  list-style: none;
}
</style>
