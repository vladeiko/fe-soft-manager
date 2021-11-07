export const columns = [
  {
    title: 'Номер',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Расположение',
    dataIndex: 'location',
    key: 'location',
  },
  {
    title: 'Владелец',
    dataIndex: 'owner_name',
    key: 'owner_name',
  },
  {
    title: 'MAC-адрес',
    dataIndex: 'mac_address',
    key: 'mac_address',
  }
];

export const addKeysToData = (data) => data.map((item) => ({ ...item, key: item.id }));
