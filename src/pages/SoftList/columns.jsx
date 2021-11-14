import { Button } from 'antd';

export const getColumns = ({ handleMore, handleDelete }) => [
  {
    title: 'Номер',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Название',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Тип',
    dataIndex: 'type',
    key: 'type',
  },
  {
    title: 'Подтип',
    dataIndex: 'sub_type',
    key: 'sub_type',
  },
  {
    title: 'Тип Лицензии',
    dataIndex: 'license_type',
    key: 'license_type',
  },
  {
    title: '',
    render: (soft) => (
      <div>
        <Button type="link" onClick={() => handleMore(soft.id)}>
          ПОДРОБНЕЕ
        </Button>
        <span className="delete-button" onClick={() => handleDelete(soft.id)}>
          ❌
        </span>
      </div>
    ),
  },
];

export const addKeysToData = (data) => data.map((item) => ({ ...item, key: item.id }));
