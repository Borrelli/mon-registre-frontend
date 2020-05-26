import { IAPIPort } from "../../core/ports/API.port";
import { IRevenue } from "../../core/entities/revenue.entity";

export class InMemoryAPI implements IAPIPort {
  private revenueList: IRevenue[] = [
    {
      uid: "uid2",
      creationDate: new Date("2000-01-02"),
      amountExcludingTax: 30,
      amountIncludingTax: 35,
      amountVAT: 5,
      userId: "uid1",
      customerName: " customer-name2",
      paiementMethod: "Card",
      reference: "paiement-ref2",
    },
    {
      uid: "uid3",
      creationDate: new Date("2000-01-03"),
      amountExcludingTax: 40,
      amountIncludingTax: 45,
      amountVAT: 5,
      userId: "uid1",
      customerName: " customer-name3",
      paiementMethod: "Card",
      reference: "paiement-ref3",
    },
  ];

  public receiveRevenue(): Promise<any> {
    return Promise.resolve({ data: this.revenueList });
  }
}
