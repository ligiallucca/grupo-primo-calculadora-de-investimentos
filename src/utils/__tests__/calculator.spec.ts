import { describe, it, expect } from 'vitest'
import * as Calculator from '../calculator'
import type { InvestmentFormData } from '@/model/InvestmentFormData';
import { TaxesValues } from '@/model/Taxes';

const dummyFormData: InvestmentFormData = {
    initialInvestment: "100",
    monthlyValue: "100",
    numberOfMonths: "24",
};

describe('calculator', () => {
    describe('Arca', () => {
        it('calcTotalAmount should return correct value from input data and Arca tax value', () => {
            const result = Calculator.calcTotalAmount(dummyFormData, TaxesValues.ARCA)
            expect(result).toEqual(3006.3023607197133)
        })
        it('calcSimpleInterest should return correct value from input data and Arca tax value', () => {
            const result = Calculator.calcSimpleInterest(dummyFormData, TaxesValues.ARCA)
            expect(result).toEqual(142.95028119290217)
        })
        it('calcCompoundInterest should return correct value from input data and Arca tax value', () => {
            const result = Calculator.calcCompoundInterest(dummyFormData, TaxesValues.ARCA)
            expect(result).toEqual(2863.352079526811)
        })
    })
    describe('Selic', () => {
        it('calcTotalAmount should return correct value from input data and Selic tax value', () => {
            const result = Calculator.calcTotalAmount(dummyFormData, TaxesValues.SELIC)
            expect(result).toEqual(2745.5148739868723)
        })
        it('calcSimpleInterest should return correct value from input data and Selic tax value', () => {
            const result = Calculator.calcSimpleInterest(dummyFormData, TaxesValues.SELIC)
            expect(result).toEqual(120.23652064037921)
        })
        it('calcCompoundInterest should return correct value from input data and Selic tax value', () => {
            const result = Calculator.calcCompoundInterest(dummyFormData, TaxesValues.SELIC)
            expect(result).toEqual(2625.278353346493)
        })
    })
})