import { Amoba } from "./amoba";
import { Labor } from "./labor"
import { Mutacio } from "./mutacio";
import { Racs } from "./racs";

export const KARTYAK = [
    new Amoba("egySzemu", "kek", "csikos"),
    new Amoba("egySzemu", "kek", "pottyos"),
    new Amoba("egySzemu", "piros", "csikos"),
    new Amoba("egySzemu", "piros", "pottyos"),
    new Amoba("ketSzemu", "kek", "csikos"),
    new Amoba("ketSzemu", "kek", "pottyos"),
    new Amoba("ketSzemu", "piros", "csikos"),
    new Amoba("ketSzemu", "piros", "pottyos"),
    new Labor("piros"),
    new Labor("kek"),
    new Labor("sarga"),
    new Mutacio("amoba"),
    new Mutacio("szin"),
    new Mutacio("minta"),
    new Racs(),
    new Racs(),
    new Racs()
];