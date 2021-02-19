<template>
  <div class="table-container container" v-if="items && items.length">
    <b-table
      striped
      hover
      v-if="!isOpen"
      :items="this.items"
      :fields="this.fields"
      @row-clicked="item => myRowClickedHandler(item, item.id)"
    >
    </b-table>

    <TableItem :item="selectedItem" />
  </div>
</template>

<script>
import TableItem from "./TableItem.vue";

export default {
  name: "Table",
  components: {
    TableItem
  },
  props: ["items", "fields", "itemVal"],
  isOpen: false,
  selectedItem: {},

  methods: {
    myRowClickedHandler(item, id) {
      this.isOpen = true;
      this.selectedItem = item;
      this.$router.push({ path: `/order/${id}` });
    }
  },

  data() {
    return {
      isOpen: false,
      selectedItem: {}
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
