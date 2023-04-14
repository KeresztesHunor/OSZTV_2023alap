import { Kartya } from "./kartya.js";

export const LABOR_SZINEK = {
    piros: "piros",
    kek: "kék",
    sarga: "sárga"
};

export class Labor extends Kartya
{
    constructor(laborSzin)
    {
        super(`labor_${laborSzin}.jpg`);
        this.laborSzin = laborSzin;
    }
}