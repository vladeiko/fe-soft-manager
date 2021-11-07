import { Button, Table } from 'antd';

import './style.scss';

const ComputersListPage = () => {
  return (
    <div className="computers-list">
      <div className="computers-list__title">
        <span className="title">Список компьютеров</span>
        <span className="description">
          Какой-то ещё не придуманный текст, который будет отражать основную часть этой части приложения
        </span>
        <Button type="primary" className="add-button">Добавить</Button>
      </div>
      <div className="computers-list__table">
        <Table />
      </div>
    </div>
  );
};

export default ComputersListPage;
