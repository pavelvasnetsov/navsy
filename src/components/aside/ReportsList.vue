<template>
  <div class="reports">
    <div class="reports__list">
      <reports-item
        v-for="report in reports"
        :key="report.id"
        :title="report.title"
        :subtitle="report.subtitle"
        :selected="selectedReport.id === report.id"
        @click="setSelectedReport(report)"
      />
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
import ReportsItem from "./ReportsItem.vue";
export default {
  components: { ReportsItem },
  methods: {
    ...mapMutations({
      setSelectedReport: "reports/setSelectedReport",
    }),
  },
  computed: {
    ...mapState({
      reports: (state) => state.reports.reports,
      selectedReport: (state) => state.reports.selectedReport,
    }),
  },
  mounted() {
    this.setSelectedReport(this.reports[0]);
  },
};
</script>

<style lang="scss" scoped>
</style>