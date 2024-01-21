import type { Taxes } from './Taxes';
import type { CalculatorResult } from './CalculatorResult';
import type { InvestmentFormData } from './InvestmentFormData';


export interface Store {
  taxes: Taxes;
  results: CalculatorResult;
  investmentFormData: InvestmentFormData;
}
