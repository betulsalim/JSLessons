let sayilar = [1, 2, 3, 4, 5];
//her durumda tetikliyor
/*sayilar.forEach(function (sayi, i)
{
    console.log("Dizim: " + sayi,"index: " + i);
    
});*/



function IkiParametreAlanFonksiyon(sayi, index) {
    console.log("Dizimdaki Sayı: " + sayi, " İndex: " + index);
    
}
sayilar.forEach(IkiParametreAlanFonksiyon);

function diziyiYazdir(dizi,callback) {
    for (let i = 0; i < dizi.length; i++)
    {
        callback(dizi[i] , i);
    }
}
diziyiYazdir(sayilar, function(deger, index)
{
    console.log(("değer: " + deger + " index: " + index));
    
})
