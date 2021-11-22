import { useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { Empty, Button, Table } from 'antd';

import { getComputerSoftThunk, getAllComputersThunk } from '../../store/computers';

import RemoveSoftModal from './RemoveSoftModal';
import AddSoftModal from './AddSoftModal';

import { addKeysToData, getColumns } from './columns';

import './style.scss';

const ComputerPage = () => {
  const dispatch = useDispatch();

  const { computerId } = useParams();

  const removeSoftModalRef = useRef();
  const addSoftModalRef = useRef();

  const computers = useSelector((state) => state.computers.computers);
  const currentComputer = useSelector((state) =>
    state.computers.computers.find((computer) => computer.id === Number(computerId))
  );

  useEffect(() => {
    if (currentComputer?.id) dispatch(getComputerSoftThunk(currentComputer.id));
  }, [currentComputer?.id]);

  useEffect(() => {
    if (!computers.length) dispatch(getAllComputersThunk());
  }, [computers.length]);

  const handleDelete = (softId) => removeSoftModalRef.current.openModal(softId);
  const handleAdd = () => addSoftModalRef.current.openModal();

  if (!currentComputer) return <Empty />;

  return (
    <div className="computer-page">
      <div className="computer-page__title">
        <span className="title">Список компьютеров</span>
        <span className="description">
          Какой-то ещё не придуманный текст, который будет отражать
          <br />
          основную часть этой части приложения
        </span>
      </div>
      <div className="computer-page__info">
        <div className="title">Расположение: </div>
        <div className="info">{currentComputer.location}</div>
        <div className="title">Владелец: </div>
        <div className="info">{currentComputer.owner}</div>
        <div className="title">Расположение: </div>
        <div className="info">{currentComputer.location}</div>
        <div className="title">Расположение: </div>
        <div className="info">{currentComputer.location}</div>
      </div>
      {currentComputer.soft && (
        <div className="computer-page__table">
          <div className="table-title">
            <span className="table-title__title">Список ПО</span>
            <Button className="table-title__button" type="primary" onClick={handleAdd}>
              Добавить
            </Button>
          </div>
          <Table dataSource={addKeysToData(currentComputer.soft)} columns={getColumns({ handleDelete })} />
        </div>
      )}
      <RemoveSoftModal
        title="Удалить ПО с компьютера?"
        subtitle="Вы уверены?"
        computerId={currentComputer?.id}
        ref={removeSoftModalRef}
      />
      <AddSoftModal
        title="Добавить ПО к компьютеру"
        subtitle="Выберите ПО и нажмите ОК"
        ref={addSoftModalRef}
        currentComputer={currentComputer}
      />
    </div>
  );
};

export default ComputerPage;
