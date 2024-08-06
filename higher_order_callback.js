let myDizi = [1, 2, 3];

const diziKopyalaVeIkiIleCarp = function (dizi)
{
    let geciciDizi = [];
    for (let i = 0; i < dizi.length; i++)
    {
        geciciDizi[i] = dizi[i] * 2;
    }
    console.log(geciciDizi);
    
}

diziKopyalaVeIkiIleCarp(myDizi)