// soru 1
// klavyeden girilen 3 sayının ortalamasını alan bir uygulama yazınız.
/*let num1 = parseInt(prompt("1. sayıyı giriniz: "))
let num2 = parseInt(prompt("2. sayıyı giriniz: "))
let num3 = parseInt(prompt("3. sayıyı giriniz: "))

let sonuc = (num1 + num2 + num3) / 3;
console.log(sonuc)*/

// soru 2 
// klavyeden kenarları girilen bir üçgenin çeşidini yazınız.
/*let kenar1 = parseInt(prompt("1. kenarı giriniz: "))
let kenar2 = parseInt(prompt("2. kenarı giriniz: "))
let kenar3 = parseInt(prompt("3. kenarı giriniz: "))

if((kenar1 != 0) && (kenar2 != 0) && (kenar3 != 0))
{

    if(kenar1 == kenar2 == kenar3)
    {
        console.log("Eşitkenar üçgen")
    }
    else if ((kenar1 != kenar2) && (kenar1 != kenar3) && (kenar2 != kenar3))
    {
        console.log("çeşitkenar üçgen")
    }
    else
    {
        console.log("ikizkenar üçgen");
    
    }
}
else
{
    console.log("geçersiz");
    
}*/

// soru 3 
// klavyeden girilen vize ve final notlarına göre öğrencinin dersi geçip geçmediğini söyleyen bir uygulama yazınız. 
// (geçme notu: 50 vize %40 final %60)
/*let vize = prompt("vize notunu giriniz: ")
let final = prompt("final notunu giriniz: ")

let vizePuan = (vize * 40) / 100;
let finalPuan = (final * 60) / 100;
let sonuc = vizePuan + finalPuan
if(sonuc >= 50)
{
    console.log("Tebrikler geçtiniz notunuz: " + sonuc);
    
}
else
{
    console.log("Geçemediniz notunuz: " + sonuc);
    
}*/

// soru 4 
// kendi adınızı ekrana 5 kez yazdıran uygulamayı tüm döngülerle yazdırın. 

/*let name = "Betül"

for (let i = 0; i < 5 ; i++)
{
    console.log(name);
    
}
let j = 0
while(j < 5)
{
    console.log(name);
    j++;
}*/

// soru 5 
// 1 den 100 e kadar olan sayıların toplamını bulan uygulamayı yazınız

/*let toplam = 0;
for (let i = 0; i <= 100; i++)
{
    toplam = toplam + i;
}
console.log(toplam);*/

// soru 6 
// 1 den 10 a kadar aralarında virgül olacak şekilde for döngüsü ile yazın.
/*let sonuc = "";
for ( let i = 1; i <= 10; i++)
{
    sonuc = sonuc + i; 
    if(i < 10)
        sonuc +=", "
}
console.log(sonuc);*/

// soru 7 
// klavyeden girilen bir sayının faktörüyelini alan uygulama. 
/*let sayi = parseInt(prompt("sayı giriniz: "))
let sonuc = 1;
for (let i = sayi ; i>= 1; i--)
{
    sonuc *= i;
}
console.log(sonuc);*/

// soru 8 
// aşağıda tanımı verilen f(x,y) fonksiyonunu klavyeden girilen x ve y değerleri için hesaplayınız. 
// x > 0 y < 0 ise f(x,y) = 4x+2y+4
// x > 0 y = 0 ise f(x,y) = 2x-y+3
// x < 0 y > 0 ise f(x,y) = 3x+4y+3

/*let x = prompt("x sayısını giriniz: ")
let y = prompt("y sayısını giriniz: ")
let  sonuc;
if((x > 0) && (y < 0))
{
    sonuc = (4 * x) + (2 * y) + 4;
}
else if((x > 0) && (y == 0))
{
    sonuc = (2 * x) - y + 3;
}
else if((x < 0) && (y > 0))
{
    sonuc = (3 * x) + (4 * y) + 3;
}
console.log("sonuç: " + sonuc);*/

// soru 9 
// 100lük sistemde verilen notları harfli sistemde gösteren bir uygulama yazınız.

/*let not = prompt("not giriniz: ")

if(89 < not)
{
    console.log("AA")
}
else if((80 <= not) && (not <= 89))
{
    console.log("BA");
}
else if((75 <= not) && (not <= 79))
{
    console.log("BB");
}
else if((70 <= not) && (not <= 74))
{
    console.log("CB"); 
}
else if((60 <= not) && (not <= 69))
{
    console.log("CC"); 
}
else if((50 <= not) && (not <= 59))
{
    console.log("DC"); 
}
else if((40 <= not) && (not <=49))
{
    console.log("DD");
}
else if((30 <= not) && (not <= 39))
{
    console.log("FD");
}
else if ((0 <= not) && (not <= 29))
{
    console.log("FF")
}*/

// soru 10 
// çarpım tablosunu oluşturan bir uygulama yapınız


/*let sonuc = "";
for (let i = 1; i <11; i++)
{
    for(let j = 1; j < 11; j++)
    {
        sonuc = sonuc + i + " * " + j + " = " + (i*j) + " \n";
        
    }
    console.log(sonuc);
    sonuc = ""
}*/

// soru 11 
// sıcak soğuk oyunu yapalım. sistem 100 e kadar bir sayı üretsin kullanıcı bu sayıyı tahmin etmeye çalışsın kullanıcının girdiği değerlere göre artır azalt denilsin kullanıcı sayıyı bulana kadar deneme yapsın sayıyı bulduğunda kaç denemeden sonra bulduğunu yazsın.

/*let uretilenSayi = parseInt(Math.random() * 101);
console.log("Üretilen sayı: " + uretilenSayi);

let tahmin = -1;
let tahminSayisi = 0;

while(tahmin != uretilenSayi)
{
    tahmin = parseInt(prompt("Bir sayı giriniz: "));
    tahminSayisi++;
    if(tahmin == uretilenSayi)
    {
        console.log("bildiniz");
        console.log("tahmin sayısı: " + tahminSayisi);
    }
    else if(tahmin < uretilenSayi)
    {
        console.log("artır");
        
    }
    else if (tahmin > uretilenSayi)
    {
        console.log("azalt");
        
    }
}*/

// kullanıcıdan sürekli sayı alan ve kullanıcı 0 a bastığında çarpımlarını yazan program

/*let sayi = parseInt(prompt("sayı giriniz: "))
let sonuc = 1;
while (sayi != 0)
{
    sonuc = sonuc * sayi
    sayi = prompt("sayı giriniz: ")
}
console.log("Çarpım sonucu: " + sonuc);*/

// kullanıcıdan alınan iki integer değerlerin en büyük ortak bölenini bulan uygulamayı yazınız

/*let sayi1 = parseInt(prompt("ilk sayıyı giriniz: "));
let sayi2 = parseInt(prompt("ikinci sayıyı giriniz: "));

let ebob = 1, kontrol = 2;

while((kontrol <= sayi1) && (kontrol <= sayi2))
{
    if((sayi1 % kontrol == 0) && (sayi2 % kontrol == 0))
    {
        ebob = kontrol;
    }
    kontrol++;
}
if (ebob == 1)
{
    console.log("asaldır");
    
}
else{
    console.log("ortak bölen: " + ebob);
    
}*/

//kullanıcıdan aldığınız integer değeri sınır yap ve o değere kadar olan bütün asal sayıları yazdır.

/*let sayi = parseInt(prompt("sayı giriniz: ", "10"))
let gosterilecekMetin = "";
for (let i = 2; i <= sayi ; i++)
{
    let asalSayiMi = true;
    for (let j = 2; j < i; j++)
    {
        if(i % j == 0)
        {
            asalSayiMi = false;
            break;
        }

    }
    if(asalSayiMi == true)
    {
        gosterilecekMetin = gosterilecekMetin + "sayınız: " + i + " asaldır\n"
        
        
    }
}
console.log(gosterilecekMetin);*/

// soru 15 

let artisMiktari = 0;
let artiyorMu = true;
let toplam = 0;
let gosterilecekMetinDegeri ="";
for(let i = 1; i <= 35; i = i + artisMiktari)
{
    if(i != 35)
    {
        toplam = toplam + i;
        gosterilecekMetinDegeri = gosterilecekMetinDegeri + i + " + ";
    }
    else
    {
        toplam = toplam + i;
        gosterilecekMetinDegeri = gosterilecekMetinDegeri + i + " = " + toplam;
    }
    if((artisMiktari <= 4) && (artiyorMu == true))
    {
        artisMiktari++;
        if(artisMiktari == 5)
        {
            artiyorMu = false;
            continue;
        }
    }
    else
    {
        artisMiktari--;
        if(artisMiktari == 1)
        {
            artiyorMu = true;
            continue;
        }
    }
}
console.log(gosterilecekMetinDegeri);
