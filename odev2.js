// Math.random() ile rastgele bir sayı üretebilirsiniz.
// Bu fonksiyon 0 dahil - 1 hariç bir değer üretir mesela 0.56 gibi 
// sonrasında bu ifadenin sonucunu istediğiniz aralığın üst sınırıyla çarparsanız verilen aralıkta değer üretmiş olursunuz. 

// Mesela 0 ile 10 arasında bir sayı için (Math.random() * 10) + 1 size 1 ile 10 
// arasında 10 da dahil bir sayı üretir. 

// Üretilen bu sayı ondalıklı olabilir bunu tam sayı yapmak için Math.floor() kullanabilirsiniz. 

// küçük bir piyango oyunu tasarlayınız. Sistem iki basamaklı bir sayı üretmeli. Kullanıcıdan da bu sayıyı tahmin etmesini istemelisiniz. 

// doğru bilirse 10000 tl;
// sayının basamaklarını bilirse yani 65 yerine 56 yazmışsa 5000 tl;
// sadece bir basamağını bildiyse 1000 tl kazanır

let min = 10;
let max = 99;
let odul = 0;
let yeniPiyangoSayisi = (Math.random()* (max - min +1)) + min;
console.log(yeniPiyangoSayisi)
let tamPiyangoSayisi = Math.floor(yeniPiyangoSayisi)
console.log(tamPiyangoSayisi)
console.log("Şu anki para miktarınız: " + odul)

let tahmin = parseInt(prompt("Sayıyı tahmin ediniz: ", "10"))
let b = tamPiyangoSayisi % 10;
let a = Math.floor(tamPiyangoSayisi / 10);
let c = Math.floor(tahmin / 10);
let d = tahmin % 10;

if(tahmin == tamPiyangoSayisi)
{
    odul = odul + 10000;
    console.log("Tebrikler bildiniz!!")
    console.log("Yeni Para Miktarınız: " + odul)
}
else if (a == d && b == c)
{
    odul = odul + 5000;
    console.log("Sayıyı bilemediniz fakat sayının basamaklarını bildiniz tebrikler!!")
    console.log("Yeni Para Miktarınız: " + odul)
}
else if (b === d || a === c)
{
    odul = odul + 1000;
    console.log("Sayının sadece tek basamağını bildiniz.")
    console.log("Yeni Para Miktarınız: " + odul)
}
