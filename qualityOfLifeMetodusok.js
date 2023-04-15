export function ujTagekKozeIr(tag, parameterek = null, tartalom = "")
{
    return `<${tag}${parameterek ? " " + parameterek : ""}>${tartalom}</${tag}>`;
}

export function kepetIr(url, alt, parameterek = null)
{
    return ujParatlanTagetIr("img", `${parameterek ? parameterek + " " : ""}src="${url}" alt="${alt}"`);
}

export function ujParatlanTagetIr(tag, parameterek = null)
{
    return `<${tag}${parameterek ? " " + parameterek : ""}>`;
}

export function listaKeveres(lista)
{
    for (let i = lista.length - 1; i > 0; i--)
    {
        const INDEX = Math.floor(Math.random() * (i + 1));
        [lista[i], lista[INDEX]] = [lista[INDEX], lista[i]];
    }
}