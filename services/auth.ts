import { AxiosResponse } from "axios";
import httpClient from "./httpClient";

export class Auth {
  public login(
    email: string,
    password: string
  ): Promise<AxiosResponse<any, any>> {
    return httpClient.get("/userEnterprise/login", {
      params: { email, password },
    });
  }
}
