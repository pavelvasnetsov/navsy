<template>
  <div class="header">
    <div class="header__btns">
      <button class="header__btn">
        <icon-loading />
      </button>
      <button disabled class="header__btn">
        <icon-paper />
      </button>
      <button class="header__btn">
        <icon-printer />
      </button>
    </div>
    <div class="header__title">
      <div class="header__text">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.header {
  color: white;
  background-color: #4f5a66;
  height: 30px;
  padding: 0 10px;

  display: flex;

  &__btns {
    display: flex;
    align-items: center;
  }

  &__btn {
    background-color: #2c91c6;
    padding: 2px 7px;

    &[disabled] {
      background-color: #6c727e;
    }
  }

  &__title {
    width: 100%;
    text-align: center;
  }

  &__text {
    line-height: 30px;
  }
}
</style>