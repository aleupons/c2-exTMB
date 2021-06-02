const appId = "0031bdb3";
const appKey = "1eef12f633798f1b3f0427e9c6e39525";
const codiParada = "2775";
const api = "https://api.tmb.cat/v1/ibus/stops/";
fetch(`${api}${codiParada}?app_id=${appId}&app_key=${appKey}`)
  .then((response) => response.json())
  .then((dades) => {
    const tempsAutobus = dades.data.ibus[0];
    const linia = tempsAutobus.line;
    const temps = tempsAutobus["text-ca"];
    return tempsQueFalta(linia, temps);
  });

const tempsQueFalta = (linia, temps) =>
  console.log(`Falten ${temps} perquè arribi el bus de la línia ${linia}`);
