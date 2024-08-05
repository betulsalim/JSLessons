
selamVer();
let sum1 = sumNumbersWithForStatement(0 ,10)
let sum2 = sumNumbersWithForStatement(30 , 60)
let sum3 = sumNumbersWithForStatement(20, 10)
let toplam = sumNumbers(10, 20);
console.log("Toplam: " + toplam);


function selamVer ()
{
    console.log("merhaba");
    
}

function sumNumbers(sayi1,sayi2) 
{
    console.log("Sayıların toplamı: " + (sayi1 + sayi2));
    return sayi1 + sayi2;
}

console.log(typeof sumNumbers);

function sumNumbersWithForStatement(start,end)
{
    let sonuc = 0;
    if(start < end)
    {
        for(let i = start; i <= end ; i++)
        {
            sonuc =  sonuc + i;
        }
        console.log("Artan Sayıların Toplam: " + sonuc);
    }
    else if (start > end)
    {
        for(let i = start ; i >= end; i--)
        {
            sonuc = sonuc + i;
        }
        console.log("Azalan Sayıların Toplam: " + sonuc);
    }
    return sonuc;
}