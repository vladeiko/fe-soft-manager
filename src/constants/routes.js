import accessLevels from './accessLevels';

import { SoftList, TasksList, UsersList } from '../pages';
import { ComputersModule } from '../modules';

export default {
  [accessLevels.SYS_ADMIN]: [
    { path: 'home', component: ComputersModule },
    { path: 'tasks', component: TasksList },
  ],
  [accessLevels.MANAGER]: [
    { path: 'home', component: SoftList },
    { path: 'computers/*', component: ComputersModule },
    { path: 'tasks', component: TasksList },
    { path: 'users', component: UsersList },
  ],
  [accessLevels.ADMIN]: [
    { path: 'home', component: UsersList },
    { path: 'computers', component: ComputersModule },
    { path: 'tasks', component: TasksList },
    { path: 'users', component: UsersList },
  ],
};
