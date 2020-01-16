export enum LocationType { Accomodation = 0, Restaurant = 1 }

const locations: Location[] = [
    {
        type: LocationType.Accomodation,
        id: 1,
        name: 'Studentski grad',
        description: 'Studentski dom Studentski grad, popularno poznat kao Studenjak, predstavlja jedno od najvećih studentskih naselja na Balkanu. Ima četiri bloka, od kojih svaki ima F i G krilo. Ovaj dom nastao je u periodu od 1949. do 1955. godine, ali je krajem devedestih godina prošlog veka izvršena rekonstrukcija. Jedan deo kapaciteta koristi se u svrhu hostela tokom cele godine, dok je tokom leta taj kapacitet znatno veći. Studenski dom Studentski grad raspolaže sa preko 4.000 krevetnih mesta, a sobe su dvokrevetne, trokrevetne i apartmani. U sobama se nalaze, pored osnovne opreme u vidu kreveta, radnih stolova i plakara i polica, još i hodnik sa čajnom kuhinjom i kupatilom, direktna telefonska linija, interna kablovska televizija i internet konekcija. Dvokrevetne sobe imaju i terasu. Svaki blok Studentskog doma Studentski grad raspolaže sa čitaonicama, crtaonicama, perionicama veša, TV salom, prodavnicama mešovite robe i video nadzorom. Prateća infrastruktura Studenjaka uključuje i studentski restoran, gril restoran, letnju baštu Fontana, diskoteku, poštu, menjačnicu i internet centar.',
        reviews: [
            {
                userId: 2,
                description: 'Prelep smeštaj, diskoteka po mom ukusu!',
                rating: 5
            },
            {
                userId: 3,
                description: null,
                rating: 2
            },
            {
                userId: 4,
                description: 'Iskreno, navikao sam na nešto luksuznije.',
                rating: null
            }
        ],
        lat: 44.824623,
        lng: 20.399805,
        changeRequests: []
    },
    {
        type: LocationType.Restaurant,
        id: 2,
        name: 'Mesara Momčilo',
        description: 'Studentski dom Studentski grad, popularno poznat kao Studenjak, predstavlja jedno od najvećih studentskih naselja na Balkanu. Ima četiri bloka, od kojih svaki ima F i G krilo. Ovaj dom nastao je u periodu od 1949. do 1955. godine, ali je krajem devedestih godina prošlog veka izvršena rekonstrukcija. Jedan deo kapaciteta koristi se u svrhu hostela tokom cele godine, dok je tokom leta taj kapacitet znatno veći. Studenski dom Studentski grad raspolaže sa preko 4.000 krevetnih mesta, a sobe su dvokrevetne, trokrevetne i apartmani. U sobama se nalaze, pored osnovne opreme u vidu kreveta, radnih stolova i plakara i polica, još i hodnik sa čajnom kuhinjom i kupatilom, direktna telefonska linija, interna kablovska televizija i internet konekcija. Dvokrevetne sobe imaju i terasu. Svaki blok Studentskog doma Studentski grad raspolaže sa čitaonicama, crtaonicama, perionicama veša, TV salom, prodavnicama mešovite robe i video nadzorom. Prateća infrastruktura Studenjaka uključuje i studentski restoran, gril restoran, letnju baštu Fontana, diskoteku, poštu, menjačnicu i internet centar.',
        reviews: [
            {
                userId: 2,
                description: 'Očajna pljeskavica.',
                rating: 1
            },
            {
                userId: 3,
                description: 'Pileće belo me oduševilo. Čista petica.',
                rating: 5
            },
            {
                userId: 4,
                description: 'Zašto nema tartufa?',
                rating: 1
            }
        ],
        lat: 44.824022,
        lng: 20.402407,
        changeRequests: []
    }, {
        type: LocationType.Accomodation,
        id: 3,
        name: 'Hotel Hajat',
        description: 'Ovaj hotel sa 5 zvezdica smešten na pogodnoj lokaciji u poslovnoj četvrti na Novom Beogradu, između Aerodroma Beograd i Starog grada. U kompleksu se nalaze raznovrsni restorani i luksuzni spa centar. Gosti mogu besplatno da koriste standardni internet, a brzi internet vam je na raspolaganju uz doplatu.',
        reviews: [
        ],
        lat: 44.813025,
        lng: 20.434764,
        changeRequests: []
    },
    {
        type: LocationType.Restaurant,
        id: 4,
        name: 'Restoran Durmitor',
        description: 'Ambijent je prilično jednostavan. Ono sto privlači paznju je bašta, ili trem, koji je pokriven zelenim “tegola” krovom. U toplim letnjim mesecima, pruza odlično mesto za uzivanje u hladovini. Restoran služi topla i hladna predjela. Od hladnih to su poznata njeguska pršuta, goveđa prsuta, uštipci, dimljeni čvarci, paprika u pavlaci, pljevaljski sir, proja, a od toplih to su pečurke, na žaru ili pohovane. Teleca corba i juneća supa, kao i nekoliko kuvanih jela, svakodnevno su na meniju. Evo nekoliko predloga iz menija “jela po porudžbini” – Specijalitet Kuće Durmitor, zatim Šumadijska tepsija i Pohovani specijalitet.',
        reviews: [
        ],
        lat: 44.822417,
        lng: 20.410847,
        changeRequests: []
    }, {
        type: LocationType.Accomodation,
        id: 5,
        name: 'Hotel Crowne Plaza',
        description: 'Luksuzni hotel Crowne Plaza Belgrade nalazi se na idealnoj lokaciji u centru poslovne četvrti na Novom Beogradu. Do centra grada može se stići za 5 minuta vožnje, a 2 tržna centra nalaze se na svega par koraka. Gostima su na raspolaganju spa centar, sala za fitnes, kao i zatvoreni bazen. Hotel poseduje i 2 restorana u kojima gosti mogu uživati u jelima lokalne kuhinje.',
        reviews: [
        ],
        lat: 44.809595,
        lng: 20.434329,
        changeRequests: []
    },
    {
        type: LocationType.Restaurant,
        id: 6,
        name: 'KFC Delta City',
        description: 'Ovde se svaki dan ručno priprema kvalitetna piletina i zato su naši sendviči, Hot Wings i Strips neverovatno dobrog ukusa. Posetite nas!',
        reviews: [
        ], 
        lat: 44.805781,
        lng: 20.405329,
        changeRequests: []
    },
];

export class Location {
    type: LocationType;
    id: number;
    name: string;
    description: string;
    reviews: { userId: number, description: string, rating: number }[];
    lat: number;
    lng: number;
    changeRequests: { userId: number, description: string, oldLocation: number }[];

    static InitDb() {
        if (!localStorage.getItem('locations')) { localStorage.setItem('locations', JSON.stringify(locations)); }
    }
}
