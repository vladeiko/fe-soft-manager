import { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Table } from 'antd';

import { getAllComputersThunk } from '../../store/computers';

import DeleteComputerModal from './DeleteComputerModal';
import AddComputerModal from './AddComputerModal';

import { getColumns, addKeysToData } from './columns';

import './style.scss';

const ComputersListPage = () => {
  const dispatch = useDispatch();

  const deleteComputerModalRef = useRef();
  const addComputerModalRef = useRef();

  const isLoading = useSelector((state) => state.computers.isLoading);
  const computers = useSelector((state) => state.computers.computers);

  useEffect(() => {
    dispatch(getAllComputersThunk());
  }, []);

  const handleMore = () => null;
  const handleDelete = (computerId) => deleteComputerModalRef.current.openModal(computerId);
  const handleAdd = () => addComputerModalRef.current.openModal();

  return (
    <div className="computers-list">
      <div className="computers-list__title">
        <span className="title">Список компьютеров</span>
        <span className="description">
          Какой-то ещё не придуманный текст, который будет отражать
          <br />
          основную часть этой части приложения
        </span>
        <Button loading={isLoading} onClick={handleAdd} type="primary" className="add-button">
          Добавить
        </Button>
      </div>
      <div className="computers-list__table">
        <Table
          columns={getColumns({ handleMore, handleDelete })}
          dataSource={addKeysToData(computers)}
          loading={isLoading}
        />
      </div>
      <DeleteComputerModal title="Удалить Компьютер" subtitle="Вы уверены?" ref={deleteComputerModalRef} />
      <AddComputerModal title="Добавить Компьютер" subtitle="Заполните форму и нажмите ОК" ref={addComputerModalRef} />
    </div>
  );
};

export default ComputersListPage;
