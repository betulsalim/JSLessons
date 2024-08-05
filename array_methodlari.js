let isimler = ["betül", "burak", "ayse"];

console.log(isimler.toString());
console.log(isimler.join(" | "));
//son elemanı çıkarır
let elemanSayisi = isimler.push("salih");
console.log(isimler.toString() + "\ndizinin eleman sayısı: " + elemanSayisi);

//sona eleman ekler
let kaldirilanEleman = isimler.pop(); //son elemanı kaldırır
console.log(isimler.toString() + "\nçıkarılan eleman: " + kaldirilanEleman);
//ilk elemanı çıkarır
let ilkEleman = isimler.shift();
console.log(isimler.toString() + "\nçıkarılan eleman: " + ilkEleman);
//ilke eleman ekler
let yeniElemanSayisi = isimler.unshift();
console.log(isimler.toString() + "\nyeni eleman sayısı: " + yeniElemanSayisi);
//sadece silme yapar kaydırma yapmadan
delete isimler[1];
console.log(isimler.toString());

let sayilar = [1,2,3,4,5,6,7,8,9]
//7.indeksten başla hiçbir sayı silme (0) "10" "11" sonrasına ekle
sayilar.splice(7, 0, "10", "11")
console.log(sayilar.toString());
//0.indeksten başla 4 elemanı sil "oldu" stringini yaz.
sayilar.splice(0, 4, "oldu ")
console.log(sayilar.toString());

let tekSayilar = [1, 3, 5, 7, 9]
let ciftSayilar = [2, 4, 6, 8, 10]

let tumSayilar = tekSayilar.concat(ciftSayilar)
console.log(tumSayilar.toString());

let yeniDizi = tumSayilar.slice(2, 4)
console.log(yeniDizi.toString()+ "\n" + tumSayilar.toString());
