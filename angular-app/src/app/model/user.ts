enum UserType { Student = 0, Admin = 1 }

const users: User[] = [
    {
        type: UserType.Student,
        firstName: 'Vladmir',
        lastName: 'Sivčev',
        phoneNumber: '+381631234567',
        homeAddress: 'Bulevar kralja Aleksandra 66',
        username: 'vlada_student',
        password: 'sifra123'
    },
    {
        type: UserType.Student,
        firstName: 'Miodrag',
        lastName: 'Milošević',
        phoneNumber: '+381631234567',
        homeAddress: 'Bulevar kralja Aleksandra 66',
        username: 'miki_student',
        password: 'sifra123'
    },
    {
        type: UserType.Student,
        firstName: 'Momčilo',
        lastName: 'Nikolić',
        phoneNumber: '+381631234567',
        homeAddress: 'Bulevar kralja Aleksandra 66',
        username: 'moma_student',
        password: 'sifra123'
    },
    {
        type: UserType.Student,
        firstName: 'Luka',
        lastName: 'Nikolić',
        phoneNumber: '+381631234567',
        homeAddress: 'Bulevar kralja Aleksandra 66',
        username: 'lule_student',
        password: 'sifra123'
    },
    {
        type: UserType.Admin,
        firstName: 'Predrag',
        lastName: 'Mitrović',
        phoneNumber: '+381631234567',
        homeAddress: 'Bulevar kralja Aleksandra 66',
        username: 'pedja_admin',
        password: 'sifra123'
    },
];

export class User {
    type: UserType;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    homeAddress: string;
    username: string;
    password: string;

    static InitDb() {
        if (!localStorage.getItem('users')) { localStorage.setItem('users', JSON.stringify(users)); }
    }
}
