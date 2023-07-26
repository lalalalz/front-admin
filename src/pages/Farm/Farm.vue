<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-xl-3 col-md-6">
          <stats-card>
            <div slot="header" class="icon-warning">
              <i class="nc-icon nc-chart text-warning"></i>
            </div>
            <div slot="content">
              <p class="card-category">Capacity</p>
              <h4 class="card-title">105GB</h4>
            </div>
            <div slot="footer">
              <i class="fa fa-refresh"></i>Updated now
            </div>
          </stats-card>
        </div>

        <div class="col-xl-3 col-md-6">
          <stats-card>
            <div slot="header" class="icon-success">
              <i class="nc-icon nc-light-3 text-success"></i>
            </div>
            <div slot="content">
              <p class="card-category">Revenue</p>
              <h4 class="card-title">$1,345</h4>
            </div>
            <div slot="footer">
              <i class="fa fa-calendar-o"></i>Last day
            </div>
          </stats-card>
        </div>

        <div class="col-xl-3 col-md-6">
          <stats-card>
            <div slot="header" class="icon-danger">
              <i class="nc-icon nc-vector text-danger"></i>
            </div>
            <div slot="content">
              <p class="card-category">Errors</p>
              <h4 class="card-title">23</h4>
            </div>
            <div slot="footer">
              <i class="fa fa-clock-o"></i>Last day
            </div>
          </stats-card>
        </div>

        <div class="col-xl-3 col-md-6">
          <stats-card>
            <div slot="header" class="icon-info">
              <i class="nc-icon nc-favourite-28 text-primary"></i>
            </div>
            <div slot="content">
              <p class="card-category">Followers</p>
              <h4 class="card-title">+45</h4>
            </div>
            <div slot="footer">
              <i class="fa fa-refresh"></i>Updated now
            </div>
          </stats-card>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <el-card class="strpied-tabled-with-hover"
                   body-classes="table-full-width table-responsive"
          >
            <MyTable
              :tableData="tableData"
              :columns="columns"
              :sortConfig="sortConfig"
            />
            <Dialog></Dialog>
            <Dialog></Dialog>
          </el-card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import LTable from '@/components/Table.vue'
  import Card from '@/components/Cards/Card.vue'
  import {mapActions, mapState} from "vuex";
  import MyTable from "@/components/MyTable";
  import Overview from "@/pages/Overview";
  import StatsCard from "@/components/Cards/StatsCard";
  import Dialog from "@/components/Dialog/Dialog";

  export default {
    components: {
      Dialog,
      Overview,
      MyTable,
      LTable,
      Card,
      StatsCard
    },
    beforeCreate() {
      this.$store.dispatch("initTable");
    },
    computed: {
      ...mapState({
        tableData: state => state.farm.tableData,
        columns: state => state.farm.columns,
        sortConfig: state => state.farm.sortConfig,
      }),
    },
    data() {
      return {}
    },
  }
</script>
<style>

</style>
