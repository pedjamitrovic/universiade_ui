const venues: Venue[] = [
    {
        id: 1,
        name: 'Kombank Arena',
        fromDate: new Date(2020, 6, 1, 21, 0),
        toDate: new Date(2020, 8, 1, 21, 0)
    },
    {
        id: 2,
        name: 'Aleksandar Nikolić Hall',
        fromDate: new Date(2020, 6, 1, 21, 0),
        toDate: new Date(2020, 8, 1, 21, 0)
    }, 
    {
        id: 3,
        name: 'Rajko Mitić Stadium',
        fromDate: new Date(2020, 6, 1, 21, 0),
        toDate: new Date(2020, 8, 1, 21, 0)
    },
    {
        id: 4,
        name: 'Partizan Stadium',
        fromDate: new Date(2020, 6, 1, 21, 0),
        toDate: new Date(2020, 8, 1, 21, 0)
    }
];

export class Venue {
    id: number;
    name: string;
    fromDate: Date;
    toDate: Date;

    static InitDb() {
        if (!localStorage.getItem('venues')) { localStorage.setItem('venues', JSON.stringify(venues)); }
    }
}
