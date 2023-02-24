<template>
  <main class="body">
    <GeneratedReports class="reports" />
    <report />
  </main>
</template>

<script>
import GeneratedReports from "./components/aside/GeneratedReports.vue";
import Report from "./components/main/Report.vue";
export default {
  components: { Report, GeneratedReports },
};
</script>

<style lang="scss">
@import "@/styles/nullStyles.scss";
body {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 12px;
}

.body {
  height: 100vh;
  padding: 5px;
  background-color: #ecf0ec;
  display: flex;
}

.reports {
  margin-right: 4px;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: rgba(#4e5a66, 0.3);
  }
}
</style>
