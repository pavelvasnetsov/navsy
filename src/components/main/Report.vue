<template>
  <div class="report">
    <report-header>{{ title }}</report-header>
    <report-tabs />
    <report-block v-model="showGraph" :title="'Расход топлива'">
      <vue-echarts
        class="chart1"
        :option="{ ...option, legend: { show: false } }"
      />
      <vue-echarts
        class="chart2"
        :option="{
          ...option,
          yAxis: { show: false },
          xAxis: { ...option.xAxis, name: '' },
        }"
      />
    </report-block>
    <report-block v-model="showTable1" :title="'Заправки'"
      ><table-1
    /></report-block>
    <report-block v-model="showTable2" :title="'Данные'"
      ><table-1
        :subtitle="'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur eum saepe, blanditiis soluta ipsa possimus! Hic, voluptatibus? Molestias quidem rerum facilis inventore eum, fugit voluptate officiis sint, blanditiis aspernatur autem.'"
    /></report-block>
    <report-block v-model="showTable3" :title="'Статистические данные'"
      ><table-1
        :subtitle="'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur eum saepe, blanditiis soluta ipsa possimus! Hic, voluptatibus? Molestias quidem rerum facilis inventore eum, fugit voluptate officiis sint, blanditiis aspernatur autem.'"
    /></report-block>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { ref, computed } from "vue";
import ReportBlock from "./ReportBlock.vue";
import ReportHeader from "./ReportHeader.vue";
import ReportTabs from "./ReportTabs.vue";
import { VueEcharts } from "vue3-echarts";
import Table1 from "./tabels/table1.vue";
export default {
  components: {
    ReportHeader,
    ReportTabs,
    ReportBlock,
    VueEcharts,
    Table1,
  },
  data() {
    return {
      showGraph: true,
      showTable1: true,
      showTable2: true,
      showTable3: true,
    };
  },
  setup() {
    const store = useStore();
    const option = ref({
      legend: {
        name: "Бак",
        icon: "square",
        bottom: 0,
      },
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: computed(() => store.state.report.run),
        name: "Пробег, км",
        nameLocation: "end",
        nameTextStyle: {
          align: "right",
          verticalAlign: "top",
          padding: [30, 0, 0, 0],
        },
      },
      yAxis: {
        type: "value",
        name: "Уровень топлива %",
        nameRotate: 90,
        nameLocation: "middle",
        nameGap: 50,
        nameTextStyle: {
          align: "left",
          padding: [0, 0, 0, -30],
        },
      },
      series: [
        {
          data: computed(() => store.state.report.volume),
          type: "line",
          areaStyle: {},
          name: "Бак",
        },
      ],
    });

    return {
      option,
      title: computed(() => store.state.reports.selectedReport.title),
    };
  },
};
</script>

<style lang="scss" scoped>
.report {
  background-color: white;
  width: 100%;
  height: 100%;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: rgba(#4e5a66, 0.3);
  }
}

.chart1 {
  min-width: 100%;
  height: 300px;
}
.chart2 {
  min-width: 100%;
  height: 100px;
}
</style>