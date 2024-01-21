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
  const totalArca = calcTotalAmount(formData, TaxesValues.ARCA); 
  const totalSelic = calcTotalAmount(formData, TaxesValues.SELIC);
  store.results.arcaResult = totalArca;
  store.results.selicResult = totalSelic;
}

</script>

<template>
  <main>
    <GPForm @formSubmited="getResults()"></GPForm>
    <GPResults></GPResults>
  </main>
</template>

<style lang="scss" scoped>
main {
  padding: 96px 120px;
  display: flex;
  margin: 0 auto;
  width: 100%;
  gap: 140px;
}
</style>