<template>
  <div class="orders">
    <router-view />
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "Orders",
  components: {},
  data() {
    return {
      errors: []
    };
  },
  methods: {
    onChildClick(orderId) {
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
