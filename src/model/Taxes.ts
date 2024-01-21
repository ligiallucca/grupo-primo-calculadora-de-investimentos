export enum TaxesValues {
  ARCA = 0.18,
  SELIC =  0.0925,
}

export interface Taxes {
  arcaTax: TaxesValues.ARCA;
  selicTax: TaxesValues.SELIC;
}
