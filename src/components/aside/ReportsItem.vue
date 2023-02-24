<template>
  <div class="report" :class="{ report_active: selected }">
    <div class="report__info">
      <div class="report__title">
        {{ title }}
      </div>
      <div class="report__subtitle">
        {{ subtitle }}
      </div>
    </div>
    <div v-if="selected" class="report__btns">
      <button>PDF</button>
      <button>
        <icon-gear class="btns__gear" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    selected: {
      type: Boolean,
    },
  },
};
</script>

<style lang="scss" scoped>
.report {
  color: gray;
  border-bottom: 1px solid #efefef;
  padding: 5px;
  cursor: pointer;

  display: flex;
  justify-content: space-between;

  &:hover {
    background-color: rgba($color: #000000, $alpha: 0.05);
  }

  &_active {
    color: white;
    background-color: #1e98d9;
    cursor: default;

    &:hover {
      background-color: #1e98d9;
    }
  }

  &__title {
    padding-bottom: 5px;
    font-size: 11px;
  }

  &__subtitle {
    font-size: 10px;
  }

  &__btns {
    button {
      font-size: 10px;
      background-color: #1e98d9;
      color: white;
      margin-left: 3px;
      width: 25px;
      height: 25px;
      border: 1px solid white;
      border-radius: 50%;
      text-align: center;
      line-height: 25px;
    }
  }
}
.btns {
  &__gear {
    position: relative;
    top: 3px;
  }
}
</style>