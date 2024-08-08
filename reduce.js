const sayilar = [1,2,3,4,5,6,7,8,9,10];

function toplamBul() {
    let toplam = 0;

    for (let i = 0; i < sayilar.length; i++)
    {
        toplam = toplam + sayilar[i];
    }
    console.log("Toplam: " + toplam)
}

toplamBul();

sayilar.reduce(function(pre,curr,index)
{
    console.log("previous: " + pre+ "\ncurrent: " + curr + "\nindex: " +index);
    
},0)

//toplamBul da yaptığımızı reduce ile yapalım.

const sonuc =  sayilar.reduce(function(toplam,curr,index)
{
    console.log("index: " + index);
    return toplam + curr;
}, 0);// 0 değeri initial ilk değerimiz

console.log(sonuc);
const yeniDizi = sayilar.map(function(sayi)
{
    return sayi * 2;
})
console.log("Map fonksiyonu (2 ile çarpma): " + yeniDizi);

const yeniDiziReduce = sayilar.reduce(function(dizininOncekiHali,sonrakiHali)
{
    dizininOncekiHali.push(sonrakiHali * 2);
    return dizininOncekiHali 
},[])

console.log("Reduce ile yazılan fonksiyon \n(2 ile çarpma): \n" + yeniDiziReduce);
