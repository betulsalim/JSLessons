let sayi1 = 90
let sayi2 = 3
console.log("ilk Sayi: " + sayi1)
console.log("ikinci Sayi: " +sayi2)
let toplamSonuc = sayi1 + sayi2;
console.log("Toplam: " + toplamSonuc)
let cikarmaSonuc;
if (sayi1 > sayi2)
{
    cikarmaSonuc = sayi1 - sayi2
}
else if (sayi2 > sayi1)
{
    cikarmaSonuc = sayi2 -sayi1
}
else
{
    cikarmaSonuc = sayi1 - sayi2
}
console.log("Çıkarma: " + cikarmaSonuc)
let carpimSonuc = sayi1 * sayi2
console.log("Çarpım: " + carpimSonuc)
let bolumSonuc;
if (sayi1 >= sayi2)
{
    bolumSonuc = sayi1 / sayi2
}
else
{
    bolumSonuc = sayi2 / sayi1
}
console.log("Bölüm: " + bolumSonuc)
let modSonuc;
if (sayi1 >= sayi2)
{
    modSonuc = sayi1 % sayi2
}
else
{
    modSonuc = sayi2 % sayi1
}
console.log("Mod: " + modSonuc)