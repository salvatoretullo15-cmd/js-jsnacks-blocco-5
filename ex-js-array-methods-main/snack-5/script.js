const nums = [2, 8, 4, 7, 12, 87];

// Crea un array a partire dall'array nums, che abbia solo i numeri pari
// Risultato: [2, 8, 4, 12]

//versione asciutta
const evenNumber = nums.filter(num => num  % 2===0)
console.log(evenNumber);

//versione estesa
const evenNumbe = nums.filter((numb)=>{
    if(numb % 2 === 0){
        return true
    }else{
        return false
    }
})

console.log(evenNumbe)