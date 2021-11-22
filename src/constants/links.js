import accessLevels from './accessLevels';

import { HomeOutlined, UsergroupAddOutlined, DesktopOutlined } from '@ant-design/icons';

const home = { name: 'На Главную', path: 'home', Icon: HomeOutlined };
const computers = { name: 'Компьютеры', path: 'computers', Icon: DesktopOutlined };
const users = { name: 'Пользователи', path: 'users', Icon: UsergroupAddOutlined };

export default {
  [accessLevels.SYS_ADMIN]: [home],
  [accessLevels.MANAGER]: [home, computers, users],
  [accessLevels.ADMIN]: [home, computers, users],
};
