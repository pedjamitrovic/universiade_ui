const matches: Match[] = [
    {
        id: 1,
        host: 'Serbia',
        visitor: 'USA',
        date: new Date(2020, 6, 10, 21, 0),
        venue: 'Kombank Arena',
    },
    {
        id: 2,
        host: 'Serbia',
        visitor: 'Spain',
        date: new Date(2020, 6, 11, 21, 0),
        venue: null,
    }, 
    {
        id: 3,
        host: 'Serbia',
        visitor: 'Italy',
        date: new Date(2020, 6, 12, 21, 0),
        venue: null,
    },
    {
        id: 4,
        host: 'Serbia',
        visitor: 'France',
        date: new Date(2020, 6, 13, 21, 0),
        venue: 'Kombank Arena',
    }
];

export class Match {
    id: number;
    host: string;
    visitor: string;
    date: Date;
    venue: string;

    static InitDb() {
        if (!localStorage.getItem('matches')) { localStorage.setItem('matches', JSON.stringify(matches)); }
    }
}
