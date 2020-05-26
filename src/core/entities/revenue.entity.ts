export interface IRevenue {
  uid: string;
  creationDate: Date;
  reference: string;
  customerName: string;
  userId: string;
  amountExcludingTax: number;
  amountIncludingTax: number;
  amountVAT: number;
  paiementMethod: string;
  [index: string]: any;
}

export interface IRevenueBoard {
  title: string;
  key: string;
}

export const revenueCells: IRevenueBoard[] = [
  {
    key: "reference",
    title: "référence",
  },
  {
    key: "customerName",
    title: "client",
  },
  {
    key: "amountExcludingTax",
    title: "HT",
  },
  {
    key: "amountIncludingTax",
    title: "TTC",
  },
  {
    key: "amountVAT",
    title: "TVA",
  },
  {
    key: "paiementMethod",
    title: "type",
  },
];

export interface IRevenueDTO {
  reference: string;
  customerName: string;
  amountExcludingTax: number;
  amountIncludingTax: number;
  amountVAT: number;
  paiementMethod: string;
}
