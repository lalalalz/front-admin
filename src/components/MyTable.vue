<template>
  <div>
    <el-table
      :data="tableData"
      :default-sort="sortConfig"
      style="width: 100%; height: 100%">
      <el-table-column
        v-for="(column, index) in columns"
        :sortable="isSortable(index)"
        :fixed="isFixable(index)"
        :prop="column"
        :label="column"
        :key="index"
        >
      </el-table-column>
      <el-table-column
        fixed="right"
        label="Operations">
        <template slot-scope="scope">
          <el-button
            @click.native.prevent="deleteRow(scope.$index, tableData)"
            type="text"
            size="small">
            Remove
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  props: {
    tableData: Array,
    columns: Array,
    sortConfig: Object
  },
  methods: {
    isSortable(index) {
      return index === 0;
    },
    isFixable(index) {
      return index === 0;
    },
  }
}
</script>
