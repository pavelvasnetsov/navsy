<template>
  <aside class="aside">
    <div class="aside__header header">
      <div class="header__title">Сформированные отчеты</div>
      <button class="header__btn">
        <icon-arrow />
      </button>
    </div>
    <div class="aside__create create">
      <button class="create__btn">
        <div class="create__icon">
          <icon-plus />
        </div>
        <div class="create__title">Создать отчет</div>
      </button>
    </div>
    <reports-list />
  </aside>
</template>

<script>
import ReportsList from "./ReportsList.vue";
export default {
  components: { ReportsList },
};
</script>

<style lang="scss" scoped>
.aside {
  background-color: white;
  height: 100%;
  width: 300px;

  &__header {
    background-color: #4e5a66;
    color: white;
    height: 30px;
    padding: 0 10px;
  }
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  &__btn {
    background-color: #4e5a66;
    width: 20px;
  }
}
.create {
  &__btn {
    display: flex;
    padding: 5px;
    color: #1d96db;
    background-color: white;
  }

  &__icon {
    padding-right: 15px;
  }

  &__title {
    padding-top: 3px;
  }
}
</style>