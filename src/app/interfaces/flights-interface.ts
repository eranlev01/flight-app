export interface Trip {
    id: number;
    from: string;
    to: string;
    departFlights: object[];
    returnFlights: object[];
    departDur: Function;
    returnDur: Function;
    price: number;
    date: string;
}