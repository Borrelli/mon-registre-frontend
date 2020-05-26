import { IAPIPort } from "../../core/ports/API.port";
import axios, { AxiosPromise } from "axios";
import { IRevenue } from "../../core/entities/revenue.entity";

export class RealAPI implements IAPIPort {
  private APIBaseURL = "";
  constructor(private APIDomain: string, private APIPrefix: string = "api") {
    this.APIBaseURL = `${this.APIDomain}/${this.APIPrefix}`;
  }

  public receiveRevenue(userToken: string): AxiosPromise<IRevenue[]> {
    const requestBody: any = {
      url: `${this.APIBaseURL}/revenue/find-all`,
      method: "GET",
      headers: { Authorization: userToken },
    };
    return axios(requestBody);
  }
}
