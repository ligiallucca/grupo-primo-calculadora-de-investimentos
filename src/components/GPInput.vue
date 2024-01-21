<script lang="ts" setup>
import { vMaska } from 'maska';
defineProps({
  modelValue: {
    type: String,
    default: "",
  },
  dataKind: String

});
</script>

<template>
    <div class="input-wrapper">
      <span v-if="dataKind !== 'month'">R$</span>
      <input
        type="text"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target?.value)"
        v-bind="$attrs"
        :class="dataKind === 'month' ? 'input-month' : ''"
      />
      <span v-if="dataKind === 'month'">meses</span>
    </div>
</template>


<style lang="scss" scoped>
@import '../assets/main.scss';
.input-wrapper {
  color: $dark;
  display: flex;
  font-size: 48px;
  font-weight: 700;
  align-items: baseline;
  justify-items: flex-end;
  input {
    border: none;
    outline: none;
    font-size: 48px;
    font-weight: 700;
    margin-left: 4px;
    background-color: transparent;
  }
  .input-month {
    width: 100px;
  }
}
</style>

