<template>
  <tr>
    <td-component v-for="(cellData, index) in rowData" :cell-data="cellData" :cell-index="index" :row-index=rowIndex></td-component>
  </tr>
</template>

<script>
import TdComponent from './TdComponent';

export default {
  components: {
    TdComponent
  },
  data() {
    return {
      parent: 'im your father'
    }
  },
  props: {
    rowData: Array,
    rowIndex: Number
  }
}
</script>