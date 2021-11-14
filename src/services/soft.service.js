import httpService from './http.service';

const softUrl = '/soft';

const getAllSoft = () =>
  httpService
    .get(`${softUrl}`)
    .then(({ data }) => data)
    .catch((err) => Promise.reject(err.response));

const deleteSoft = (softId) => {
  const params = new URLSearchParams();
  params.append('soft_id', softId);

  return httpService
    .remove(`${softUrl}`, {}, {}, { params })
    .then(({ data }) => data)
    .catch((err) => Promise.reject(err.response));
};

const addSoft = ({ name, type, sub_type, license_type }) =>
  httpService
    .post(`${softUrl}`, { data: { name, type, sub_type, license_type } })
    .then(({ data }) => data)
    .catch((err) => Promise.reject(err.response));

export default { getAllSoft, deleteSoft, addSoft };
