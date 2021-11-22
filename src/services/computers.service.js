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

const addComputer = ({ owner, mac_address, location }) =>
  httpService
    .post(`${computersUrl}`, { data: { owner, mac_address, location } })
    .then(({ data }) => data)
    .catch((err) => Promise.reject(err.response));

const getComputerSoft = ({ computerId }) =>
  httpService
    .get(`${computersUrl}/${computerId}/soft`)
    .then(({ data }) => data)
    .catch((err) => Promise.reject(err));

export default { getAllComputers, deleteComputer, addComputer, getComputerSoft };
