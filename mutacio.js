import { Kartya } from "./kartya";

export const MUTACIO_TIPUSOK = {
    amoba: "amoba",
    szin: "szín",
    minta: "minta"
};

export class Mutacio extends Kartya
{
    constructor(mutacioTipus)
    {
        super(`mutacio_${mutacioTipus}.jpg`);
        this.mutacioTipus = mutacioTipus;
    }
}