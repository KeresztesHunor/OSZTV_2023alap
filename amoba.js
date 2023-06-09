import { Kartya } from "./kartya.js";

export const TIPUSOK = {
    egySzemu: "egy szemű",
    ketSzemu: "két szemű"
};

export const SZINEK = {
    piros: "piros",
    kek: "kék"
};

export const MINTAK = {
    csikos: "csíkos",
    pottyos: "pöttyös"
};

export class Amoba extends Kartya
{
    constructor(tipus, szin, minta)
    {
        super(`kepek/amoba${TIPUSOK[tipus] === TIPUSOK.egySzemu ? 2 : 1}_${szin}_${minta}.jpg`);
        this.tipus = TIPUSOK[tipus];
        this.szin = SZINEK[szin];
        this.minta = MINTAK[minta];
    }

    osszehasonlit(masikAmoba)
    {
        return this.tipus === masikAmoba.tipus && this.szin === masikAmoba.szin && this.minta === masikAmoba.minta;
    }
}