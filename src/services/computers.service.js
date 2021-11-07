import httpService from './http.service';

const computersUrl = '/computers';

const getAllComputers = () =>
  httpService
    .get(`${computersUrl}`)
    .then(({ data }) => data)
    .catch((err) => Promise.reject(err.response));

export default { getAllComputers };
