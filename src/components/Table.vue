<template>
  <div class="table-container container" v-if="items && items.length">
    <b-table
      striped
      hover
      v-if="!isOpen"
      :items="this.items"
      :fields="this.fields"
      @row-clicked="myRowClickedHandler()"
    >
    </b-table>

    <TableItem v-else :item="item" />
  </div>
</template>

<script>
import TableItem from "./TableItem";

export default {
  name: "Table",
  components: {
    TableItem
  },
  props: ["items", "fields", "itemVal"],
  isOpen: false,

  methods: {
    myRowClickedHandler() {
      this.isOpen = true;
    }
  },

  data() {
    return {
      isOpen: false
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
