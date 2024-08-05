// Ödev 1
// Bir değişken oluşturun ve bu değişkende saniye değerini tutun.
// Sonra bu saniye değerinin kaç dakika ve saniyeye denk geldğini yazın

let saniye = 1200
if(saniye >= 60)
{
    let bol = saniye / 60
    let tamKisim = Math.floor(bol)
    let ondalikKisim = bol - tamKisim;
    console.log("Dakika: " + tamKisim + " Saniye: " + ondalikKisim)
}

/* Ödev 2
Bir değişken oluşturun ve bu değişkene fahrenheait cinsinden sicaklığı saklayın.
sonrasında bu değerin kaç celsius olduğunu yazın.
formül: celcius = 5/9 *(fahrenheait - 32)
*/

let fahrenheait = 100

let celcius = 5/9 * (fahrenheait - 32)
console.log("Fahrenheait: " + fahrenheait + " Celcius: " + celcius)

/* Ödev 3
Bir yıl değerinin artık yıl olup olmadığını hesaplayın
bir yılın artık olması için ya 400 ile modu 0 olmalı ya da 4 ile modu sıfır olmaması gerekir.
*/

let yil = 4100
let bool = true
if(yil % 400 == 0 || yil % 4 != 0)
{
    console.log(bool)
}
else
{
    bool = false
    console.log(bool)
}