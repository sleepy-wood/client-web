import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

export const callRequest = async <T = any>({
  method,
  url,
  data = {},
  onUploadProgress,
  ...configs
}: AxiosRequestConfig): Promise<T> => {
  const token = sessionStorage.getItem('jwt');

  axios.defaults.withCredentials = true;
  axios.defaults.headers.common['Authorization'] = token ? `Bearer ${token}` : '';
  axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
  axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

  if (method.toLowerCase() === 'post') {
    data.token = data.token ?? token;
  }

  return axios({
    method,
    url,
    data,
    params: configs.params,
    onUploadProgress,
    headers: {
      responseType: 'json',
    },
    timeout: 10000,
  }).then((response: AxiosResponse<T>) => response.data);
};
