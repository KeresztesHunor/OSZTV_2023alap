import { KARTYAK } from "./adat.js";
import { ujTagekKozeIr, ujParatlanTagetIr, kepetIr, listaKeveres } from "./qualityOfLifeMetodusok.js";
import { Amoba, TIPUSOK, SZINEK, MINTAK } from "./amoba.js";
import { Labor, LABOR_SZINEK } from "./labor.js";
import { Mutacio, MUTACIO_TIPUSOK } from "./mutacio.js";
import { Racs } from "./racs.js";

let rootStilus;

let infoMezok = {};

let amobakIndexei = [];
let laborokIndexei = [];

let megtalalandoAmobaIndexe;

let pontszam = 0;

$(() =>
{
    rootStilus = $("head > style");
    alapCsstBeallit();
    $(window).resize(alapCsstBeallit);

    listaKeveres(KARTYAK);

    const KARTYAK_DIV = $("#kartyak");
    $(KARTYAK_DIV).html(() =>
    {
        let i = 0;
        let txt = "";
        KARTYAK.forEach((kartya, index) =>
        {
            txt += kepetIr(kartya.kep, (() =>
            {
                switch (kartya.constructor)
                {
                    case Amoba:
                        amobakIndexei.push(index);
                        return `${kartya.tipus} ${kartya.szin} ${kartya.minta} amőba`;
                    case Labor:
                        laborokIndexei.push(index);
                        return `${kartya.laborSzin} labor`;
                    case Mutacio:
                        return `${kartya.mutacioTipus} mutáció`;
                    case Racs:
                        return "rács";
                    default:
                        throw "Hiba! Nincs ilyen fajta kártya.";
                }
            })(), `${kartya.constructor === Amoba ? "class='amoba' " : ""}style="--index: ${i++}"`);
        });
        return txt;
    });

    infoMezok["laborSzin"] = $("#laborSzin");
    infoMezok["irany"] = $("#irany");
    infoMezok["amobaTipus"] = $("#amobaTipus");
    infoMezok["amobaSzin"] = $("#amobaSzin");
    infoMezok["amobaMinta"] = $("#amobaMinta");
    infoMezok["pontok"] = $("#pontok");

    const AMOBA_KARTYAK = $(".amoba").toArray();
    AMOBA_KARTYAK.forEach(amobaKartya =>
    {
        $(amobaKartya).on("click", () =>
        {
            const TALALAT = megtalalandoAmobaIndexe === parseInt(getComputedStyle(amobaKartya).getPropertyValue("--index"));
            $(infoMezok.pontok).html(TALALAT ? ++pontszam : --pontszam);
            if (TALALAT)
            {
                dobokockaDobas();
            }
        });
    });

    dobokockaDobas();
});

function alapCsstBeallit()
{
    $(rootStilus).html(`
    :root {
        --lapok-szama: ${KARTYAK.length};
        --kisebb-ertek: ${$(window).height() > $(window).width() ? "1vw" : "1vh"};
    }`);
}

function dobokockaDobas()
{
    const ORAMUTATO_IRANY = Math.random() < 0.5;
    $(infoMezok.irany).html(ORAMUTATO_IRANY ? "fehér" : "fekete");
    const indexetInkremental = ORAMUTATO_IRANY ? () =>
    {
        if (++kartyaIndex > KARTYAK.length - 1)
        {
            kartyaIndex = 0;
        }
    } : () =>
    {
        if (--kartyaIndex < 0)
        {
            kartyaIndex = KARTYAK.length - 1;
        }
    }
    let kartyaIndex = (() =>
    {
        const LABOR_SZIN = LABOR_SZINEK[randomKulcs(LABOR_SZINEK)];
        $(infoMezok.laborSzin).html(LABOR_SZIN);
        let i = 0;
        while (KARTYAK[laborokIndexei[i]].laborSzin !== LABOR_SZIN)
        {
            i++;
        }
        return laborokIndexei[i];
    })();
    const MEGTALALANDO_AMOBA = new Amoba(randomKulcs(TIPUSOK), randomKulcs(SZINEK), randomKulcs(MINTAK));
    $(infoMezok.amobaTipus).html(MEGTALALANDO_AMOBA.tipus);
    $(infoMezok.amobaSzin).html(MEGTALALANDO_AMOBA.szin);
    $(infoMezok.amobaMinta).html(MEGTALALANDO_AMOBA.minta);
    do
    {
        indexetInkremental();
        switch (KARTYAK[kartyaIndex].constructor)
        {
            case Mutacio:
                switch (KARTYAK[kartyaIndex].mutacioTipus)
                {
                    default:
                        MEGTALALANDO_AMOBA.tipus = MEGTALALANDO_AMOBA.tipus === TIPUSOK.egySzemu ? TIPUSOK.ketSzemu : TIPUSOK.egySzemu;
                        break;
                    case MUTACIO_TIPUSOK.szin:
                        MEGTALALANDO_AMOBA.szin = MEGTALALANDO_AMOBA.szin === SZINEK.piros ? SZINEK.kek : SZINEK.piros;
                        break;
                    case MUTACIO_TIPUSOK.minta:
                        MEGTALALANDO_AMOBA.minta = MEGTALALANDO_AMOBA.minta === MINTAK.csikos ? MINTAK.pottyos : MINTAK.csikos;
                        break;
                }
                break;
            case Racs:
                do
                {
                    indexetInkremental();
                }
                while (KARTYAK[kartyaIndex].constructor !== Racs);
                break;
        }
    }
    while (KARTYAK[kartyaIndex].constructor === Amoba ? !MEGTALALANDO_AMOBA.osszehasonlit(KARTYAK[kartyaIndex]) : true);
    megtalalandoAmobaIndexe = kartyaIndex;
}

function randomKulcs(objektum)
{
    const KULCSOK = Object.keys(objektum);
    return KULCSOK[Math.floor(Math.random() * KULCSOK.length)];
}