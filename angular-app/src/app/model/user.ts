export enum UserType { Student = 0, Admin = 1 }

const users: User[] = [
    {
        type: UserType.Student,
        id: 1,
        firstName: 'Vladmir',
        lastName: 'Sivčev',
        phoneNumber: '+381631234567',
        homeAddress: 'Bulevar kralja Aleksandra 66',
        username: 'vlada_student',
        password: 'sifra123',
        accomodation: 1,
        restaurant: 1,
        matches: [1, 2, 3, 4]
    },
    {
        type: UserType.Student,
        id: 2,
        firstName: 'Miodrag',
        lastName: 'Milošević',
        phoneNumber: '+381631234567',
        homeAddress: 'Bulevar kralja Aleksandra 66',
        username: 'miki_student',
        password: 'sifra123',
        accomodation: 1,
        restaurant: 1,
        matches: [1, 2, 3, 4]
    },
    {
        type: UserType.Student,
        id: 3,
        firstName: 'Momčilo',
        lastName: 'Nikolić',
        phoneNumber: '+381631234567',
        homeAddress: 'Bulevar kralja Aleksandra 66',
        username: 'moma_student',
        password: 'sifra123',
        accomodation: 1,
        restaurant: 1,
        matches: [1, 2, 3, 4]
    },
    {
        type: UserType.Student,
        id: 4,
        firstName: 'Luka',
        lastName: 'Nikolić',
        phoneNumber: '+381631234567',
        homeAddress: 'Bulevar kralja Aleksandra 66',
        username: 'lule_student',
        password: 'sifra123',
        accomodation: 1,
        restaurant: 1,
        matches: [1, 2, 3, 4]
    },
    {
        type: UserType.Admin,
        id: 5,
        firstName: 'Predrag',
        lastName: 'Mitrović',
        phoneNumber: '+381631234567',
        homeAddress: 'Bulevar kralja Aleksandra 66',
        username: 'pedja_admin',
        password: 'sifra123',
        accomodation: 1,
        restaurant: 1,
        matches: [1, 2, 3, 4]
    },
];

export class User {
    type: UserType;
    id: number;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    homeAddress: string;
    username: string;
    password: string;
    accomodation: number;
    restaurant: number;
    matches: number[];

    static InitDb() {
        if (!localStorage.getItem('users')) { localStorage.setItem('users', JSON.stringify(users)); }
    }
}
