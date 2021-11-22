import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { Empty } from 'antd';

import { getComputerSoftThunk, getAllComputersThunk } from '../../store/computers';

import './style.scss';

const ComputerPage = () => {
  const dispatch = useDispatch();

  const { computerId } = useParams();

  const currentComputer = useSelector((state) =>
    state.computers.computers.find((computer) => computer.id === Number(computerId))
  );
  console.log(currentComputer);

  useEffect(() => {
    if (currentComputer?.id) dispatch(getComputerSoftThunk(currentComputer.id));
  }, [currentComputer?.id]);

  useEffect(() => {
    dispatch(getAllComputersThunk());
  }, []);

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
    </div>
  );
};

export default ComputerPage;
