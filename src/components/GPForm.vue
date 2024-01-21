<script setup lang='ts'>
import { ref, type Ref } from 'vue';
import { store } from '../store';
import type { InvestmentFormData } from '@/model/InvestmentFormData';

import GPInput from './GPInput.vue';
import GPInputSlider from './GPInputSlider.vue';
import GpButton from './GpButton.vue';

const emit = defineEmits(['formSubmited']);


const formData: Ref<InvestmentFormData> = ref({
  initialInvestment: '100',
  monthlyValue: '100',
  numberOfMonths: '24',
});


const submitInvestimentFormData = (e: Event): void =>  {
  e.preventDefault();
  store.investmentFormData.initialInvestment = formData.value.initialInvestment;
  store.investmentFormData.monthlyValue = formData.value.monthlyValue;
  store.investmentFormData.numberOfMonths = formData.value.numberOfMonths;
  emit('formSubmited', formData);
  
}

</script>
<template>
  <form @submit="submitInvestimentFormData($event)">
    <GPInputSlider label="Quanto gostaria de investir?" v-model="formData.initialInvestment"></GPInputSlider>
    <GPInput v-model="formData.initialInvestment"></GPInput>

    <GPInputSlider label="Por mês, quanto você investiria?" v-model="formData.monthlyValue"></GPInputSlider>
    <GPInput v-model="formData.monthlyValue"></GPInput>
    
    <GPInputSlider label="Quanto tempo deixaria seu dinheiro investido?" v-model="formData.numberOfMonths" data-kind="month"></GPInputSlider>
    <GPInput v-model="formData.numberOfMonths" data-kind="month"></GPInput>
    <div class="button-container">
      <GpButton label="Calcular"></GpButton>
    </div>
  </form>

</template>
<style lang="scss" scoped>
@import '../assets/main.scss';
form {
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 44px;

  .button-container {
    display: flex;
    justify-content: flex-end;
    
    button {
      width: 100px;
    }
  }
}
</style>
