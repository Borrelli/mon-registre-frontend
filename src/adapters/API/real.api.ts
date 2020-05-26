import { IAPIPort } from "../../core/ports/API.port";
import axios, { AxiosPromise } from "axios";
import { IRevenue, IRevenueDTO } from "../../core/entities/revenue.entity";

export class RealAPI implements IAPIPort {
  private APIBaseURL = "";
  constructor(private APIDomain: string, private APIPrefix: string = "api") {
    this.APIBaseURL = `${this.APIDomain}/${this.APIPrefix}`;
  }

  public createRevenue(userToken: string, revenue: IRevenueDTO): AxiosPromise<string> {
    const requestBody: any = {
      url: `${this.APIBaseURL}/revenue/create`,
      method: "POST",
      headers: { Authorization: userToken },
      data: {
        revenue,
      },
    };
    return axios(requestBody);
  }

  public receiveRevenue(userToken: string): AxiosPromise<IRevenue[]> {
    const requestBody: any = {
      url: `${this.APIBaseURL}/revenue/find-all`,
      method: "GET",
      headers: { Authorization: userToken },
    };
    return axios(requestBody);
  }

  public createUser(firstname: string, lastname: string, email: string, password: string): AxiosPromise<string> {
    const requestBody: any = {
      url: `${this.APIBaseURL}/user/create`,
      method: "POST",
      data: {
        firstname,
        lastname,
        email,
        password,
      },
    };
    return axios(requestBody);
  }
}
