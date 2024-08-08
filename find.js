const kisiler = [
    {id: 1, ad: 'Betül'},
    {id: 2, ad: 'Selin'},
    {id: 3, ad: 'İlayda'},
    {id: 4, ad: 'Meryem'},
    {id: 5, ad: 'Nesrin'},
    {id: 6, ad: 'Burak'}
];

const sonuc = kisiler.find(function (kisi)
{
    return kisi.id === 4;
})
console.log(sonuc);

function kendiFindMetodum (kisiler, aranilanDeger)
{
    let bulunanDeger = undefined;
    for (let i = 0; i< kisiler.length; i++)
    {
        if(aranilanDeger(kisiler[i]))
        {
            return kisiler[i];
        }
    }
    return bulunanDeger;
}
const sonuc1 = kendiFindMetodum(kisiler, function(kisi)
{
    return kisi.id === 6;
});

console.log(sonuc1);
