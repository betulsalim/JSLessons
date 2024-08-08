const isimler = ['emre', 'ali', 'hasan', 'ayse'];

const sayilar = [1, 50, 2, 41, 41, 84, 8, 35, 3];

const ogrenciler = [
    {id : 12, isim: 'emre', yas : 25},
    {id : 22, isim: 'hasan', yas : 15},
    {id : 32, isim: 'fatma', yas : 55},
    {id : 13, isim: 'nuriye', yas : 19},
    {id : 92, isim: 'kemal', yas : 45},
    {id : 15, isim: 'mustafa', yas : 75},
    {id : 44, isim: 'ceren', yas : 30}
];

//isimler a-z sıralama
console.log("A-Z sıralama: " + isimler.sort());
//z-a sıralama
//revers çalışması için sıralı bir dizi olması lazım.
console.log("Z-A sıralama: " + isimler.reverse());

//alternatif kullanım
const kisa = isimler.sort().reverse();
console.log("alternatif sıralama: " + kisa);

//sayilari küçükten büyüğe sıralama
const kBsirali = sayilar.sort(function(a,b)
{
    return a-b;
});
console.log(kBsirali);
const bKsirali = sayilar.sort(function(a,b)
{
    return b-a;
});
console.log(bKsirali);

ogrenciler.sort(function(a,b)
{
    return b.yas - a.yas;
})
console.log(ogrenciler);

ogrenciler.sort(function(a,b)
{
    if(a.isim > b.isim)
    {
        return 1;
    }
    else if (b.isim > a.isim)
    {
        return -1;
    }
    else
    {
        return 0;
    }
});
console.log(ogrenciler);
