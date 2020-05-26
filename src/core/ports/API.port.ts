export interface IAPIPort {
  receiveRevenue(userToken: string): Promise<any>;
}
