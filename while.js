let sayi = 0

while (sayi <= 10)
{
    if(sayi % 2 == 0)
    {
        console.log("Sayısı: " + sayi+ " çifttir.")
    }
    else
    {
        console.log("Sayısı: " + sayi+ " tektir.")
    }
    sayi++;
}

let age2 = 0

do {
    console.log("Yaş: " + age2 + " Çocuk yaşıdır.")
    age2++;
} while (age2 < 18);

for (let i = 0; i < 50; i++)
{
    if(i == 12)
    {
        break;
    }
    console.log("break kullanımı")
}

for (let j = 0; j < 30; j++)
{
    if(j == 15)
    {
        continue;
    }
    console.log("Continue kullanıldı");
    
}

//for içinde return kullanımı sadece fonksiyon içindeyse olur aksi takdirde Illegal return statement hatası alır.
/*for (let x = 0; x < 10; x++)
{
    if(x == 5)
    {
        return;
    }
    console.log("Return kullanımı: " + x);
    
}*/