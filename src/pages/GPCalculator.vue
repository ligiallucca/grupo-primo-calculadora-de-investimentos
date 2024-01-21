<script setup lang="ts">
import { watch } from 'vue';
import { store } from '@/store';
import GPForm from '../components/GPForm.vue';
import GPResults from '../components/GPResults.vue';
import type { InvestmentFormData } from '@/interfaces/InvestmentFormData';

watch(() => store.investmentFormData, () => getResults() )

const formData = store.investmentFormData;
const taxes = store.taxes

const getResults = () => {
  console.log("🚀 ~ getResultssssssssssssssssssssssssssssssssss ~ getResults:", getResults)
const totalArca = calcTotalAmount(formData, taxes.arcaTax); 
  console.log("🚀 ~ onSubmit ~ totalArca:", totalArca);
  const totalSelic = calcTotalAmount(formData, taxes.selicTax);
  console.log("🚀 ~ onSubmit ~ totalSelic:", totalSelic);
  store.results.arcaResult = totalArca;
  store.results.selicResult = totalSelic;
}


const calcTotalAmount = (formData: InvestmentFormData,  tax: number): number =>  {
  const simpleInterestAmount = calcSimpleInterest(formData, tax);
  const compoundInterestAmount = calcCompoundInterest(formData, tax);
  const totalAmonut = simpleInterestAmount + compoundInterestAmount;
  console.log("🚀 ~ calcTotalAmount ~ totalAmonut:", totalAmonut);
  return totalAmonut;  
}

const calcSimpleInterest = (formData: InvestmentFormData, tax: number, ) : number => {
  console.log('simple', formData, tax)
  const monthlyTax = tax / 12;
  console.log("🚀 ~ calcSimpleInterest ~ monthlyTax:", monthlyTax);
  const numberOfMonthsToNumber = parseFloat(formData.numberOfMonths);
  console.log("🚀 ~ calcSimpleInterest ~ numberOfMonthsToNumber:", numberOfMonthsToNumber)
  const initialInvestimentToNumber = parseFloat(formData.initialInvestment);
  console.log("🚀 ~ calcSimpleInterest ~ initialInvestimentToNumber:", initialInvestimentToNumber)
  
  //qto rende so o valor inical em qtdMeses
  const simpleInterestResult = initialInvestimentToNumber * (1 + monthlyTax) ** numberOfMonthsToNumber; 

  return simpleInterestResult;
}

const calcCompoundInterest = (formData:InvestmentFormData, tax: number ) : number => {
  const monthlyTax = tax / 12;
  const numberOfMonthsToNumber = parseFloat(formData.numberOfMonths);
  const monthlyInvestmentToNumber = parseFloat(formData.monthlyValue);
  
  //qto rende so o valor inical em qtdMeses
  const compoundInterestResult = monthlyInvestmentToNumber * ((1 + monthlyTax) ** numberOfMonthsToNumber -1) / monthlyTax; 
  return compoundInterestResult;
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