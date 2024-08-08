const sayilar = [1,2,3,4,5,6,7,8,9];

function sonucuBul(sayilar) 
{
    const tekEleman = sayilar.filter(function(sayi)
    {
        return sayi % 2 !== 0;
    });
    console.log("Tek Elemanlı Sayılar: " + tekEleman);
    
    const karesiniAl = tekEleman.map(function(sayi)
    {
        return sayi *sayi;
    });
    console.log("Tek Elemanlı yeni dizinin karesini al: " + karesiniAl);

    const buyukseTopla = karesiniAl.reduce(function(genelToplam,curr)
    {
        if(curr > 10)
        {
            return genelToplam = genelToplam + curr;
        }
        else
        {
            return genelToplam;
        }
    },0);
    return buyukseTopla;
    //console.log("Karesini aldığımız dizinin 10 dan büyük olanlarının toplamını bul: " +buyukseTopla);
}
console.log("Karesini bulduğun dizinin 10 dan büyükse toplamını bul: " + sonucuBul(sayilar));
console.log("******************Kısa Version***********")
function kisaVersion (sayilar)
{
    return sayilar.filter((sayi) =>sayi % 2 !== 0)
    .map((sayi) =>sayi *sayi)
    .reduce((genelToplam,curr) => curr > 10 ? genelToplam+= curr : genelToplam ,0);
}

console.log(kisaVersion(sayilar));