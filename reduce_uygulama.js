// function areParenthesesBalanced(str) {
//     let stack = [];

//     for (let char of str) {
//         if (char === '(') {
//             stack.push(char);
//         } else if (char === ')') {
//             if (stack.length === 0) {
//                 return false; // Kapatan parantez var ama açan yok
//             }
//             stack.pop();
//         }
//     }

//     return stack.length === 0; // Eğer stack boşsa, parantezler dengelidir
// }

// const fun = areParenthesesBalanced('(((()))');
// console.log(fun);

function parantezlerDengeliMi(metin)
{
    const dizi = metin.split('');
    const sonuc = dizi.reduce(function(pre,curr)
    {
        if(pre < 0)
        {
            return pre;
        }
        if(curr === '(')
        {
            return ++pre;
        }
        else if (curr === ')')
        {
            return --pre;
        }
        return pre;
    },0);
    if (!sonuc) 
    {
        console.log(metin + " dengeli bir yapıdadır.");
    }
    else
    {
        console.log(metin + " dengeli bir yapıda değildir.");
        
    }
    
}
parantezlerDengeliMi(')(')