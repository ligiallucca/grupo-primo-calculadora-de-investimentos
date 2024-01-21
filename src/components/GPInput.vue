<script lang="ts" setup>
defineProps({
  modelValue: {
    type: String,
    default: "",
  },
});
</script>

<template>
    <input
      type="text"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target?.value)"
      v-bind="$attrs"
    />
</template>


<style lang="scss" scoped>
@import '../assets/main.scss';
input {
  // border: none;
  color: $dark;
  outline: none;
  font-size: 48px;
  font-weight: 700;
  background-color: transparent;
}
</style>
