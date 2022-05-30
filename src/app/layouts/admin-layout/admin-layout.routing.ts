import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserComponent } from '../../pages/user/user.component';
import { TableComponent } from '../../pages/table/table.component';
import { GameComponent } from '../../pages/games/games.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'users', component: UserComponent },
    { path: 'table', component: TableComponent },
    { path: 'games', component: GameComponent },
];
