export const getColumns = ({ handleDelete }) => [
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
    render: (computer) => (
      <div>
        <span className="delete-button" onClick={() => handleDelete(computer.id)}>
          ❌
        </span>
      </div>
    ),
  },
];

export const addKeysToData = (data) => data.map((item) => ({ ...item, key: item.id }));
