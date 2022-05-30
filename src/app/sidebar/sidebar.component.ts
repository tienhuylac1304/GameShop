import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard', icon: 'bxs-dashboard', class: '' },
    { path: '/games', title: 'Games', icon: 'bx-joystick', class: '' },
    { path: '/voucher', title: 'Vouchers', icon: 'bxs-discount', class: '' },
    { path: '/report', title: 'Report', icon: 'bxs-report', class: '' },
    { path: '/users', title: 'Users', icon: 'bxs-user-account', class: '' },
    { path: '/table', title: 'Table List', icon: 'nc-tile-56', class: '' },
    { path: '/upgrade', title: 'Logout', icon: 'bx-exit', class: 'active-pro' },
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
}
