import { AxiosConnection } from "../axios/axios.config";

export const getCompanies = async (quantity: number): Promise<any> => {
  const instance = await new AxiosConnection().axiosInstance();
  const { data } = await instance.get(`/companies?_quantity=${quantity}`);
  return data.data;
};

export const getPersons = async (quantity: number): Promise<any> => {
  const instance = await new AxiosConnection().axiosInstance();
  const { data } = await instance.get(`/persons?_quantity=${quantity}`);
  return data.data;
};
