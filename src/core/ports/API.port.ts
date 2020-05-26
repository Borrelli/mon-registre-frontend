import { IRevenueDTO } from "../entities/revenue.entity";

export interface IAPIPort {
  createRevenue(userToken: string, revenue: IRevenueDTO): Promise<any>;
  receiveRevenue(userToken: string): Promise<any>;
  createUser(firstname: string, lastname: string, email: string, password: string): Promise<any>;
}
