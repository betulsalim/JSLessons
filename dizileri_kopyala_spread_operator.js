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

let kopya = [];

// for (let isim of isimler)
// {
//     kopya.push(isim);
// }
// console.log("isimler: " + isimler);
// console.log("kopya isimler: " + kopya);

kopya = Array.from(isimler);
console.log("isimler: " + isimler);
console.log("kopya isimler: " + kopya);

kopya = [isimler,isimler,isimler,isimler];
console.log(kopya);

kopya =[...isimler,...ogrenciler];
console.log(kopya);

const isim = 'betül Salim';

let harflerDizisi = isim.split('');
console.log(harflerDizisi);

harflerDizisi = [...isim];
console.log(harflerDizisi);

function sayilariTopla(...parameters)
{
    let toplam = 0;
    for(let s of parameters)
    {
        toplam = toplam + s;
    }
    console.log(toplam);
}
sayilariTopla(1,4);
sayilariTopla(1,4,6,8);