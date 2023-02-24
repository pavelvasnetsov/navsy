<template>
  <div class="tabs">
    <tab-item
      v-for="tab in tabs"
      :key="tab.id"
      :active="selectedTab.id === tab.id"
      @click="setSelectedTab(tab)"
    >
      {{ tab.title }}
    </tab-item>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
import TabItem from "./TabItem.vue";
export default {
  components: { TabItem },
  methods: {
    ...mapMutations({
      setSelectedTab: "report/setSelectedTab",
    }),
  },
  computed: {
    ...mapState({
      tabs: (state) => state.report.tabs,
      selectedTab: (state) => state.report.selectedTab,
    }),
  },
  mounted() {
    this.setSelectedTab(this.tabs[0]);
  },
};
</script>

<style lang="scss" scoped>
.tabs {
  display: flex;
  background-color: #e0dfe3;
}
</style>