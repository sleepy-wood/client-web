import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import qs from 'qs';

export const callRequest = async <T = any>({
  method,
  url,
  data = {},
  onUploadProgress,
}: AxiosRequestConfig): Promise<T> => {
  const token = sessionStorage.getItem('jwt');

  axios.defaults.withCredentials = true;
  axios.defaults.headers.common['Authorization'] = token ? `Bearer ${token}` : '';
  axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
  axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
  axios.defaults.paramsSerializer = {
    encode: params => qs.stringify(params, { arrayFormat: 'repeat' }),
  };

  if (method.toLowerCase() === 'post') {
    data.token = data.token ?? token;
  }

  return axios({
    method,
    url,
    data,
    onUploadProgress,
    headers: {
      responseType: 'json',
    },
    timeout: 10000,
  }).then((response: AxiosResponse<T>) => response.data);
};
