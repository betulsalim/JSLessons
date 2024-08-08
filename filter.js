const bitkiler = [
    {adi: 'üzüm' , tur : 'meyve'},
    {adi: 'çilek' , tur : 'meyve'},
    {adi: 'muz' , tur : 'meyve'},
    {adi: 'ıspanak' , tur : 'sebze'},
    {adi: 'kereviz' , tur : 'sebze'}
];
const meyveler = bitkiler.filter(function(bitki)
{
    return bitki.tur === 'meyve';
});
const sebzeler = bitkiler.filter(function(bitki)
{
    return bitki.tur === 'sebze';
});

console.log(meyveler,sebzeler);

function kendiFilterYapim (dizi, filterSartlari)
{
    const geciciDizi = [];
    for (let i = 0; i < dizi.length; i++)
    {
        const sonuc = filterSartlari(dizi[i], 'meyve');
        if(sonuc)
        {
            geciciDizi.push(dizi[i]);
        }
    }
    return geciciDizi;
}
function filtre (bitki, sart) 
{
    return bitki.tur === sart;
}
function filtreSebze (bitki)
{
    return bitki.tur === 'sebze';
}
const sebzeBul = kendiFilterYapim(bitkiler, filtreSebze);
const meyveBul = kendiFilterYapim(bitkiler, filtre);
console.log(meyveBul);
console.log(sebzeBul);



// function meyveBul ()
// {
//     const geciciDizi = [];
//     for(let i = 0; i < bitkiler.length; i++)
//     {
//         if (bitkiler[i].tur === 'meyve' )
//         {
//             geciciDizi.push(bitkiler[i]);
//         }
//     }
//     return geciciDizi;
// }
// console.log(meyveBul());

// function sebzeBul ()
// {
//     const geciciDizi = [];
//     for(let i = 0; i < bitkiler.length; i++)
//     {
//         if (bitkiler[i].tur === 'sebze' )
//         {
//             geciciDizi.push(bitkiler[i]);
//         }
//     }
//     return geciciDizi;
// }
// console.log(sebzeBul());