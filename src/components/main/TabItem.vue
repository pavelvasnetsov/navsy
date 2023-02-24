<template>
  <div class="tab" :class="{ tab_active: active }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    active: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.tab {
  padding: 7px;
  color: white;
  background-color: #6a747a;
  cursor: pointer;

  &_active {
    background-color: white;
    color: #6a747a;
    cursor: default;
  }
}
</style>