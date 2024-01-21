import { reactive } from 'vue';
import type { Store } from './interfaces/InvestmentFormData';

export const store = reactive<Store>({
    investmentFormData: {
        initialInvestment: '100',
        monthlyValue: '100' ,
        numberOfMonths: '24' ,
    },
    results: {
        selicResult: 0,
        arcaResult: 0,
    },
    taxes: {
        selicTax: 0.0925,
        arcaTax: 0.18,
    },
});