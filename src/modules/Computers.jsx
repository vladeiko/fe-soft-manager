import { Routes, Route } from 'react-router-dom';

import { ComputersList, Computer } from '../pages';

const ComputersModule = () => {
  return (
    <Routes>
      <Route path="/" element={<ComputersList />} />
      <Route path="/:computerId" element={<Computer />} />
    </Routes>
  );
};

export default ComputersModule;
