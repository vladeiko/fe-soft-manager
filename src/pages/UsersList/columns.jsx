export const getColumns = ({ handleDelete }) => [
  {
    title: 'Номер',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'ФИО',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'E-mail',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: '',
    render: (user) => (
      <div>
        <span className="delete-button" onClick={() => handleDelete(user.id)}>
          ❌
        </span>
      </div>
    ),
  },
];

export const addKeysToData = (data) => data.map((item) => ({ ...item, key: item.id }));
