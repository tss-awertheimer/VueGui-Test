<template>
  <div class="order container border rounded bg-light">
    <h1>Single Order</h1>
    <b>Order Id: {{ id }}</b>
    <p>Created: {{ order.createdDate }}</p>
    <div class="adressesContainer">
      <h5>Addresses</h5>
      <div class="addresses">
        <div class="singleAddress bg-white border">
          <b>Shipping</b>
          <p>{{ order.shipAddress }}</p>
        </div>
        <div class="singleAddress bg-white border">
          <b>Billing</b>
          <p>{{ order.billingAddress }}</p>
        </div>
      </div>
    </div>
    <b-button class="d-flex justify-content-end">Back</b-button>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";

export default Vue.extend({
  name: "SingleOrder",
  props: ["id"],

  data() {
    return {
      order: []
    };
  },

  async created() {
    try {
      const response = await axios.get(
        `http://zss-stage-web01.tss-dmz.com:91/netsuiteservice/api/WebOrders/${this.id}`
      );
      this.order = response.data;
    } catch (e) {
      this.errors.push(e);
    }
  }
});
</script>

<style lang="less" scoped>
.order {
  h1 {
    border-bottom: 1px solid rgb(92, 92, 92);
    margin-bottom: 20px;
  }
  margin-top: 20px;
  padding: 20px;
  text-align: left;
}

.adressesContainer {
  margin-bottom: 20px;
}

.addresses {
  display: flex;
}

.singleAddress {
  flex: 1;
  padding: 10px;

  &:first-child {
    margin-right: 10px;
  }
}
</style>
