import { KARTYAK } from "./adat.js";
import { ujTagekKozeIr, ujParatlanTagetIr, kepetIr } from "./qualityOfLifeMetodusok.js";
import { Amoba } from "./amoba.js";
import { Labor } from "./labor.js";
import { Mutacio } from "./mutacio.js";

$(() =>
{
    const ROOT_STILUS = $("head > style");
    $(window).resize(() =>
    {
        $(ROOT_STILUS).html(`
        :root {
            --lapok-szama: ${KARTYAK.length};
            --kisebb-ertek: 1${$(window).height() > $(window).width() ? "vw" : "vh"};
        }`);
    });

    const KARTYAK_DIV = $("#kartyak");
    $(KARTYAK_DIV).html(() =>
    {
        let i = 0;
        let txt = "";
        KARTYAK.forEach(kartya =>
        {
            txt += kepetIr(kartya.kep, (() =>
            {
                switch (kartya.constructor)
                {
                    case Amoba:
                        return `${kartya.tipus} ${kartya.szin} ${kartya.minta} amőba`;
                    case Labor:
                        return `${kartya.laborSzin} labor`;
                    case Mutacio:
                        return `${kartya.mutacioTipus} mutáció`;
                    default:
                        return "rács";
                }
            })(), `style="--index: ${i++}"`);
        });
        return txt;
    });
});