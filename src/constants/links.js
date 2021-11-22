import accessLevels from './accessLevels';

import { HomeOutlined, CheckOutlined, UsergroupAddOutlined, DesktopOutlined } from '@ant-design/icons';

const home = { name: 'На Главную', path: 'home', Icon: HomeOutlined };
const computers = { name: 'Компьютеры', path: 'computers', Icon: DesktopOutlined };
const tasks = { name: 'Задачи', path: 'tasks', Icon: CheckOutlined };
const users = { name: 'Пользователи', path: 'users', Icon: UsergroupAddOutlined };

export default {
  [accessLevels.SYS_ADMIN]: [home, tasks],
  [accessLevels.MANAGER]: [home, computers, users, tasks],
  [accessLevels.ADMIN]: [home, computers, users, tasks],
};
