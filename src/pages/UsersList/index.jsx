import { useRef, useState } from 'react';
import { Button, Table } from 'antd';

import DeleteUserModal from './DeleteUserModal';
import AddUserModal from './AddUserModal';

import { getColumns, addKeysToData } from './columns';

import './style.scss';

const UsersListPage = () => {
  const deleteUserModalRef = useRef();
  const addUserModalRef = useRef();

  const [users, setUsers] = useState([]);

  const handleDelete = (userId) => deleteUserModalRef.current.openModal(userId);
  const handleAdd = () => addUserModalRef.current.openModal();

  return (
    <div className="users-list">
      <div className="users-list__title">
        <span className="title">Список пользователей</span>
        <span className="description">
          Какой-то ещё не придуманный текст, который будет отражать
          <br />
          основную часть этой части приложения
        </span>
        <Button onClick={handleAdd} type="primary" className="add-button">
          Добавить
        </Button>
      </div>
      <div className="computers-list__table">
        <Table columns={getColumns({ handleDelete })} dataSource={addKeysToData(users)} />
      </div>
      <DeleteUserModal
        title="Удалить Пользователя"
        subtitle="Вы уверены?"
        ref={deleteUserModalRef}
        setUsers={setUsers}
      />
      <AddUserModal
        title="Добавить Пользователя"
        subtitle="Заполните форму и нажмите ОК"
        ref={addUserModalRef}
        setUsers={setUsers}
      />
    </div>
  );
};

export default UsersListPage;
