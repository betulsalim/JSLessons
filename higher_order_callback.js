let myDizi = [1, 2, 3];

/*const diziKopyalaVeIkiIleCarp = function (dizi)
{
    let geciciDizi = [];
    for (let i = 0; i < dizi.length; i++)
    {
        geciciDizi[i] = dizi[i] * 2;
    }
    console.log(geciciDizi);
    
}

diziKopyalaVeIkiIleCarp(myDizi)*/
//First Class Function
const ikiIleCarp = function (sayi)
{
    return sayi * 2;
}
const ikiBol = function (sayi)
{
    return sayi / 2;
}
//daha kolay yol:
const diziİslemleri = function (dizi, islem) 
{
    let geciciDizi = [];
    for (let i = 0; i < dizi.length; i++)
    {
        geciciDizi[i] = islem(dizi[i]);
    }
    console.log(geciciDizi);
    
}
//Higher Order Function
diziİslemleri(myDizi, ikiIleCarp);
diziİslemleri(myDizi, ikiBol);


function adimiSoyle (ad, soyad)
{
    console.log("Merhaba " + ad + " " + soyad);
}
adimiSoyle('Betül', 'Salim')

function adimiBagir (ad, soyad, callback)
{
    const mesaj = ad.toUpperCase() + " " + soyad.toUpperCase();
    callback(mesaj)
}

adimiBagir('Betül', 'Salim', mesajGoster);

function mesajGoster (mesaj)
{
    console.log(mesaj);
}