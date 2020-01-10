export class ToolbarAction {
    icon?: string;
    imageUrl?: string;
    name: string;
    routerLink: string;
    active: boolean;
}

const actions: ToolbarAction[] = [
    { name: 'Profile', routerLink: '/profile', active: false },
    { name: 'Logout', routerLink: '/profile', active: false },
];
