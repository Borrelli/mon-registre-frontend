import { IAPIPort } from "../../src/core/ports/API.port";
import { IRevenueDTO } from "../../src/core/DTO/revenue.DTO";

export class StubAPI implements IAPIPort {
  public createRevenue(userToken: string, revenue: IRevenueDTO): Promise<any> {
    throw new Error("Method not implemented.");
  }

  public receiveRevenue(): Promise<any> {
    throw new Error("Method not implemented.");
  }

  public createUser(firstname: string, lastname: string, email: string, password: string): Promise<any> {
    return Promise.resolve({ data: `'token'` });
  }
}
