const sayilar = [1,2,3,4,5,6,7,8,9,10];

const sonuc = sayilar.every(function(sayi)
{
    return sayi < 10;
})
console.log("Every: \ndizim: " + sayilar + "\nHepsi 10 dan küçük mü? "+ sonuc);

const sonucSome = sayilar.some(function(sayi)
{
    return sayi < 10;
})
console.log("Some: \ndizim: " + sayilar + "\nBazıları 10 dan küçük mü? " + sonucSome)
