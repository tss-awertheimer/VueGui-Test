<template>
  <div class="table-container container" v-if="items && items.length">
    <b-table
      striped
      hover
      :items="this.items"
      :fields="this.fields"
      @row-clicked="item => onClick(item.id)"
    >
    </b-table>
  </div>
</template>

<script>
export default {
  name: "Table",
  components: {},
  props: ["items", "fields", "itemVal"],
  isOpen: false,
  methods: {
    onClick(id) {
      this.$emit("clicked", id);
    }
  },
  data() {
    return {
      isOpen: false,
      itemId: {}
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
