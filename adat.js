import { Amoba, TIPUSOK, SZINEK, MINTAK } from "./amoba.js";
import { Labor, LABOR_SZINEK } from "./labor.js";
import { Mutacio, MUTACIO_TIPUSOK } from "./mutacio.js";
import { Racs } from "./racs.js";

export const KARTYAK = (() =>
{
    const LISTA = [];
    for (const TIPUSOK_KULCS in TIPUSOK)
    {
        for (const SZINEK_KULCS in SZINEK)
        {
            for (const MINTAK_KULCS in MINTAK)
            {
                for (let i = 0; i < 2; i++)
                {
                    LISTA.push(new Amoba(TIPUSOK_KULCS, SZINEK_KULCS, MINTAK_KULCS));
                }
            }
        }
    }
    for (const LABOR_SZINEK_KULCS in LABOR_SZINEK)
    {
        LISTA.push(new Labor(LABOR_SZINEK_KULCS));
    }
    for (const MUTACIO_TIPUSOK_KULCS in MUTACIO_TIPUSOK)
    {
        LISTA.push(new Mutacio(MUTACIO_TIPUSOK_KULCS));
    }
    for (let i = 0; i < 3; i++)
    {
        LISTA.push(new Racs());
    }
    return LISTA;
})();