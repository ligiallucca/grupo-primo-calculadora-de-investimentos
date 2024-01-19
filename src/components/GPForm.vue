<script setup lang="ts">
import Input from './GPInput.vue'
import InputSlider from './GPInputSlider.vue'
</script>
<template>
  <form>
    <InputSlider></InputSlider>
    <Input></Input>
    <InputSlider></InputSlider>
    <Input></Input>
    <InputSlider></InputSlider>
    <Input></Input>
  </form>
</template>
<style lang="scss" scoped>
@import '../assets/main.scss';
form {
  display: flex;
  flex-direction: column;
  gap: 44px;
}
</style>
