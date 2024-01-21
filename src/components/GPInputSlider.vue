<script lang="ts" setup>
defineProps({
  modelValue: {
    type: String,
    default: "",
  },
  label: String,
  dataKind: String
});


</script>

<template>
    <label>{{ label }}</label>
    <input
      v-if="dataKind === 'month'"
      type="range"
      min="24"
      max="240"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target?.value)"
      v-bind="$attrs"
    />

    <input
      v-else
      type="range"
      min="100"
      max="1000000"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target?.value)"
      v-bind="$attrs"
    />

</template>
<style lang="scss" scoped>
@import '../assets/main.scss';
label {
  color: $dark;
  font-size: 24px;
  margin-bottom: 10px;
}
.gp-slider {
  width: 100%;
}

input[type="range"] {
  margin-right: 15px;
  height: 7px;
  border-radius: 5px;
  accent-color: $green;
  border: none;

}

input[type="range"]::-webkit-slider-thumb {
  height: 20px;
  width: 20px;
  border-radius: 50%;
  border: none;
  background: transparent;
}

input[type=range]::-webkit-slider-runnable-track  {
  box-shadow: none;
  border: none;
  background: transparent;
}

</style>
