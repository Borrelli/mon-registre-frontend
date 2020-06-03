import { IAPIPort } from "../../src/core/ports/API.port";
import { revenueList } from "../fake/fake.revenue-list";

export class StubAPI implements IAPIPort {
  public createRevenue(): Promise<any> {
    throw new Error("Method not implemented.");
  }

  public receiveRevenue(): Promise<any> {
    return Promise.resolve({ data: revenueList });
  }

  public createUser(): Promise<any> {
    return Promise.resolve({ data: `'token'` });
  }
}
