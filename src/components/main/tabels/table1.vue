<template>
  <table class="table">
    <thead>
      <tr>
        <th>N</th>
        <th>Время</th>
        <th>Заправка</th>
        <th>Объем %</th>
        <th>Начальный объем %</th>
        <th>Конечный объем %</th>
        <th>Оплата</th>
        <th>Адрес</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="refill in refills" :key="refill.id">
        <td class="ceil center">{{ refill.id }}</td>
        <td class="ceil center">{{ refill.time }}</td>
        <td class="ceil center">{{ refill.refill }}</td>
        <td class="ceil right">{{ refill.volume }}</td>
        <td class="ceil right">{{ refill.startVolume }}</td>
        <td class="ceil right">{{ refill.endVolume }}</td>
        <td class="ceil right">{{ refill.sum }}</td>
        <td class="ceil">{{ refill.address }}</td>
      </tr>
    </tbody>
  </table>
  <div v-if="subtitle" class="subtitle">{{ subtitle }}</div>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: {
    subtitle: {
      type: String,
      default: "",
    },
  },
  computed: {
    ...mapState({
      refills: (state) => state.report.refills,
    }),
  },
};
</script>

<style lang="scss" scoped>
.table {
  width: 100%;
  border-bottom: 1px solid #adb2bd;

  thead {
    background: #e1e1e1;
    th {
      height: 40px;
      border-left: 1px solid #adb2bd;
      color: gray;
      &:first-child {
        border: none;
      }
    }
  }

  tr {
    display: grid;
    grid-template-columns: 1fr 3fr repeat(5, 2fr) 3fr;
  }
}

.center {
  text-align: center;
}
.right {
  text-align: right;
}
.ceil {
  border-left: 1px solid #adb2bd;
  padding: 2px 5px;
  &:first-child {
    border: none;
  }
}

.subtitle {
  padding: 20px;
  padding-bottom: 0;
  color: gray;
}
</style>