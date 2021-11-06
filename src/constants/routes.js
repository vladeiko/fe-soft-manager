import accessLevels from './accessLevels';

import { ComputersList, SoftList, TasksList, UsersList } from '../pages';

export default {
  [accessLevels.SYS_ADMIN]: [
    { path: 'home', component: ComputersList },
    { path: 'tasks', component: TasksList },
  ],
  [accessLevels.MANAGER]: [
    { path: 'tasks', component: TasksList },
    { path: 'home', component: SoftList },
    { path: 'users', component: UsersList },
  ],
  [accessLevels.ADMIN]: [
    { path: 'tasks', component: TasksList },
    { path: 'home', component: UsersList },
  ],
};
