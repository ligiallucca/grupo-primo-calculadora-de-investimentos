export interface InvestmentFormData {
    initialInvestment: string;
    monthlyValue: string;
    numberOfMonths: string;
}

interface Taxes {
    arcaTax: number;
    selicTax: number;
}

interface CalculatorResult {
    selicResult: number;
    arcaResult: number;
}

export interface Store {
    investmentFormData : InvestmentFormData;
    results : CalculatorResult;
    taxes: Taxes;
}
