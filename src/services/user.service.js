import httpService from './http.service';

const authUrl = '/auth';

const signIn = (values) =>
  httpService
    .post(`${authUrl}/signin`, { data: values })
    .then(({ data }) => data)
    .catch((err) => Promise.reject(err.response));

export default { signIn };