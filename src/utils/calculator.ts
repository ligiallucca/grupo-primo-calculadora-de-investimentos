import type { InvestmentFormData } from '@/model/InvestmentFormData';

export const calcTotalAmount = (formData: InvestmentFormData, tax: number): number => {
  const simpleInterestAmount = calcSimpleInterest(formData, tax);
  const compoundInterestAmount = calcCompoundInterest(formData, tax);
  const totalAmonut = simpleInterestAmount + compoundInterestAmount;
  return totalAmonut;
}

export const calcSimpleInterest = (formData: InvestmentFormData, tax: number): number => {
  const monthlyTax = tax / 12;
  const numberOfMonthsToNumber = parseFloat(formData.numberOfMonths);
  const initialInvestimentToNumber = parseFloat(formData.initialInvestment);
  //qto rende so o valor inical em qtdMeses
  const simpleInterestResult = initialInvestimentToNumber * (1 + monthlyTax) ** numberOfMonthsToNumber;
  return simpleInterestResult;
}

export const calcCompoundInterest = (formData: InvestmentFormData, tax: number): number => {
  const monthlyTax = tax / 12;
  const numberOfMonthsToNumber = parseFloat(formData.numberOfMonths);
  const monthlyInvestmentToNumber = parseFloat(formData.monthlyValue);
  //qto rende so os aportes mensais em qtdMeses
  const compoundInterestResult =  (monthlyInvestmentToNumber * ((1 + monthlyTax) ** numberOfMonthsToNumber - 1)) / monthlyTax;
  return compoundInterestResult;
}


