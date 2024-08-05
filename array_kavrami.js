let arabaMarkalari = ["Mercedes", "Audi", "BMW"];
console.log("Eski dizi: " + arabaMarkalari.toString());
console.log(arabaMarkalari);
console.log("Araba: " +arabaMarkalari[0].toString());
arabaMarkalari[2] = "Citroen"
arabaMarkalari[3] = "Honda"
arabaMarkalari[89] = "Suzuki"


console.log("Yeni Dizi: " + arabaMarkalari.toString());
console.log("Araba: " +arabaMarkalari[2].toString());
console.log(arabaMarkalari[2]);

console.log(arabaMarkalari.length);

for(let i = 0 ; i < arabaMarkalari.length ; i++)
{
    console.log(arabaMarkalari[i]);
}
console.log("******\n******")
for(let diziElemani of arabaMarkalari)
{
    console.log(diziElemani);
}

let yeniDizi = [1, "araba", true];
for (let diziElemani of yeniDizi)
{
    console.log(diziElemani);
}