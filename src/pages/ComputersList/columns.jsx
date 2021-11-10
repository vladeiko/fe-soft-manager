import { Button } from 'antd';

export const getColumns = ({ handleMore, handleDelete }) => [
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
    dataIndex: 'owner',
    key: 'owner',
  },
  {
    title: 'MAC-адрес',
    dataIndex: 'mac_address',
    key: 'mac_address',
  },
  {
    title: '',
    render: (computer) => (
      <div>
        <Button type="link" onClick={() => handleMore(computer.id)}>
          ПОДРОБНЕЕ
        </Button>
        <span className="delete-button" onClick={() => handleDelete(computer.id)}>
          ❌
        </span>
      </div>
    ),
  },
];

export const addKeysToData = (data) => data.map((item) => ({ ...item, key: item.id }));
