let information =
{
    name : 'Betül',
    surname : 'Salim',
    birthDate: 2003,
    city : 'İstanbul',
    country : 'Türkiye',
    likeColors : ['purple', 'black'],
    yasiHesapla : function ()
    {
        age = 2024 - birthDate
    }
};

let information2 =
{
    name : 'Nesrin',
    surname : 'Salim',
    city : 'İstanbul',
    birthDate : 1984,
    country : 'Türkiye',
    likeColors : ['pink', 'blue'],
    yasiHesapla : function ()
    {
        this.age = 2024 - this.birthDate
    }
};
console.log("Adı: " + information.name + "\nSoyadı: " + information.surname + "\nYaşı: " + information.age + "\nŞehir: " + information.city + "\nÜlke: " + information.country + "\nSevdiği Renkler: " +information.likeColors);

console.log("********************************\n");
console.log(information.age);

let informations = [information, information2]
console.log(informations);

let ayse = new Object(); //alternatif obje oluşturma çok tavsiye edilmez.
