// 2 farklı türde veri this,pleri var:
// 1.Primitive
// 2.referans

// primitive tipler: Number, String, Boolean, Undefined, Null, Symbol
// Referans tipler: Object

let number = 50

console.log("VERİ TİPLERİ:")
console.log("Verimin Tipi: " + typeof (number) + " Verimin Değeri: " + number)

let name = "Betül"
let surName = 'Salim'

let sentence = "Betül'ün Bilgisayarı"
console.log(sentence)
let sentence1 = 'Betül\'ün Bilgisayarı'
console.log(sentence1)
let fullName = name + " " + surName
console.log(fullName)
console.log("Verimin Tipi: " + typeof (name) + "Verimin Değeri: " + name)

//tremplate literal - backtick

let fullName1 = `${name} ${surName}`
console.log(fullName1)

let asalSayiMi = true;
console.log("Veri Türümüzün Değeri: " + asalSayiMi + " Veri Tipi: " + typeof asalSayiMi)
console.log(`Veri Türümüzün Değeri: ${asalSayiMi} Veri Tipi: ${typeof asalSayiMi}`)

let color;
console.log("Bu değişken Tanımlanmış fakat değer atanmamış: " + color)
color = "yeşil"
console.log(color)

let = yas = null
console.log("Yaş: " + yas + "Veri tipi: " + typeof yas)
