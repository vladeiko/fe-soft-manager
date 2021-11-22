import accessLevels from './accessLevels';

import { ComputersList, SoftList, TasksList, UsersList } from '../pages';

export default {
  [accessLevels.SYS_ADMIN]: [
    { path: 'home', component: ComputersList },
    { path: 'tasks', component: TasksList },
  ],
  [accessLevels.MANAGER]: [
    { path: 'home', component: SoftList },
    { path: 'computers', component: ComputersList },
    { path: 'tasks', component: TasksList },
    { path: 'users', component: UsersList },
  ],
  [accessLevels.ADMIN]: [
    { path: 'home', component: UsersList },
    { path: 'computers', component: ComputersList },
    { path: 'tasks', component: TasksList },
    { path: 'users', component: UsersList },
  ],
};
