import axios, { Method } from "axios";

const ApiCaller = (url: string, method: Method, data: any, host: any) => {
  return axios({
    url: `${host}${url}`,
    method,
    data,
  });
};
export default ApiCaller;
