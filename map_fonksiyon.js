const sayilar = [1, 2, 3, 4, 5, 6, 7];
sayilar.push(10);
console.log(sayilar);

const yeniSayilar = sayilar.map(function(sayi)
{
    return sayi * 2;
});
console.log(yeniSayilar);

const kitaplar = [{
    adi : '1',
    sayfaSayisi : 50,
},
{
    adi : '2',
    sayfaSayisi : 40,
},
{
    adi : '3',
    sayfaSayisi : 30,
}];

const sayfaSayisi = kitaplar.map(function(kitap)
{
    return kitap.sayfaSayisi;
});
console.log("Sayfa Sayıları: " + sayfaSayisi);

const kisiler = [
    {adi :'Betül', soyadi : 'Salim'},
    {adi :'Nesrin', soyadi : 'Salim'},
    {adi :'İbrahim', soyadi : 'Salim'},
    {adi :'Burak', soyadi : 'Salim'}
];

const bilgi = kisiler.map((kisiBilgileri) => kisiBilgileri.adi + " " + kisiBilgileri.soyadi);
console.log(bilgi);

function kendiMapYapim(params, islem) {
    const yeniDizi = [];
    for (let i = 0; i< params.length; i++)
    {
        yeniDizi.push(islem(params[i], i));
    }
    return yeniDizi;
}
const olusanYeniDizi = kendiMapYapim(sayilar, function(sayi, index)
{
    console.log(("index: " + index));
    
    return sayi * 5;
});
console.log(olusanYeniDizi);
