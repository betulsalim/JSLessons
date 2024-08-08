let sayilar = [1,2,3,4];

const yeniDizi = sayilar.filter(function(sayi,index)
{
    return sayi < 3;
});

console.log("Asıl dizim: " + sayilar);
console.log("Filtreli dizim\n(3 den küçükler): " + yeniDizi);

const yeniDiziWithReduce = sayilar.reduce(function (prev, curr, index)
{
    if(curr < 3)
    {
        prev.push(curr);
    }
    return prev;
}, [])

console.log("Filtreleme Reduce ile: " + yeniDiziWithReduce);
