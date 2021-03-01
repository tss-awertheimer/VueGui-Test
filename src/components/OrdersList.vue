<template>
  <div class="orderList">
    <h1>Orders List</h1>
    <!-- <div v-if="this.isloading"><b-spinner label="Loading..."></b-spinner></div> -->
    <div class="table-container container" v-if="orders && orders.length">
      <b-table
        striped
        hover
        :items="this.orders"
        :fields="this.fields"
        @row-clicked="order => onClick(order.id)"
        class="border"
      >
      </b-table>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "OrdersList",
  components: {},
  methods: {
    onClick(id) {
      this.$router.push({ name: `SingleOrder`, params: { id: id } });
    }
  },
  data() {
    return {
      orders: [],
      fields: [
        { key: "id", label: "Order Id" },
        { key: "href", label: "Link" }
      ],
      isloading: true
    };
  },
  async mounted() {
    try {
      const response = await axios
        .get(
          `http://zss-stage-web01.tss-dmz.com:91/netsuiteservice/api/WebOrders`
        )
        .then((this.isLoading = false));
      this.orders = response.data.items;
    } catch (e) {
      this.errors.push(e);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
