const numbers = [2, 8, 4, 7, 2, 87];

// Crea un nuovo array in cui tutti i numeri siano incrementati di 1
// Risultato: [3, 9, 5, 8, 3, 88]

const plusNumber = numbers.map(num => num  + 1)
console.log(plusNumber);

//metodo con il for each
const numbs=[]
numbers.forEach((numb)=>{
    numbs.push(++numb)
})
console.log(numbs);

//metodo con il for 
const newNumbs=[]

for (let i = 0; i < numbers.length; i++) {
    let numb = numbers[i];
    newNumbs.push(++numb)//numb=numb+1
}
console.log(newNumbs);
