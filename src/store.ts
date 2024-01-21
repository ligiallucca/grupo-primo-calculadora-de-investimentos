import { reactive } from 'vue';
import type { Store } from './model/Store';
import { TaxesValues } from './model/Taxes';

export const store = reactive<Store>({
  investmentFormData: {
    initialInvestment: '100',
    monthlyValue: '100',
    numberOfMonths: '24'
  },
  results: {
    arcaResult: 0,
    selicResult: 0
  },
  taxes: {
    arcaTax: TaxesValues.ARCA,
    selicTax: TaxesValues.SELIC
  }
})
