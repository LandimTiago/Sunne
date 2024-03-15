import axios, { Axios, AxiosInstance, CreateAxiosDefaults } from "axios";

class AxiosConnection {
  constructor(private readonly authorization?: string) {}

  public async axiosInstance(): Promise<AxiosInstance> {
    const configs: CreateAxiosDefaults = {
      baseURL: process.env.FAKERAPI,
      headers: this.authorization
        ? { Authorization: `bearer ${this.authorization}` }
        : undefined,
    };

    return axios.create(configs);
  }
}

export { AxiosConnection };
