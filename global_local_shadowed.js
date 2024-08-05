let isim = "Betül"; //global

function selamVer()
{
    let yas = 20; //local
    console.log("merhaba " + isim);
}
selamVer();

function favoriRenginiSoyle (renk)
{
    console.log("Favori rengin: " + renk);
}
favoriRenginiSoyle("mavi");