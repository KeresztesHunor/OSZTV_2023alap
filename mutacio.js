import { Kartya } from "./kartya.js";

export const MUTACIO_TIPUSOK = {
    amoba: "típus",
    szin: "szín",
    minta: "minta"
};

export class Mutacio extends Kartya
{
    constructor(mutacioTipus)
    {
        super(`kepek/mutacio_${mutacioTipus}.jpg`);
        this.mutacioTipus = MUTACIO_TIPUSOK[mutacioTipus];
    }
}