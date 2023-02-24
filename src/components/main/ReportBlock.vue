<template>
  <div class="block">
    <div class="block__header" @click="$emit('update:modelValue', !modelValue)">
      <div class="block__icon" :class="{ block__icon_closed: !modelValue }">
        <icon-arrow />
      </div>
      <div class="block__title">{{ title }}</div>
    </div>
    <slot v-if="modelValue"></slot>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: Boolean,
    },
    title: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
.block {
  margin-bottom: 20px;
  &__header {
    background-color: #acb1b5;
    color: white;
    height: 30px;
    padding: 0 5px;
    display: flex;
  }

  &__icon {
    width: 25px;
    transform: rotateZ(-90deg);
    transition: 0.5s;

    &_closed {
      transform: rotateZ(90deg);
    }
  }

  &__title {
    color: white;
    width: 100%;
    text-align: center;
    line-height: 30px;
  }
}
</style>