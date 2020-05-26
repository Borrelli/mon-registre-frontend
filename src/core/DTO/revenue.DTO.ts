export interface IRevenueDTO {
  reference: string;
  customerName: string;
  amountExcludingTax: number;
  amountIncludingTax: number;
  amountVAT: number;
  paiementMethod: string;
}
