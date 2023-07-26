<template>
  <div class="float-sm-right" style="margin: 20px 10px 20px 0px">
    <el-button :type="buttonType" @click="toggleDialogFormVisible()">{{buttonName}}</el-button>

    <el-dialog :title="formTitle" :visible.sync="dialogFormVisible" :before-close="toggleDialogFormVisible">
      <el-form :model="form">
        <el-form-item label="Promotion name" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="Zones" :label-width="formLabelWidth">
          <el-select v-model="form.region" placeholder="Please select a zone">
            <el-option label="Zone No.1" value="shanghai"></el-option>
            <el-option label="Zone No.2" value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>
<script>
export default {
  props: {
    formTitle: {
      type: String,
      default: "NONE"
    },
    buttonName: {
      type: String,
      default: "NONE"
    },
    buttonType: {
      type: String,
      default: "primary"
    }
  },
  methods: {
    toggleDialogFormVisible() {
      this.dialogFormVisible = !this.dialogFormVisible;
    },
  },
  data() {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      dialogFormVisible: false,
      formLabelWidth: '120px'
    };
  }
};
</script>
