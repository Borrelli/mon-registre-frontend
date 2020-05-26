export interface IAPIPort {
  receiveRevenue(userToken: string): Promise<any>;
  createUser(firstname: string, lastname: string, email: string, password: string): Promise<any>;
}
