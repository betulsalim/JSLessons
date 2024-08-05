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

//global olarak tanımladığım şeyi local olarak da tanımlayabilirim.

//shadow
//local olarak tanımladığım değişkeni global olarak da tanımlarsam eğer fonksiyonu çağırdığımda fonk. local olanı kullanacaktır.
