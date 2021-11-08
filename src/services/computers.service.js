import httpService from './http.service';

const computersUrl = '/computers';

const getAllComputers = () =>
  httpService
    .get(`${computersUrl}`)
    .then(({ data }) => data)
    .catch((err) => Promise.reject(err.response));

const deleteComputer = (computerId) => {
  const params = new URLSearchParams();
  params.append('computer_id', computerId);

  return httpService
    .remove(`${computersUrl}`, {}, {}, { params })
    .then(({ data }) => data)
    .catch((err) => Promise.reject(err.response));
};

export default { getAllComputers, deleteComputer };
