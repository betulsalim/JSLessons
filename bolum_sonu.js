// soru 1
// sehirler diye bir dizi olustur.
// bilgiler ekle
// bu bilgiler sehrin adi,plaka numarasi ve sehrin komsuları olabilir

const sehir =[
    {adi: 'İstanbul', plaka: 34},
    {adi: 'Ankara', plaka: 6},
    {adi: 'Erzurum', plaka: 25},
    {adi: 'Van', plaka: 24},
    {adi: 'Antalya', plaka: 7}
];

sehir.sort(function(a,b)
{
    if(a.adi > b.adi)
    {
        return 1;
    }
    else if (a.adi < b.adi)
    {
        return -1;
    }
    else
    {
        return 0;
    }
});


console.log(sehir);

// soru 2
// kullanıcıdan alınan değerlere kadar olan sayı dizisini fibonacci şeklinde yazdırın

function fibonacci(sayi)
{
    let sonucDizi = [0,1];
    for (let i = 2; i < sayi; i++)
    {
        const hesaplananEleman = sonucDizi[i-1] + sonucDizi[i-2];
        if(hesaplananEleman < sayi)
        {
        sonucDizi[i] = hesaplananEleman;
        }
        else
        {
            break;
        }
    }
    return sonucDizi
}

console.log(fibonacci(50));

// soru 3
// öğrencileri tutan bir dizi yap.
// herbir öğrenci için ad, soyad, ve id değerleri olsun.
// id numarası çift olan sayı içinöğrencilerin adı ve soyadını birleşik yazdır. 
// a dan z ye sıralı yazdır.
const ogrenciler =[
    {id: 0, adi: 'betül' , soyad:'Salim'},
    {id: 4, adi: 'hasan' , soyad:'altın'},
    {id: 2, adi: 'ali' , soyad:'boz'},
    {id: 8, adi: 'enes' , soyad:'kurt'}
];

//id numarası çif olan öğrenciler :
const ciftOlanOgrenciler = ogrenciler.filter(function(ogrenci)
{
    return ogrenci.id % 2 === 0;
});
console.log(ciftOlanOgrenciler);

//adı ve soyadı birleştirilmiş halde tutan dizi.
const isimler = ciftOlanOgrenciler.map(function(ogrenci)
{
    return ogrenci.adi + " " + ogrenci.soyad 
});
console.log(isimler);

//a dan z ye sıralama:
isimler.sort();
console.log(isimler);

const sonuc = ogrenciler.filter((ogrenci) => ogrenci.id % 2 === 0)
.map(ogrenci => ogrenci.adi + " " + ogrenci.soyad)
.sort(); 
console.log(sonuc);
