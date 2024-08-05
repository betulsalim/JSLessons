function selamVer() 
{
    console.log("merhaba");
}

selamVer();

const selamVerDegiskeni = function () 
{
    console.log("merhaba selamVerDegisken");
}
selamVerDegiskeni();

const fatArrow = _= () =>
{
    console.log("merhaba fatArrow");
}
fatArrow();

function karesiniAl (sayi)
{
    return sayi * sayi;
}
console.log(karesiniAl(5));

const fatArrowParameters  = (sayi) => 
{
    return sayi * sayi;
};

console.log(fatArrowParameters(10));

const fatArrowParametersShort  = sayi => sayi * sayi;
    
console.log(fatArrowParametersShort(9));

const sayilariTopla  = (s1, s2) => s1+s2;

console.log(sayilariTopla(5, 7));
