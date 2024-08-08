let sayilar = [1,2,3,4,5,6,2,3,2];

const bulunanEleman = sayilar.find(function(sayi,index)
{
    return sayi === 2;
});

console.log("Bulunan Eleleman (2 için): " + bulunanEleman);

const bulunanElemanReduce =  sayilar.reduce(function(pre,curr,index)
{
    if(curr === 2)
    {
        return curr;
    }
    else
    {
        return pre;
    }
},undefined)

console.log("Bulunan Eleman With Reduce (2 için): " + bulunanElemanReduce);
