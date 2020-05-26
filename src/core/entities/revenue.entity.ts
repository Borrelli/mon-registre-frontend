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
    title: "Référence",
  },
  {
    key: "customerName",
    title: "Client",
  },
  {
    key: "amountExcludingTax",
    title: "Montant HT",
  },
  {
    key: "amountIncludingTax",
    title: "Montant TTC",
  },
  {
    key: "amountVAT",
    title: "Montant TVA",
  },
  {
    key: "paiementMethod",
    title: "Type",
  },
];
