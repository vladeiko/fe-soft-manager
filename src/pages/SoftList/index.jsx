import { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Table } from 'antd';

import { getAllSoftThunk } from '../../store/soft';

import DeleteSoftModal from './DeleteSoftModal';
import AddSoftModal from './AddSoftModal';

import { getColumns, addKeysToData } from './columns';

import './style.scss';

const SoftListPage = () => {
  const dispatch = useDispatch();

  const deleteSoftModalRef = useRef();
  const addSoftModalRef = useRef();

  const isLoading = useSelector((state) => state.soft.isLoading);
  const soft = useSelector((state) => state.soft.soft);

  useEffect(() => {
    dispatch(getAllSoftThunk());
  }, []);

  const handleDelete = (softId) => deleteSoftModalRef.current.openModal(softId);
  const handleAdd = (softId) => addSoftModalRef.current.openModal(softId);

  return (
    <div className="soft-list">
      <div className="soft-list__title">
        <span className="title">Список ПО</span>
        <span className="description">
          Какой-то ещё не придуманный текст, который будет отражать
          <br />
          основную часть этой части приложения
        </span>
        <Button loading={isLoading} onClick={handleAdd} type="primary" className="add-button">
          Добавить
        </Button>
      </div>
      <div className="soft-list__table">
        <Table columns={getColumns({ handleDelete })} dataSource={addKeysToData(soft)} loading={isLoading} />
      </div>
      <DeleteSoftModal title="Удалить ПО" subtitle="Вы уверены?" ref={deleteSoftModalRef} />
      <AddSoftModal title="Добавить ПО" subtitle="Заполните форму" ref={addSoftModalRef} />
    </div>
  );
};

export default SoftListPage;
