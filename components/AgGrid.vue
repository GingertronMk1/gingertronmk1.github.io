<template>
  <AgGridVue v-bind="$attrs" />
</template>
<script>
// This is literally just to make ag grid universally accessible
import { AgGridVue } from "ag-grid-vue";

export default {
  components: { AgGridVue },
};
</script>
