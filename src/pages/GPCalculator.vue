<script setup lang="ts">
import { watch } from 'vue';
import { store } from '@/store';
import GPForm from '@/components/GPForm.vue';
import GPResults from '@/components/GPResults.vue';
import { calcTotalAmount }  from '@/utils/calculator';
import { TaxesValues } from '@/model/Taxes';



watch(() => store.investmentFormData, () => getResults() )

const formData = store.investmentFormData;

const getResults = () => {
  console.log('getResults')
  const totalArca = calcTotalAmount(formData, TaxesValues.ARCA); 
  const totalSelic = calcTotalAmount(formData, TaxesValues.SELIC);
  console.log('A', totalArca);
  console.log('S', totalSelic);
  store.results.arcaResult = totalArca;
  store.results.selicResult = totalSelic;
}

</script>

<template>
  <main>
    <GPForm @formSubmited="() => getResults()"></GPForm>
    <GPResults></GPResults>
  </main>
</template>

<style lang="scss" scoped>
@import '@/assets/main.scss';
main {
  padding: 96px 120px;
  display: flex;
  gap: 140px;

  @include for-small-devices {
    display: flex;
    flex-direction: column;
  }
}
</style>